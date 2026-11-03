# Ensemble

Site de mise en relation entre musiciens, groupes et lieux. Le nom du projet est provisoire.

## Prérequis

- [Node.js LTS](https://nodejs.org) (22.12 ou plus)
- [Git](https://git-scm.com)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/), pour la base de données locale

## Installation

```powershell
powershell -ExecutionPolicy Bypass -File setup.ps1
pnpm dev
```

Le site s'ouvre sur http://localhost:5173.

## Base de données locale

1. Lancez Docker Desktop, puis `pnpm db:start`.
2. Copiez l'URL et la clé publique affichées dans `apps/web/.env`.

Les migrations sont dans `supabase/migrations`, et `pnpm db:reset` les rejoue depuis une base vide.

## Commandes

| Commande | Rôle |
|---|---|
| `pnpm dev` | Site en développement |
| `pnpm build` / `pnpm start` | Build et serveur de production |
| `pnpm typecheck` | Vérification des types |
| `pnpm test` | Tests unitaires |
| `pnpm e2e` | Tests de navigateur (une fois : `pnpm --filter @app/web exec playwright install chromium`) |
| `pnpm check` / `pnpm format` | Lint et formatage |

Pour ajouter un composant : `cd apps/web`, puis `pnpm dlx shadcn@latest add button`.

## Structure

- `apps/web` : le site (React Router, Tailwind). La navigation se définit dans `app/lib/navigation.ts`.
- `packages/shared` : règles de validation communes.
- `supabase` : configuration et migrations.
