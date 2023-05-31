create extension if not exists "uuid-ossp";

create table public.colors(
  id uuid unique default uuid_generate_v4(),
  name text,
  user_id uuid references auth.users(id) on delete cascade not null,
  l numeric not null,
  c numeric not null,
  h numeric not null,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null,
  primary key (id)
);

alter table public.colors enable row level security;

create policy "Users can view own colors" on colors
  for select to authenticated
    using (auth.uid() = user_id);

create policy "Users can update own colors" on colors
  for update to authenticated
    using (auth.uid() = user_id);

create policy "Users can delete own colors" on colors
  for delete to authenticated
    using (auth.uid() = user_id);
