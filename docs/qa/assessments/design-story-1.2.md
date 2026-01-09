# Test Design: Story 1.2 - Authentification Utilisateur (MVP)

**Status:** Completed
**Date:** 2026-01-09
**Agent:** Quinn (Test Architect)

## 1. Objectifs de Validation
Garantir que l'accès à l'Atelier est hermétique, que les profils sont créés de manière fiable et que la séparation des données (RLS) est inviolable.

## 2. Plan de Test (Scénarios Gherkin)

### Scénario 1 : Protection des Routes (Middleware)
*   **Given** Un utilisateur non connecté.
*   **When** Il tente d'accéder à `https://postry.ai/atelier/dashboard`.
*   **Then** Il doit être redirigé vers `/login`.
*   **And** L'URL de redirection doit inclure un paramètre de retour (ex: `?next=/atelier/dashboard`).

### Scénario 2 : Intégrité de la Création de Profil (Trigger DB)
*   **Given** Un nouvel email `test@bmad.tech`.
*   **When** L'utilisateur valide le formulaire d'inscription.
*   **Then** Une entrée est créée dans `auth.users`.
*   **And** Une entrée correspondante avec le même `id` doit apparaître automatiquement dans `public.profiles` sous 500ms.

### Scénario 3 : Isolation RLS (Negative Testing) - CRITIQUE
*   **Given** L'utilisateur A (ID: `uuid-a`) et l'utilisateur B (ID: `uuid-b`).
*   **When** L'utilisateur A utilise son token d'accès pour appeler directement l'API Supabase : `select * from profiles where id = 'uuid-b'`.
*   **Then** La réponse doit être vide (0 ligne) ou une erreur 403.
*   **Validation :** Répéter ce test pour les futures tables `identity_configs` et `posts`.

### Scénario 4 : Persistance de Session (Next.js 15)
*   **Given** Un utilisateur connecté.
*   **When** L'utilisateur ferme son navigateur et revient 1 heure plus tard.
*   **Then** Il doit être automatiquement redirigé vers `/atelier` sans repasser par `/login`.

## 3. Cas Limites (Edge Cases)

| Cas | Comportement Attendu |
| :--- | :--- |
| Email déjà utilisé | Message d'erreur clair "Cet email est déjà associé à un compte". |
| Mot de passe trop court | Validation bloquante côté client et serveur (Zod). |
| Déconnexion forcée | Invalidation immédiate du cookie de session et redirection vers `/`. |
| Login sans profil | (Post-Trigger failure) Création du profil lors de la première visite sur `/atelier`. |

## 4. Outils et Automatisation
*   **Tests Unitaires (Vitest) :** Validation des fonctions utilitaires du client Supabase.
*   **Tests d'Intégration (Vitest + Supabase Local) :** Test des politiques RLS via un client de test.
*   **Tests E2E (Playwright) :** Parcours complet Inscription -> Login -> Accès Atelier.

## 5. Critères de Passage (QA Gate)
1. **Zéro faille RLS :** Aucun accès transversal possible en mode direct API.
2. **Couverture Middleware :** Toutes les routes sous `/atelier/` doivent être protégées.
3. **Audit de Secret :** Aucune clé `service_role` présente dans le bundle client.
