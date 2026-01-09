# Epic 1 : Fondation et Ancrage de Réalité

## Objectif
Établir l'infrastructure technique (Monorepo, Auth, CI/CD) et permettre l'importation ainsi que l'analyse factuelle du CV.

## Valeur Métier
À la fin de cet epic, l'utilisateur peut créer un compte et voir son "expertise brute" extraite et structurée par le système.

## Stories liées
- [Story 1.1 : Initialisation du Projet et CI/CD](../stories/story-1.1-initialisation.md)
- [Story 1.2 : Authentification Utilisateur (MVP)](../stories/story-1.2-authentification.md)
- [Story 1.3 : Collecte de l'Expertise (CV ou Manuel)](../stories/story-1.3-collecte-expertise.md)
- [Story 1.4 : Structuration et Création du Profil de Connaissance](../stories/story-1.4-profil-connaissance.md)

## Exigences Non-Fonctionnelles (NFR)
- **NFR2 : Confidentialité et Isolation** : Les données de CV et les profils stylistiques doivent être isolés et chiffrés.
- **NFR4 : Scalabilité de l'IA** : L'architecture doit permettre de gérer des appels API asynchrones.
