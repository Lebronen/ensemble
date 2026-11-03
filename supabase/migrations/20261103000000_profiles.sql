create extension if not exists postgis with schema extensions;

create type public.profile_kind as enum ('musician', 'band', 'venue');

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null check (char_length(display_name) between 2 and 60),
  kind public.profile_kind not null,
  instruments text[] not null default '{}',
  genres text[] not null default '{}',
  city text not null,
  location extensions.geography (point, 4326),
  bio text not null default '',
  created_at timestamptz not null default now()
);

create index profiles_location_idx on public.profiles using gist (location);

alter table public.profiles enable row level security;

create policy "Profils visibles par tous" on public.profiles
  for select using (true);
create policy "Création de son propre profil" on public.profiles
  for insert to authenticated with check ((select auth.uid()) = id);
create policy "Modification de son propre profil" on public.profiles
  for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy "Suppression de son propre profil" on public.profiles
  for delete to authenticated using ((select auth.uid()) = id);
