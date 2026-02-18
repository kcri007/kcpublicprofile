import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Article } from '@/types/article';

const categoryColors: Record<string, string> = {
  'voice-ai': 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
  'agentic-ai': 'border-purple-500/30 text-purple-400 bg-purple-500/10',
  'contact-center': 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
  'enterprise-voice': 'border-amber-500/30 text-amber-400 bg-amber-500/10',
};

interface ArticleCardProps {
  article: Article;
  index: number;
}

export function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link
        to={`/newsletter/${article.id}`}
        className="group block rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/10 hover:bg-white/[0.04] transition-all"
      >
        {/* Hero Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
          <div className="absolute top-3 left-3">
            <Badge className={categoryColors[article.category] || ''}>
              {article.categoryLabel}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>{article.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {article.readTime}
              </span>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
