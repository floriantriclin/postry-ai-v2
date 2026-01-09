# Risk Assessment: Story 1.2 - Authentification Utilisateur (MVP)

**Status:** Completed
**Date:** 2026-01-09
**Agent:** Quinn (Test Architect)

## 1. Résumé de l'Analyse
L'implémentation de l'authentification est le premier rempart de la "Souveraineté de l'Identité" (Vision postry.ai). Le risque majeur identifié est la fuite transversale de données (Data Leakage) entre jumeaux numériques.

## 2. Matrice des Risques

| Risque | Probabilité | Impact | Score | Mitigation |
| :--- | :--- | :--- | :--- | :--- |
| **RLS Bypass** | Medium | Critical | 12 | Utilisation systématique de `auth.uid()` dans les politiques SQL. Tests d'intrusion automatisés (Negative Testing). |
| **Désynchronisation Auth/Profil** | High | High | 9 | Implémenter une logique de "Self-Healing" dans l'application : si le profil manque au login, le créer à la volée. |
| **Exposition SERVICE_ROLE_KEY** | Low | Critical | 4 | Audit des variables d'env. Ne jamais utiliser cette clé côté client (Next.js Client Components). |
| **Session Cookie Hijacking** | Medium | Medium | 6 | Configuration stricte des cookies (HttpOnly, Secure, SameSite=Lax) via @supabase/ssr. |

## 3. Analyse Détaillée

### RLS (Row Level Security) - Point Critique
Le schéma `database-schema.md` prévoit une table `profiles`. Il est impératif que TOUTES les tables futures (`identity_configs`, `knowledge_base`, `posts`) possèdent une colonne `user_id` (ou `id` référençant `auth.users`) et que la RLS soit activée. 
*Danger :* Une requête SQL directe sur `public.profiles` sans client authentifié ne doit rien retourner.

### Synchronisation via Trigger
Le trigger PostgreSQL est élégant mais peut échouer (ex: contrainte violée). 
*Recommandation :* Le middleware ou la page de layout `/atelier` doit vérifier l'existence du profil et le créer si nécessaire, en complément du trigger.

### Next.js 15 Middleware
Le passage à Next.js 15 impose une gestion rigoureuse des headers. Le Middleware doit non seulement vérifier la session mais aussi s'assurer que le cookie de session est rafraîchi correctement pour éviter les déconnexions intempestives pendant la rédaction d'un post.

## 4. Recommandations pour le Dev
1. **Validation stricte :** Utiliser Zod pour valider les inputs d'inscription (mot de passe complexe).
2. **Logs de Sécurité :** Logger les tentatives d'accès aux profils tiers (sans exposer de PII).
3. **Environment Guards :** Ajouter un script de pré-build qui vérifie qu'aucune variable sensible n'est préfixée par `NEXT_PUBLIC_`.
