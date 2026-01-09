# Risk Assessment: Story 1.1 - Initialisation du Projet et CI/CD

**Date :** 2026-01-09
**Auteur :** Quinn (Test Architect & Quality Advisor)
**Statut :** Draft

## 1. Synthèse des Risques Techniques

| ID | Catégorie | Description du Risque | Probabilité | Impact | Mitigations Suggérées |
| --- | --- | --- | --- | --- | --- |
| R1 | Infra / Monorepo | Conflits de dépendances entre les packages partagés et l'application Next.js 16 via pnpm workspace. | Moyenne | Élevée | Utiliser des "peerDependencies" strictes et valider via un script `pnpm -r build`. |
| R2 | CI/CD | Cache Turborepo mal configuré entraînant des builds obsolètes ou des échecs silencieux en CI (GitHub Actions). | Faible | Moyenne | Configurer explicitement les `outputs` dans `turbo.json` et utiliser Remote Caching si possible. |
| R3 | Déploiement | Incompatibilité entre les types Supabase générés localement et l'environnement Vercel Edge. | Moyenne | Élevée | Intégrer la génération de types Supabase (`supabase gen types`) directement dans le pipeline CI. |
| R4 | DX (Dev Exp) | Lenteur des tests unitaires (Vitest) dans un contexte de monorepo croissant. | Faible | Faible | Utiliser le filtrage par package (`turbo run test --filter=...`) pour n'exécuter que le nécessaire. |
| R5 | Sécurité | Fuite de secrets (Supabase Key, Gemini API) lors de la configuration initiale de Vercel/GitHub. | Faible | Critique | Utiliser `vercel env pull` localement et ne JAMAIS committer de fichiers `.env` non chiffrés. |

## 2. Analyse Approfondie

### Orchestration Turborepo
Le risque principal réside dans la configuration de la chaîne de dépendances. Si `packages/shared-types` est modifié mais que `apps/web` ne se re-builde pas correctement à cause d'un cache corrompu, des bugs de type-checking pourraient passer inaperçus en local mais échouer en production.

### Pipeline Vercel/GitHub
L'intégration native est robuste, mais la validation des NFR (Performance, Sécurité) doit être amorcée dès maintenant. Un risque de "déploiement fantôme" existe si le build réussit mais que les variables d'environnement nécessaires au runtime (Edge Functions) sont manquantes.

## 3. Recommandations QA
1. **Smoke Test Post-Deploy :** Mettre en place un script curl simple ou une action GitHub qui vérifie le code HTTP 200 sur l'URL de preview Vercel.
2. **Strict Type Checking :** Forcer `tsc --noEmit` sur l'ensemble du monorepo en CI.
3. **Audit de Structure :** Valider que `packages/database` exporte correctement le client typé pour éviter des importations relatives circulaires.
