-- Create generated_articles table for daily AI-generated articles
create table if not exists public.generated_articles (
  id text primary key,
  title text not null,
  subtitle text not null,
  excerpt text not null,
  category text not null check (category in ('voice-ai', 'agentic-ai', 'contact-center', 'enterprise-voice')),
  category_label text not null,
  date text not null,
  read_time text not null,
  hero_image text not null,
  content text not null,
  sources jsonb not null default '[]'::jsonb,
  topic_hash text unique not null,
  status text not null default 'published' check (status in ('published', 'failed')),
  created_at timestamptz default now()
);

-- Indexes for efficient querying
create index idx_generated_articles_date on public.generated_articles (date desc);
create index idx_generated_articles_category on public.generated_articles (category);
create index idx_generated_articles_status on public.generated_articles (status);

-- Enable Row Level Security
alter table public.generated_articles enable row level security;

-- Anon users can only read published articles
create policy "Allow public read of published articles"
  on public.generated_articles
  for select
  to anon
  using (status = 'published');

-- Service role has full access (used by the edge function)
create policy "Allow service role full access"
  on public.generated_articles
  for all
  to service_role
  using (true)
  with check (true);
