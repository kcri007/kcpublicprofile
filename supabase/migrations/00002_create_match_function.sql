-- Function to match resume sections by embedding similarity
create or replace function public.match_resume_sections(
  query_embedding extensions.vector(384),
  match_threshold float default 0.3,
  match_count int default 6
)
returns table (
  id bigint,
  section_type text,
  title text,
  content text,
  metadata jsonb,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    rs.id,
    rs.section_type,
    rs.title,
    rs.content,
    rs.metadata,
    1 - (rs.embedding <=> query_embedding) as similarity
  from public.resume_sections rs
  where 1 - (rs.embedding <=> query_embedding) > match_threshold
  order by rs.embedding <=> query_embedding
  limit match_count;
end;
$$;
