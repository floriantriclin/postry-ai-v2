# Story 1.1 : Initialisation du Projet et CI/CD

**En tant que** Développeur, **je veux** mettre en place le monorepo, le framework web et le pipeline de déploiement, **afin de** commencer le développement sur des bases solides.

## Statut : Approved

## Critères d'Acceptation :
1. Le monorepo est configuré (Frontend/Backend).
2. Une page "Hello World" est déployée et accessible en ligne.
3. Le pipeline CI/CD valide le build à chaque push.

## Task List (Plan d'exécution technique) :

### 🏗️ Infrastructure Monorepo
- [ ] Initialiser le workspace pnpm (`pnpm init`).
- [ ] Configurer Turborepo (`turbo.json`) pour l'orchestration des builds et du cache.
- [ ] Créer la structure de dossiers (`apps/web`, `packages/database`, `packages/shared-types`, `packages/ai-engine`).
- [ ] Configurer TypeScript au niveau racine avec les options de typage strict (`strict: true`).

### 💻 Frontend (apps/web)
- [ ] Initialiser l'application Next.js 16 (App Router) dans `apps/web`.
- [ ] Configurer Tailwind CSS 4 et Shadcn/UI (base).
- [ ] Créer une page d'accueil "Hello World" conforme à la charte graphique.
- [ ] Mettre en place Vitest pour les tests unitaires des composants.

### 📦 Packages partagés
- [ ] Initialiser `packages/shared-types` avec les interfaces de base (Jumeau, Post).
- [ ] Initialiser `packages/database` et configurer le client Supabase Typé.
- [ ] Initialiser `packages/ai-engine` (structure des dossiers pour les prompts).

### 🚀 CI/CD & Déploiement
- [ ] Configurer GitHub Actions pour le linting, le type-checking et les tests.
- [ ] Connecter le projet à Vercel pour le déploiement automatique.
- [ ] Vérifier l'accessibilité de l'URL de preview.
