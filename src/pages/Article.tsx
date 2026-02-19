import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Clock, ExternalLink, Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useArticle } from '@/hooks/useArticle';
import { useArticles } from '@/hooks/useArticles';
import { ArticleCard } from '@/components/newsletter/ArticleCard';

const categoryColors: Record<string, string> = {
  'voice-ai': 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
  'agentic-ai': 'border-purple-500/30 text-purple-400 bg-purple-500/10',
  'contact-center': 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
  'enterprise-voice': 'border-amber-500/30 text-amber-400 bg-amber-500/10',
};

export default function Article() {
  const { id } = useParams<{ id: string }>();
  const { article, loading } = useArticle(id);
  const { articles } = useArticles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-cyan-500 animate-spin" />
      </div>
    );
  }

  if (!article) return <Navigate to="/newsletter" replace />;

  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
        <img
          src={article.heroImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />
      </div>

      {/* Article Content */}
      <div className="px-4 -mt-24 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Back Link */}
            <Link
              to="/newsletter"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Newsletter
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-4">
              <Badge className={categoryColors[article.category] || ''}>
                {article.categoryLabel}
              </Badge>
              <span className="text-sm text-gray-500">{article.date}</span>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="h-3.5 w-3.5" />
                {article.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-gray-400 mb-6">{article.subtitle}</p>

            {/* Author */}
            <div className="flex items-center gap-3 pb-8 mb-8 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <span className="text-xs font-bold text-white">KC</span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Kevin Curtin</p>
                <p className="text-xs text-gray-500">Principal Consultant, CloudEvolve</p>
              </div>
            </div>

            {/* Markdown Body */}
            <div className="prose prose-invert prose-sm sm:prose-base max-w-none mb-12 prose-headings:text-white prose-headings:font-semibold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-white prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-cyan-500/30 prose-blockquote:text-gray-400 prose-li:text-gray-300 prose-code:text-cyan-400 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-ul:my-4 prose-li:my-1">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>

            {/* Sources */}
            {article.sources.length > 0 && (
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 mb-12">
                <h3 className="text-sm font-semibold text-white mb-4">Sources & References</h3>
                <ul className="space-y-2">
                  {article.sources.map((source, i) => (
                    <li key={i}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="border-t border-white/10 pt-12 pb-16">
              <h2 className="text-lg font-semibold text-white mb-6">More in {article.categoryLabel}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((a, i) => (
                  <ArticleCard key={a.id} article={a} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
