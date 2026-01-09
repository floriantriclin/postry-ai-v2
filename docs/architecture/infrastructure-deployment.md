# Infrastructure et Déploiement

## Environnements et Pipeline CI/CD

Nous utiliserons l'intégration native entre **GitHub** et **Vercel** pour une vélocité maximale.

- **Environnements :**
    - Development : Branche dev, liée à un projet Supabase de test.
    - Preview : Généré automatiquement pour chaque Pull Request (permet à Sally de valider l'UX avant le merge).
    - Production : Branche main, liée au projet Supabase de production.
- **Pipeline CI/CD :**
    1. **Lint & Test :** Validation du code (ESLint) et des tests unitaires (Vitest).
    2. **Architecture Check :** Vérification de la conformité du schéma Supabase via la CLI.
    3. **Deploy :** Déploiement atomique sur Vercel (Frontend + Edge Functions).

## Sécurité et Gestion des Secrets

- **Secrets :** Toutes les clés (Gemini API, Supabase Service Role) sont stockées dans les variables d'environnement chiffrées de Vercel.
- **Protection des Données :**
    - Chiffrement au repos (AES-256) via Supabase.
    - Chiffrement en transit (TLS 1.3).
    - **Isolation IA :** Utilisation de l'API Gemini via Vertex AI (Google Cloud) pour garantir que les données ne sont pas utilisées pour l'entraînement public des modèles (Conformité Entreprise).

## Observabilité et Maintenance

- **Monitoring :** **Sentry** pour la capture des erreurs frontend/backend et **Vercel Analytics** pour la mesure de la latence de l'Equalizer.
- **Logs IA :** Utilisation de **LangSmith** ou d'un outil équivalent pour auditer la qualité des prompts et le coût des tokens en temps réel.
- **Stratégie de Rollback :** Vercel permet un retour instantané à la version précédente en cas de bug sur l'algorithme de "dé-lissage".
