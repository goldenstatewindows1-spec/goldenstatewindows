-- Lead capture table for the website contact form.
-- Mirrors the live schema/policy so the RLS model is reproducible from source.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 200),
  phone text not null check (char_length(phone) between 3 and 40),
  city text check (char_length(city) <= 120),
  project_type text check (char_length(project_type) <= 60),
  message text check (char_length(message) <= 4000),
  source text not null default 'website' check (char_length(source) <= 60),
  status text not null default 'new' check (char_length(status) <= 40)
);

comment on table public.leads is 'Website contact/quote form submissions';

create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- Row Level Security: the public form may INSERT only; anon cannot read/update/delete.
alter table public.leads enable row level security;

drop policy if exists "Public can submit a lead" on public.leads;
create policy "Public can submit a lead"
  on public.leads
  for insert
  to anon, authenticated
  with check (true);
