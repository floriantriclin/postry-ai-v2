# Story 1.1 : Initialisation du Projet et CI/CD

**En tant que** Développeur, **je veux** mettre en place le monorepo, le framework web et le pipeline de déploiement, **afin de** commencer le développement sur des bases solides.

## Statut : Done
## Date de fin : 9 janvier 2026

## Critères d'Acceptation :
1. Le monorepo est configuré (Frontend/Backend).
2. Une page "Hello World" est déployée et accessible en ligne.
3. Le pipeline CI/CD valide le build à chaque push.

## Task List (Plan d'exécution technique) :

### 🏗️ Infrastructure Monorepo
- [x] Initialiser le workspace pnpm (`pnpm init`).
- [x] Configurer Turborepo (`turbo.json`) pour l'orchestration des builds et du cache.
- [x] Créer la structure de dossiers (`apps/web`, `packages/database`, `packages/shared-types`, `packages/ai-engine`).
- [x] Configurer TypeScript au niveau racine avec les options de typage strict (`strict: true`).

### 💻 Frontend (apps/web)
- [x] Initialiser l'application Next.js 16 (App Router) dans `apps/web`.
- [x] Configurer Tailwind CSS 4 et Shadcn/UI (base).
- [x] Créer une page d'accueil "Hello World" conforme à la charte graphique.
- [x] Mettre en place Vitest pour les tests unitaires des composants.

### 📦 Packages partagés
- [x] Initialiser `packages/shared-types` avec les interfaces de base (Jumeau, Post).
- [x] Initialiser `packages/database` et configurer le client Supabase Typé.
- [x] Initialiser `packages/ai-engine` (structure des dossiers pour les prompts).

### 🚀 CI/CD & Déploiement
- [x] Configurer GitHub Actions pour le linting, le type-checking et les tests.
- [x] Connecter le projet à Vercel pour le déploiement automatique.
- [x] Vérifier l'accessibilité de l'URL de preview.


---

## QA Results (Quinn)

**Date :** 2026-01-09
**Verdict :** PASS

### Analyse de Conformité
- **Structure Monorepo :** Conforme au standard défini dans [`source-tree.md`](docs/architecture/source-tree.md). Utilisation de pnpm workspaces et Turborepo.
- **CI/CD :** Pipeline GitHub Actions fonctionnel incluant Linting, Type-checking, Tests et Build.
- **Risques Mitigés :**
    - **R1 (Dépendances) :** Utilisation de `workspace:*` dans `apps/web/package.json`.
    - **R2 (Turbo Cache) :** Configuration explicite des `outputs` dans `turbo.json`.
    - **R3 (Supabase Types) :** Script `supabase:gen` présent dans `packages/database`.
    - **R5 (Sécurité) :** `.gitignore` présent à la racine.

### Observations Techniques
- **Typage :** Strictement activé (`strict: true`) à la racine et dans les packages.
- **Linting :** Configuration de base en place.
- **Next.js 16 :** Structure App Router respectée avec Server Components par défaut.

### Recommandations
1. S'assurer que le script de génération de types Supabase est exécuté automatiquement avant le build en CI.
2. Ajouter un Smoke Test de l'URL de preview Vercel dans une prochaine étape.
