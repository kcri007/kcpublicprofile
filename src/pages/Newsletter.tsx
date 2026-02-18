import { Section } from '@/components/layout/Section';
import { PostsGrid } from '@/components/PostsGrid';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

export default function Newsletter() {
  return (
    <div className="min-h-screen pt-8">
      <Section
        title="Newsletter"
        subtitle="Expert insights on Voice AI agents, enterprise telephony, and conversational AI"
      >
        <div className="text-center mb-12">
          <Button size="lg" asChild>
            <a
              href="https://kevincurtin.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <BookOpen className="h-5 w-5" />
              Subscribe on Substack
            </a>
          </Button>
        </div>

        <PostsGrid />
      </Section>
    </div>
  );
}
