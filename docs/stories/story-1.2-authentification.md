# Story 1.2 : Authentification Utilisateur (MVP)

**En tant qu'** Utilisateur, **je veux** me connecter via un système simple (email ou social login), **afin d'** accéder à mon espace personnel sécurisé.

## Critères d'Acceptation :
1. L'utilisateur peut créer un compte et se connecter via Email/Mot de passe.
2. Les sessions sont persistantes.
3. Les données utilisateur sont isolées en base de données via RLS.
4. L'accès aux routes `/atelier/*` est protégé par un Middleware.

## Dev Notes (Context Technique)
- **Framework :** Next.js 15 (Stable), React 19 (Stable) [Source: docs/architecture/coding-standards.md]
- **Auth :** Supabase Auth [Source: docs/architecture/tech-stack.md]
- **Database :** Supabase (PostgreSQL) [Source: docs/architecture/tech-stack.md]
- **Schema :** Table `profiles` liée à `auth.users` [Source: docs/architecture/database-schema.md]
- **Package Manager :** pnpm [Source: .bmad-core/data/technical-preferences.md]
- **Styling :** Tailwind CSS 4, Esthétique "Atelier" (papiers, textures, serif pour le contenu) [Source: docs/front-end-spec.md, docs/architecture/coding-standards.md]

## Plan d'Exécution Technique

### 1. Configuration Supabase Auth & Client
- [ ] Installer les dépendances `@supabase/auth-helpers-nextjs` (ou `@supabase/ssr`) et `@supabase/supabase-js` via `pnpm` dans `apps/web`.
- [ ] Configurer les variables d'environnement (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) dans `apps/web/.env.local`.
- [ ] Créer le client Supabase (Server/Client components) suivant les standards Next.js 15.

### 2. Base de Données & Sécurité (Migration SQL)
- [ ] Créer une migration SQL dans `packages/database/migrations` pour la table `profiles`.
    - [ ] Définir la table `profiles` avec `id uuid primary key references auth.users on delete cascade`.
    - [ ] Activer la **Row Level Security (RLS)** sur la table `profiles`.
    - [ ] Créer une politique (Policy) : "Users can view and update only their own profile".
    - [ ] (Optionnel) Créer un Trigger PostgreSQL pour créer automatiquement une entrée dans `profiles` lors d'un nouvel insert dans `auth.users`.

### 3. Protection des Routes (Middleware)
- [ ] Implémenter `middleware.ts` à la racine de `apps/web` (ou `src/`).
- [ ] Configurer le rafraîchissement de session Supabase dans le middleware.
- [ ] Rediriger les utilisateurs non authentifiés de `/atelier/*` vers `/login`.

### 4. Interface "Atelier" (UI/UX)
- [ ] Créer la page `/login` (Email/Password) avec l'esthétique "Atelier" :
    - [ ] Utiliser `Inter` pour les contrôles et `EB Garamond` (ou serif équivalente) pour les titres.
    - [ ] Fond "Papier Crème" et boutons "ActionInkButton" (style encre).
- [ ] Créer la page `/register` (Inscription) suivant les mêmes principes.
- [ ] Implémenter la gestion des erreurs de connexion (Feedback immédiat).

## QA Results (Quinn)
- **Risk Assessment:** [risk-story-1.2.md](../qa/assessments/risk-story-1.2.md) - **CONCERNS** (RLS isolation critical, Synchronization fail-safe recommended).
- **Test Design:** [design-story-1.2.md](../qa/assessments/design-story-1.2.md) - **READY** (Includes negative testing for RLS and Trigger validation).
- **Quality Gate:** [epic-1.story-1.2-authentification.md](../qa/gates/epic-1.story-1.2-authentification.md) - **PASS WITH CONCERNS**.

---
**Status:** Approved
**Assignee:** @dev
**Epic:** 1 - Fondations
