import { voiceAiArticles } from './voice-ai';
import { agenticAiArticles } from './agentic-ai';
import { contactCenterArticles } from './contact-center';
import { enterpriseVoiceArticles } from './enterprise-voice';
import type { Article } from '@/types/article';

export const allArticles: Article[] = [
  ...voiceAiArticles,
  ...agenticAiArticles,
  ...contactCenterArticles,
  ...enterpriseVoiceArticles,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
