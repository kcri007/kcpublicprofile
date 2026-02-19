import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.47.0';
import { corsHeaders } from '../_shared/cors.ts';

const ANTHROPIC_API_KEY = Deno.env.get('ANTHROPIC_API_KEY')!;
const ARTICLE_GENERATION_SECRET = Deno.env.get('ARTICLE_GENERATION_SECRET')!;

// All 20 static article titles for dedup
const STATIC_TITLES = [
  'The Voice AI Stack in 2026: From Speech Recognition to Autonomous Agents',
  'Real-Time Speech Processing: The Technology Behind AI Voice Agents',
  'Prompt Engineering for Voice AI: Designing Conversational Flows That Work',
  'Building Production Voice AI with Vapi, Bland.ai, and Pipecat',
  'Voice AI Safety: Guardrails, Compliance, and Responsible Deployment',
  'Agentic AI Explained: From Chatbots to Autonomous Digital Workers',
  'The Framework Wars: LangChain vs Semantic Kernel vs CrewAI',
  'Multi-Agent Orchestration: Coordinating AI Teams in the Enterprise',
  'RAG Architecture Deep Dive: Grounding AI Agents in Enterprise Knowledge',
  'Function Calling and Tool Use: How AI Agents Take Action',
  'The Death of the IVR: How AI is Transforming the Contact Center',
  'Amazon Connect and AI: Building Intelligent Contact Centers on AWS',
  'Genesys Cloud CX: The AI-First Approach to Customer Experience',
  'NICE CXone Enlighten: AI-Powered Workforce and Quality Management',
  'Zoom Contact Center: Bridging UCaaS and CCaaS with AI',
  'Enterprise Voice Architecture in the Cloud Era',
  'Microsoft Teams Phone and Azure Communication Services: The Complete Stack',
  'The Convergence of UCaaS and CCaaS: What It Means for Enterprise',
  'WebRTC and SIP: The Protocols Powering Modern Voice AI',
  '2026 State of Voice AI: Industry Trends and Predictions',
];

const CATEGORIES = [
  { key: 'voice-ai', label: 'Voice AI' },
  { key: 'agentic-ai', label: 'Agentic AI' },
  { key: 'contact-center', label: 'Contact Center' },
  { key: 'enterprise-voice', label: 'Enterprise Voice' },
] as const;

// Curated hero images per category (Unsplash)
const HERO_IMAGES: Record<string, string[]> = {
  'voice-ai': [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  ],
  'agentic-ai': [
    'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1531746790095-e5995af30009?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
  ],
  'contact-center': [
    'https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  ],
  'enterprise-voice': [
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=1200&q=80',
  ],
};

async function hashTitle(title: string): Promise<string> {
  const normalized = title.toLowerCase().trim();
  const encoder = new TextEncoder();
  const data = encoder.encode(normalized);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

function getHeroImage(category: string, dateStr: string): string {
  const images = HERO_IMAGES[category] || HERO_IMAGES['voice-ai'];
  const dayOfYear = Math.floor(
    (new Date(dateStr).getTime() - new Date(new Date(dateStr).getFullYear(), 0, 0).getTime()) /
      86400000
  );
  return images[dayOfYear % images.length];
}

function getTodayDate(): string {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  // Auth check
  const authHeader = req.headers.get('authorization');
  if (!authHeader || authHeader !== `Bearer ${ARTICLE_GENERATION_SECRET}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  );

  try {
    // Fetch recent generated titles for dedup
    const { data: recentArticles } = await supabase
      .from('generated_articles')
      .select('title, category')
      .order('created_at', { ascending: false })
      .limit(100);

    const existingTitles = [
      ...STATIC_TITLES,
      ...(recentArticles || []).map((a: { title: string }) => a.title),
    ];

    // Determine category via round-robin based on day count
    const { count } = await supabase
      .from('generated_articles')
      .select('*', { count: 'exact', head: true });

    const categoryIndex = (count || 0) % CATEGORIES.length;
    const category = CATEGORIES[categoryIndex];

    // Step 1: Topic selection
    const topicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 200,
        system: `You are a topic generator for "The Voice AI Brief", a professional newsletter by Kevin Curtin, a Voice AI Architect and Principal Consultant. Generate a unique article topic for the "${category.label}" category.

The article should be practical, technically deep, and relevant to enterprise decision-makers and engineers working in voice AI, contact centers, or enterprise communications.

EXISTING TITLES (do NOT duplicate these):
${existingTitles.map((t) => `- ${t}`).join('\n')}

Respond with ONLY a JSON object (no markdown, no code fences):
{"title": "...", "subtitle": "..."}`,
        messages: [
          {
            role: 'user',
            content: `Generate a unique ${category.label} article topic for today's newsletter. Return only JSON.`,
          },
        ],
      }),
    });

    if (!topicResponse.ok) {
      const errText = await topicResponse.text();
      throw new Error(`Topic generation failed: ${errText}`);
    }

    const topicResult = await topicResponse.json();
    const topicText = topicResult.content[0].text.trim();
    const topic = JSON.parse(topicText);

    const articleId = slugify(topic.title);
    const todayDate = getTodayDate();
    const topicHash = await hashTitle(topic.title);

    // Check for dedup collision
    const { data: existing } = await supabase
      .from('generated_articles')
      .select('id')
      .eq('topic_hash', topicHash)
      .single();

    if (existing) {
      return new Response(
        JSON.stringify({ message: 'Article with similar topic already exists', id: existing.id }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Step 2: Full article generation
    const articleResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        system: `You are Kevin Curtin, a Voice AI Architect writing for "The Voice AI Brief" newsletter. Write a professional, technically deep article.

STYLE REQUIREMENTS:
- 1200-1800 words
- Use ## for section headings (NOT #)
- Include a blockquote insight (> **Key insight:** ...) in at least 2 sections
- Use bullet points for comparisons and lists
- Include code snippets where relevant (use \`\`\` fenced blocks)
- Write in a confident, practitioner tone — not academic, not salesy
- Include bold text for key terms on first use
- End with a forward-looking conclusion

Respond with ONLY a JSON object (no markdown, no code fences):
{
  "content": "full markdown article content",
  "excerpt": "2-3 sentence excerpt for the article card (no markdown)",
  "readTime": "N min read",
  "sources": [
    {"title": "Source Name", "url": "https://..."},
    ...
  ]
}

Include exactly 5 credible sources (documentation sites, research papers, analyst reports, official blogs).`,
        messages: [
          {
            role: 'user',
            content: `Write a full article with this title: "${topic.title}" and subtitle: "${topic.subtitle}". Category: ${category.label}. Return only JSON.`,
          },
        ],
      }),
    });

    if (!articleResponse.ok) {
      const errText = await articleResponse.text();
      throw new Error(`Article generation failed: ${errText}`);
    }

    const articleResult = await articleResponse.json();
    const articleText = articleResult.content[0].text.trim();
    const articleData = JSON.parse(articleText);

    // Insert into database
    const heroImage = getHeroImage(category.key, todayDate);

    const { error: insertError } = await supabase.from('generated_articles').insert({
      id: articleId,
      title: topic.title,
      subtitle: topic.subtitle,
      excerpt: articleData.excerpt,
      category: category.key,
      category_label: category.label,
      date: todayDate,
      read_time: articleData.readTime,
      hero_image: heroImage,
      content: articleData.content,
      sources: articleData.sources,
      topic_hash: topicHash,
      status: 'published',
    });

    if (insertError) {
      throw new Error(`Database insert failed: ${insertError.message}`);
    }

    return new Response(
      JSON.stringify({
        message: 'Article generated successfully',
        id: articleId,
        title: topic.title,
        category: category.label,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Article generation error:', error);

    // Log failed attempt
    try {
      await supabase.from('generated_articles').insert({
        id: `failed-${Date.now()}`,
        title: 'Generation Failed',
        subtitle: error.message || 'Unknown error',
        excerpt: '',
        category: 'voice-ai',
        category_label: 'Voice AI',
        date: getTodayDate(),
        read_time: '0 min read',
        hero_image: '',
        content: '',
        sources: [],
        topic_hash: await hashTitle(`failed-${Date.now()}`),
        status: 'failed',
      });
    } catch {
      // Ignore logging errors
    }

    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
