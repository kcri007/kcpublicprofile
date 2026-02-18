import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.47.0';
import { corsHeaders } from '../_shared/cors.ts';

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Verify embed secret
    const authHeader = req.headers.get('Authorization');
    const embedSecret = Deno.env.get('EMBED_SECRET');
    if (!authHeader || authHeader !== `Bearer ${embedSecret}`) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    );

    // Get chunks from request body
    const { chunks } = await req.json();
    if (!chunks || !Array.isArray(chunks)) {
      return new Response(JSON.stringify({ error: 'chunks array required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Initialize embedding session
    const session = new Supabase.ai.Session('gte-small');

    const results = [];
    for (const chunk of chunks) {
      // Generate embedding
      const embedding = await session.run(chunk.content, {
        mean_pool: true,
        normalize: true,
      });

      // Insert into database
      const { data, error } = await supabase
        .from('resume_sections')
        .insert({
          section_type: chunk.section,
          title: chunk.title,
          content: chunk.content,
          metadata: chunk.metadata || {},
          embedding: Array.from(embedding),
        })
        .select('id');

      if (error) {
        results.push({ chunk: chunk.title, error: error.message });
      } else {
        results.push({ chunk: chunk.title, id: data[0].id, status: 'success' });
      }
    }

    return new Response(JSON.stringify({ results }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
