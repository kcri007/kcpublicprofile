import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.47.0';
import { corsHeaders } from '../_shared/cors.ts';

const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY')!;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { messages, sessionId } = await req.json();
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'messages array required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    // Get the latest user message for embedding
    const latestMessage = messages[messages.length - 1].content;

    // Detect if the user pasted a job spec
    const isJobSpec = latestMessage.includes('job description') && latestMessage.includes('good fit');

    let sections: { title: string; content: string; similarity?: number }[] | null = null;
    let matchError: unknown = null;

    if (isJobSpec) {
      // For job specs, fetch ALL resume sections so Claude can do a comprehensive comparison
      // Vector search on a full job description produces poor matches — the embedding
      // averages across dozens of requirements and loses specificity
      const { data, error } = await supabase
        .from('resume_sections')
        .select('title, content')
        .order('section_type');
      sections = data;
      matchError = error;
    } else {
      // Normal RAG: embed the query and vector-search for relevant sections
      const session = new Supabase.ai.Session('gte-small');
      const queryEmbedding = await session.run(latestMessage, {
        mean_pool: true,
        normalize: true,
      });

      const { data, error } = await supabase.rpc(
        'match_resume_sections',
        {
          query_embedding: Array.from(queryEmbedding),
          match_threshold: 0.3,
          match_count: 6,
        }
      );
      sections = data;
      matchError = error;
    }

    if (matchError) {
      console.error('Match error:', matchError);
    }

    // Build context from matched sections
    const context = sections?.length
      ? sections
          .map(
            (s: { title: string; content: string; similarity?: number }) =>
              s.similarity
                ? `[${s.title}] (relevance: ${(s.similarity * 100).toFixed(0)}%)\n${s.content}`
                : `[${s.title}]\n${s.content}`
          )
          .join('\n\n---\n\n')
      : 'No specific resume sections matched. Please answer based on general knowledge about Kevin Curtin as a Voice AI Architect.';

    const systemPrompt = `You are a sharp, conversational AI assistant on Kevin Curtin's portfolio website. You answer questions about Kevin's background grounded in the resume context below.

CRITICAL: Keep responses SHORT. 3-5 sentences max. Visitors are scanning, not reading essays.

STYLE:
- One short paragraph, or a sentence + 2-3 tight bullet points. That's it.
- End with a one-line follow-up question (e.g. "Curious how Kevin approaches [topic]?").
- No headers. No long lists. No walls of text.
- Bold 1-2 key terms max. Write like a quick Slack message from a colleague.

CONTENT:
- Only answer from the context below. If it's not there, say so and suggest something you can talk about.
- Off-topic? Redirect briefly to Kevin's professional background.

JOB SPEC ANALYSIS:
If the user pastes a job description and asks about fit, you may use a slightly longer response:
- CAREFULLY read every requirement in the job description
- Match each requirement ONLY to specific, relevant experience from the resume context below — do NOT generalize or cite unrelated skills
- If the job mentions a specific platform (e.g. Zoom, Amazon Connect, Genesys), ONLY cite Kevin's experience with THAT platform — not a different one
- Lead with a clear verdict: "Strong fit", "Great fit", or "Good fit with some gaps"
- List 3-5 bullet points, each tying a specific job requirement → a specific Kevin credential from the context
- If there are genuine gaps, note them honestly but frame constructively
- End with a confident closing line and offer to dig deeper into any specific requirement

RESUME CONTEXT:
${context}`;

    // Call Claude API
    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: isJobSpec ? 512 : 256,
        system: systemPrompt,
        messages: messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!anthropicResponse.ok) {
      const errorText = await anthropicResponse.text();
      console.error('Anthropic API error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to generate response' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const aiResult = await anthropicResponse.json();
    const assistantMessage = aiResult.content[0].text;

    // Log chat message (optional analytics)
    if (sessionId) {
      await supabase.from('chat_messages').insert([
        { session_id: sessionId, role: 'user', content: latestMessage },
        {
          session_id: sessionId,
          role: 'assistant',
          content: assistantMessage,
          tokens_used: aiResult.usage?.output_tokens,
        },
      ]);
    }

    const sources = sections?.map((s: { title: string }) => s.title) || [];

    return new Response(
      JSON.stringify({ message: assistantMessage, sources }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Chat function error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
