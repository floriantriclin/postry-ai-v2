# Préférences Techniques (MANDATOIRES)

Ce document répertorie les choix techniques structurants appris lors des phases de développement.

## Package Manager

- **pnpm :** Nous utilisons `pnpm` comme gestionnaire de paquets unique pour le monorepo. Ne jamais utiliser `npm` ou `yarn`.

## Build et Déploiement

- **Vercel :** L'environnement de build Vercel doit être piloté exclusivement par le fichier `vercel.json` situé à la racine du projet.
- **Turbo :** Utiliser `turborepo` pour orchestrer les builds et les tests en local et sur la CI.
