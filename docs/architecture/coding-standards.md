# Coding Standards (MANDATOIRES)

Ces règles visent à garantir un code propre, typé et performant sur Vercel et Supabase.

## Langages et Frameworks

- **TypeScript 5.x+ :** Typage strict obligatoire (strict: true). Aucun type any n'est autorisé.
- **Next.js 16 (App Router) :** Utiliser les *Server Components* par défaut. N'utiliser 'use client' que lorsque l'interactivité (Framer Motion, formulaires) le nécessite.
- **Tailwind CSS 4 :** Utiliser exclusivement les classes utilitaires pour le styling. Pas de CSS-in-JS ou de fichiers CSS séparés (sauf pour les variables globales).

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
- **Tests :** Chaque nouveau composant UI doit avoir un fichier de test Vitest associé dans le même dossier.
