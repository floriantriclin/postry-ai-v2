# Schéma de Base de Données (Supabase / PostgreSQL)

## Table : profiles

Stocke les informations d'identité et de contexte métier de l'utilisateur.

- id : uuid (Primary Key, lié à auth.users)
- email : text
- professional_domain : text (ex: "Logistique", "Développement Web")
- years_of_experience : integer
- cv_url : text (Lien vers le fichier dans Supabase Storage)
- created_at : timestamp with time zone

## Table : identity_configs (Le Jumeau Numérique)

Stocke les réglages de l'Equalizer et l'empreinte stylistique.

- id : uuid (Primary Key)
- user_id : uuid (Foreign Key vers profiles.id)
- **Réglages Equalizer :**
    - roughness_level : float (0.0 à 1.0)
    - authority_level : float (0.0 à 1.0)
    - tone_level : float (0.0 à 1.0)
- **Vecteur d'Identité :**
    - style_embedding : vector(1536) (Utilise l'extension pgvector. Stocke la signature stylométrique calculée par Gemini pour des recherches de similarité).
- updated_at : timestamp with time zone

## Table : knowledge_base (Les Faits)

Stocke les éléments factuels extraits du CV ou saisis manuellement.

- id : uuid (Primary Key)
- user_id : uuid (Foreign Key vers profiles.id)
- content : jsonb (Stocke les blocs d'expérience : { "title": "...", "company": "...", "achievements": [...] })
- source_type : text (Enum : 'pdf_cv', 'manual_entry')
- is_verified : boolean (Défini à true quand l'utilisateur valide le résumé de l'Epic 1)

## Table : posts

L'historique des publications et les métriques de fidélité.

- id : uuid (Primary Key)
- user_id : uuid (Foreign Key vers profiles.id)
- raw_idea : text (L'entrée brute de l'utilisateur)
- generated_content : text (Le texte produit par l'IA-Miroir)
- final_content : text (Le texte après corrections utilisateur)
- fidelity_ratio : float (Calculé automatiquement : % de texte conservé)
- created_at : timestamp with time zone
