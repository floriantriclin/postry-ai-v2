# Coding Standards (MANDATOIRES)

Ces règles visent à garantir un code propre, typé et performant sur Vercel et Supabase.

## Versions

- **React 19 :** Utiliser la version stable de React 19.
- **Next.js 15 :** Utiliser la version stable de Next.js 15 (ne pas utiliser @rc ou canary).
- **TypeScript 5.x+ :** Typage strict obligatoire (strict: true). Aucun type any n'est autorisé.
- **Tailwind CSS 4 :** Utiliser exclusivement les classes utilitaires pour le styling. Pas de CSS-in-JS ou de fichiers CSS séparés (sauf pour les variables globales).

## Linter

- **ESLint 9 Flat Config :** Obligation d'utiliser la nouvelle configuration "Flat Config" via le fichier `eslint.config.mjs`.

## Tests

- **Vitest :** Utiliser Vitest pour tous les tests unitaires et d'intégration.
- **Configuration :** La configuration doit inclure `jsdom` pour l'environnement de test et `@vitejs/plugin-react` pour le support de React.
- **Localisation :** Chaque nouveau composant UI doit avoir un fichier de test associé dans le même dossier.

## Conventions de Nommage

- **Composants React :** PascalCase (ex: IdentitySlider.tsx).
- **Fichiers et Dossiers :** kebab-case (ex: ai-service.ts, use-mirror.ts).
- **Fonctions et Variables :** camelCase.
- **Tables et Colonnes Supabase :** snake_case (ex: identity_configs).

## Patterns de Développement

- **Gestion de l'IA :** Utiliser exclusivement le **Vercel AI SDK** pour les appels Gemini. Les prompts doivent être isolés dans le dossier packages/ai-engine/prompts.
- **Accès aux Données :** Toujours utiliser le client Supabase avec la gestion des types générés. Ne jamais bypasser la **RLS (Row Level Security)**.
- **Gestion d'État :** Privilégier les hooks React (useState, useReducer) et les URL (via next/navigation) pour l'état de l'Atelier. Éviter les bibliothèques lourdes type Redux.
- **Animations :** Utiliser **Framer Motion** pour toutes les transitions liées au morphing de texte.

## Règles Critiques d'Anti-Erreur IA

- **Zéro Console :** Ne jamais utiliser console.log en production. Utiliser un utilitaire de logging si nécessaire.
- **Commentaires JSDoc :** Chaque fonction complexe (notamment l'algorithme de dé-lissage) doit être documentée avec JSDoc pour expliquer sa logique.
