import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { allArticles } from '@/data/articles';
import type { Article } from '@/types/article';

export function useArticle(id: string | undefined) {
  const staticArticle = allArticles.find((a) => a.id === id);
  const [article, setArticle] = useState<Article | undefined>(staticArticle);
  const [loading, setLoading] = useState(!staticArticle);

  useEffect(() => {
    if (staticArticle || !id) {
      setArticle(staticArticle);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function fetchArticle() {
      try {
        const { data, error } = await supabase
          .from('generated_articles')
          .select('*')
          .eq('id', id)
          .eq('status', 'published')
          .single();

        if (error) throw error;
        if (cancelled) return;

        setArticle({
          id: data.id,
          title: data.title,
          subtitle: data.subtitle,
          excerpt: data.excerpt,
          category: data.category,
          categoryLabel: data.category_label,
          date: data.date,
          readTime: data.read_time,
          heroImage: data.hero_image,
          content: data.content,
          sources: data.sources,
        });
      } catch (err) {
        console.warn('Failed to fetch article:', err);
        if (!cancelled) setArticle(undefined);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchArticle();
    return () => { cancelled = true; };
  }, [id, staticArticle]);

  return { article, loading };
}
