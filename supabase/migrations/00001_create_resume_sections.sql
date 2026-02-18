-- Enable pgvector extension
create extension if not exists vector with schema extensions;

-- Create resume_sections table for RAG
create table if not exists public.resume_sections (
  id bigserial primary key,
  section_type text not null,
  title text not null,
  content text not null,
  metadata jsonb default '{}'::jsonb,
  embedding extensions.vector(384),
  created_at timestamptz default now()
);

-- Create IVFFlat index for cosine similarity search
create index on public.resume_sections
  using ivfflat (embedding extensions.vector_cosine_ops)
  with (lists = 10);

-- Enable Row Level Security
alter table public.resume_sections enable row level security;

-- Allow public read access
create policy "Allow public read access"
  on public.resume_sections
  for select
  to anon
  using (true);
