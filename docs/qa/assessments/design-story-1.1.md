# Test Strategy: Story 1.1 - Initialisation du Projet et CI/CD

**Date :** 2026-01-09
**Auteur :** Quinn (Test Architect & Quality Advisor)
**Statut :** Approved

## 1. Objectifs de Validation
L'objectif est de garantir que la fondation technique (Monorepo, CI/CD) est opérationnelle, scalable et sécurisée avant d'entamer le développement des fonctionnalités métier.

## 2. Niveaux de Test et Validation

### A. Validation Structurelle (Statique)
*   **Monorepo Health :** 
    *   Vérification de la topologie via `pnpm -r exec ls`.
    *   Validation de `turbo.json` : les pipelines `build`, `test`, `lint` doivent être définis avec leurs dépendances.
*   **Typage Strict :** 
    *   Exécution de `tsc --noEmit` à la racine pour valider que tous les packages respectent les types partagés.

### B. Tests Unitaires & Intégration (Vitest)
*   **Apps/Web :** Un test de fumée (Smoke Test) vérifiant que le composant `HomePage` contient le texte "Hello World".
*   **Packages :** Tests basiques sur `shared-types` (si logique présente) et validation de la connexion client dans `database`.

### C. Validation CI/CD (GitHub Actions)
*   **Trigger :** Vérifier que le workflow se déclenche sur `push` et `pull_request`.
*   **Pipeline Steps :**
    1.  Install (Cache pnpm hit)
    2.  Lint (ESLint)
    3.  Type-check (TSC)
    4.  Test (Vitest via Turbo)
    5.  Build (Next.js build via Turbo)

### D. Validation du Déploiement (Vercel)
*   **Preview URL :** Automatisation d'un "Health Check" après déploiement.
    *   *Scénario :* `Given` une PR ouverte, `When` Vercel termine le déploiement, `Then` l'URL retournée doit répondre 200 OK et afficher le contenu attendu.
*   **Configuration Edge :** Vérifier que les variables d'environnement minimales sont présentes via la CLI Vercel.

## 3. Matrice de Traçabilité (Gherkin)

```gherkin
Feature: Initialisation du Monorepo

  Scenario: Validation du build monorepo
    Given un workspace pnpm initialisé
    And une configuration Turborepo valide
    When je lance la commande "pnpm build" à la racine
    Then tous les packages et apps doivent être compilés sans erreur
    And le cache Turborepo doit être mis à jour

  Scenario: Validation du déploiement Vercel
    Given le code est poussé sur la branche "feature/story-1.1-initialization"
    When le pipeline CI/CD GitHub Actions est terminé avec succès
    And Vercel a généré une URL de preview
    Then un appel HTTP GET sur cette URL doit retourner un code 200
    And le contenu de la page doit contenir "Hello World"
```

## 4. Définition de "Done" (DoD) QA
- [ ] Zéro erreur de linting.
- [ ] Zéro erreur de type-checking (Strict mode).
- [ ] Tous les tests unitaires passent.
- [ ] Build de production Next.js réussi.
- [ ] URL de preview accessible publiquement.
- [ ] Schéma Supabase initialisé (si applicable dans cette story).
