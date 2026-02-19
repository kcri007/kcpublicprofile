import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
}

const SUBSTACK_RSS_URL = 'https://kevincloudevolveai.substack.com/feed';

// Fallback posts shown when RSS is unavailable
const fallbackPosts: SubstackPost[] = [
  {
    title: 'The Rise of Voice AI Agents in Enterprise',
    link: 'https://kevincloudevolveai.substack.com',
    pubDate: new Date().toISOString(),
    description:
      'How Voice AI agents are transforming enterprise telephony — from basic IVR to intelligent, context-aware conversations powered by LLMs.',
  },
  {
    title: 'Building Production Voice AI: Lessons from the Field',
    link: 'https://kevincloudevolveai.substack.com',
    pubDate: new Date().toISOString(),
    description:
      'Key architectural decisions and hard-won lessons from deploying Voice AI agents at enterprise scale with Bland.ai, Vapi.ai, and custom solutions.',
  },
  {
    title: 'AI Governance for Voice: Safety, Compliance & Trust',
    link: 'https://kevincloudevolveai.substack.com',
    pubDate: new Date().toISOString(),
    description:
      'Implementing guardrails, PII redaction, and compliance monitoring for production voice AI systems. A practical guide for enterprise teams.',
  },
];

async function fetchPosts(): Promise<SubstackPost[]> {
  // Try rss2json first
  try {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(SUBSTACK_RSS_URL)}`
    );
    const data = await response.json();
    if (data.status === 'ok' && data.items?.length > 0) {
      return data.items.map((item: { title: string; link: string; pubDate: string; description: string; thumbnail?: string }) => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        description: item.description?.replace(/<[^>]*>/g, '').slice(0, 200) + '...',
        thumbnail: item.thumbnail,
      }));
    }
  } catch {
    // fall through
  }

  // Try allorigins proxy
  try {
    const response = await fetch(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(SUBSTACK_RSS_URL)}`
    );
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'text/xml');
    const items = xml.querySelectorAll('item');
    if (items.length > 0) {
      return Array.from(items).map((item) => ({
        title: item.querySelector('title')?.textContent || '',
        link: item.querySelector('link')?.textContent || '',
        pubDate: item.querySelector('pubDate')?.textContent || '',
        description:
          (item.querySelector('description')?.textContent || '')
            .replace(/<[^>]*>/g, '')
            .slice(0, 200) + '...',
      }));
    }
  } catch {
    // fall through
  }

  return fallbackPosts;
}

export function PostsGrid() {
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'recent' | 'top'>('recent');

  useEffect(() => {
    fetchPosts().then((p) => {
      setPosts(p);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-xl border border-navy-700 bg-navy-900/50 p-6 animate-pulse"
          >
            <div className="h-4 bg-navy-700 rounded w-3/4 mb-4" />
            <div className="h-3 bg-navy-700 rounded w-full mb-2" />
            <div className="h-3 bg-navy-700 rounded w-2/3" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 mb-8 justify-center">
        {(['recent', 'top'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                : 'text-gray-400 hover:text-white hover:bg-navy-800'
            }`}
          >
            {tab === 'recent' ? 'Recent Posts' : 'Top Posts'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.a
            key={post.link + index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full hover:border-cyan-500/30 transition-colors group cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-2">
                  <Calendar className="h-3 w-3" />
                  <span>
                    {new Date(post.pubDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <CardTitle className="group-hover:text-cyan-400 transition-colors text-base">
                  {post.title}
                </CardTitle>
                <CardDescription className="mt-2 line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-cyan-400 text-sm flex items-center gap-1 group-hover:underline">
                  Read more <ExternalLink className="h-3 w-3" />
                </span>
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
