import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { allArticles } from '@/data/articles';
import type { Article } from '@/types/article';

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>(allArticles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchGeneratedArticles() {
      try {
        const { data, error } = await supabase
          .from('generated_articles')
          .select('*')
          .eq('status', 'published')
          .order('date', { ascending: false });

        if (error) throw error;
        if (cancelled) return;

        const generated: Article[] = (data || []).map((row) => ({
          id: row.id,
          title: row.title,
          subtitle: row.subtitle,
          excerpt: row.excerpt,
          category: row.category,
          categoryLabel: row.category_label,
          date: row.date,
          readTime: row.read_time,
          heroImage: row.hero_image,
          content: row.content,
          sources: row.sources,
        }));

        const merged = [...allArticles, ...generated].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setArticles(merged);
      } catch (err) {
        console.warn('Failed to fetch generated articles, using static only:', err);
        // Graceful degradation: static articles are already set
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchGeneratedArticles();
    return () => { cancelled = true; };
  }, []);

  return { articles, loading };
}
