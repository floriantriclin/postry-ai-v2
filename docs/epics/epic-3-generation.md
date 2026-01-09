# Epic 3 : Génération de la "Trace Humaine"

## Objectif
Implémenter le moteur de synthèse IA et l'algorithme de "dé-lissage" pour produire des posts LinkedIn à partir d'idées brutes.

## Valeur Métier
L'utilisateur peut générer son premier post LinkedIn "rugueux" et authentique.

## Stories liées
- [Story 3.1 : Capture de l'Idée Brute](../stories/story-3.1-capture-idee.md)
- [Story 3.2 : Moteur de Synthèse IA-Miroir](../stories/story-3.2-moteur-synthese.md)
- [Story 3.3 : Algorithme de "Dé-lissage" (Rugosité)](../stories/story-3.3-algorithme-delissage.md)

## Exigences Non-Fonctionnelles (NFR)
- **NFR1 : Performance (Vélocité)** : Le temps total entre l'idée brute et la génération du post final ne doit pas dépasser 180 secondes.
- **NFR4 : Scalabilité de l'IA** : Gestion des appels API asynchrones pour éviter les blocages d'interface.
