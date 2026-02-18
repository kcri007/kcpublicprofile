-- Optional: Chat message analytics table
create table if not exists public.chat_messages (
  id bigserial primary key,
  session_id text not null,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  tokens_used int,
  created_at timestamptz default now()
);

-- Enable RLS
alter table public.chat_messages enable row level security;

-- Allow anonymous inserts for logging
create policy "Allow anonymous inserts"
  on public.chat_messages
  for insert
  to anon
  with check (true);
