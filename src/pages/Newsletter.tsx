import { useState } from 'react';
import { motion } from 'framer-motion';
import { Rss } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { ArticleCard } from '@/components/newsletter/ArticleCard';
import { allArticles } from '@/data/articles';
import type { ArticleCategory } from '@/types/article';

const categories: { key: ArticleCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'voice-ai', label: 'Voice AI' },
  { key: 'agentic-ai', label: 'Agentic AI' },
  { key: 'contact-center', label: 'Contact Center' },
  { key: 'enterprise-voice', label: 'Enterprise Voice' },
];

export default function Newsletter() {
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | 'all'>('all');

  const filtered =
    activeCategory === 'all'
      ? allArticles
      : allArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen pt-8">
      {/* Hero */}
      <section className="px-4 pb-12">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
              <Rss className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              The Voice AI Brief
            </h1>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-6">
              Expert analysis on Voice AI, agentic systems, contact center transformation,
              and enterprise voice architecture.
            </p>
            <p className="text-sm text-gray-500">
              By Kevin Curtin &middot; Principal Consultant, CloudEvolve
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <Section title="" className="border-t border-white/5">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`text-sm px-4 py-2 rounded-lg border transition-all ${
                activeCategory === cat.key
                  ? 'border-cyan-500/40 bg-cyan-500/10 text-white'
                  : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">No articles in this category yet.</p>
        )}
      </Section>
    </div>
  );
}
