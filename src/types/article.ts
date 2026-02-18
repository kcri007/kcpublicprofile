export type ArticleCategory = 'voice-ai' | 'agentic-ai' | 'contact-center' | 'enterprise-voice';

export interface ArticleSource {
  title: string;
  url: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: ArticleCategory;
  categoryLabel: string;
  date: string;
  readTime: string;
  heroImage: string;
  content: string;
  sources: ArticleSource[];
}
