# PRD

# 1. Objectifs et Contexte de Fond (Version Étendue)

## 1.1 Objectifs (Goals)

- **Souveraineté de l'Identité Numérique** : Créer un système capable de capturer les nuances stylistiques propres à un individu (tics de langage, rythme, "rugosité") pour générer un Jumeau Numérique dont la production est indissociable de l'original humain.
- **Disruption de la Standardisation IA** : Proposer une alternative radicale aux modèles de génération "polis" (type ChatGPT/Claude) en intégrant un moteur de post-traitement dédié à l'authenticité et à l'imperfection volontaire.
- **Optimisation du "Time-to-Post"** : Lever le verrou de la page blanche en permettant de passer d'une idée brute (texte ou fait issu du CV) à une publication prête à l'emploi en moins de 180 secondes, incluant le temps de réglage.
- **Engagement par l'Authenticité** : Viser un taux de rétention des lecteurs supérieur aux contenus standards en misant sur la "résonance humaine" plutôt que sur l'optimisation algorithmique pure.
- **Contrôle et Transparence (L'Equalizer)** : Garantir à l'utilisateur une maîtrise totale sur l'image qu'il projette grâce à une interface de réglage fin de ses traits de caractère numériques, transformant l'IA de "boîte noire" en "outil de sculpture identitaire".

## 1.2 Contexte de Fond (Background)

En ce début d'année 2026, LinkedIn fait face à une crise de saturation sans précédent. L'omniprésence de contenus générés par des IA généralistes a créé une uniformisation des prises de parole, où chaque expert semble utiliser le même ton "professionnel mais enthousiaste". Cette uniformité entraîne une baisse drastique de la confiance des utilisateurs et de la portée organique des publications.

**postry.ai** naît de ce constat : la valeur sur un réseau social n'est plus dans la capacité à produire du texte, mais dans la capacité à projeter une singularité. Le projet s'appuie sur le concept de "Rugosité Stylistique" pour redonner une voix à ceux qui ont un savoir réel (experts techniques, solopreneurs, chercheurs d'emploi) mais qui refusent de se fondre dans la masse robotique. L'enjeu n'est pas technologique, il est humain : comment rester soi-même tout en utilisant la puissance de l'automatisation ?

## 1.3 Journal des Modifications (Change Log)

| **Date** | **Version** | **Description** | **Auteur** |
| --- | --- | --- | --- |
| 08/01/2026 | v1.0 | Création initiale basée sur le Project Brief | John (PM) |

# 2. Exigences (Requirements)

Voici la liste des exigences fonctionnelles et non-fonctionnelles pour le MVP.

## 2.1 Exigences Fonctionnelles (Functional Requirements)

- **FR1 : Importation de Réalité Professionnelle**
    - Le système doit permettre l'importation de fichiers PDF (CV) ou le copier-coller de texte brut (Profil LinkedIn).
    - Le système doit extraire automatiquement les faits, compétences, dates et expériences pour alimenter la base de connaissances du jumeau numérique.
- **FR2 : Parcours "Mirror Discovery" (Onboarding)**
    - Le système doit proposer une série de tests A/B ludiques présentant des variations stylistiques d'un même contenu.
    - Le système doit analyser les choix de l'utilisateur pour établir un profil stylistique initial "LinkedIn-compatible".
- **FR3 : Equalizer d'Identité (Fine-Tuning)**
    - Le système doit fournir une interface de curseurs (Equalizer) permettant d'ajuster des traits de caractère spécifiques : *Rugosité vs Fluidité*, *Humilité vs Autorité*, *Technicité vs Vulgarisation*.
    - Les modifications sur l'Equalizer doivent mettre à jour le profil du jumeau numérique en temps réel.
- **FR4 : Moteur de Génération "Trace Humaine"**
    - Le système doit transformer une idée simple (input utilisateur) en un post LinkedIn structuré respectant le profil calibré.
    - Le système doit appliquer un algorithme de "dé-lissage" pour réinjecter des aspérités stylistiques humaines.
- **FR5 : Éditeur de Fidélité et Mesure**
    - Le système doit fournir un éditeur de texte pour les corrections finales.
    - Le système doit calculer automatiquement le *Fidelity Ratio* (pourcentage de texte modifié par l'utilisateur).
- **FR6 : Gestion des Profils et Historique**
    - Le système doit permettre de sauvegarder et de retrouver les réglages de l'Equalizer et les publications passées.

## 2.2 Exigences Non-Fonctionnelles (Non-Functional Requirements)

- **NFR1 : Performance (Vélocité)**
    - Le temps total entre l'idée brute et la génération du post final ne doit pas dépasser 180 secondes.
- **NFR2 : Confidentialité et Isolation**
    - Les données de CV et les profils stylistiques doivent être isolés et chiffrés. Aucune donnée utilisateur ne doit servir à entraîner des modèles tiers sans consentement explicite.
- **NFR3 : Accessibilité et Responsive**
    - L'interface doit être 100% "Web Responsive" pour une utilisation optimale sur Desktop et Mobile.
- **NFR4 : Scalabilité de l'IA**
    - L'architecture doit permettre de gérer des appels API asynchrones vers les LLM pour éviter les blocages d'interface lors de la génération.

# 3. Objectifs de Design UI (User Interface Design Goals)

L'interface de **postry.ai** doit être le reflet de sa promesse : humaine, authentique et sans artifice.

## 3.1 Vision UX Globale

L'expérience doit s'éloigner des interfaces SaaS "cliniques" et ultra-lisses. Nous visons une esthétique qui évoque le **travail de la matière**, la **réflexion brute** et la **transparence**. L'utilisateur ne doit pas se sentir devant un automate, mais devant un établi où il sculpte son identité.

## 3.2 Paradigmes d'Interaction Clés

- **La Sculpture Identitaire (Equalizer) :** L'interaction avec les curseurs de l'Equalizer doit être sensorielle. Chaque mouvement de curseur doit modifier un court texte d'exemple en temps réel pour montrer l'impact sur la "rugosité" ou le "ton".
- **Le "Bruit Visuel" Contrôlé :** Utilisation subtile de textures, de typographies à empattements (serif) pour le contenu généré, et d'espaces blancs généreux pour favoriser la concentration sur l'écrit.
- **Onboarding "Zéro Effort" :** Le parcours de découverte doit ressembler à un jeu de cartes ou un quiz visuel rapide, évitant tout formulaire long ou complexe.

## 3.3 Écrans et Vues Critiques

1. **Le Portail d'Onboarding (Mirror Discovery) :** Interface de tests A/B ludiques.
2. **Le Studio du Jumeau (L'Equalizer) :** La vue centrale de réglage des traits de caractère.
3. **L'Atelier de Création :** Zone de saisie de l'idée brute et affichage du résultat "dé-lissé".
4. **L'Éditeur de Fidélité :** Interface de comparaison entre le texte généré et les corrections de l'utilisateur.
5. **Le Tableau de Bord des Publications :** Historique simple des posts et des scores de fidélité.

## 3.4 Accessibilité et Plateformes

- **Accessibilité :** Standard **WCAG AA**. Une attention particulière sera portée au contraste des textes et à la lisibilité des typographies "rugueuses".
- **Plateformes :** **Web Responsive**. Priorité au confort de saisie sur Desktop (LinkedIn se consomme beaucoup au bureau), mais Onboarding et consultation optimisés pour Mobile.

# 4. Assomptions Techniques (Technical Assumptions)

Ces décisions serviront de cadre à **Winston (notre Architecte)** pour concevoir le système.

## 4.1 Structure du Répertoire (Repository Structure)

- **Choix : Monorepo**
- **Rationale :** Pour un projet fullstack comme le nôtre, un monorepo facilitera le partage des types (TypeScript) entre l'interface de l'Equalizer (Frontend) et le moteur de synthèse (Backend). Cela simplifie également la gestion des déploiements atomiques.

## 4.2 Architecture des Services (Service Architecture)

- **Choix : Serverless / Edge-First**
- **Rationale :** Nous prévoyons une charge de travail variable (pics de génération de posts). Une architecture serverless (type Vercel Functions ou AWS Lambda) permettra de scaler automatiquement sans gérer de serveurs. Le moteur de "dé-lissage" pourra être déployé sur des fonctions "Edge" pour minimiser la latence lors de l'utilisation de l'Equalizer.

## 4.3 Exigences de Tests (Testing Requirements)

- **Choix : Pyramid Testing + Differential Testing**
- **Rationale :** Au-delà des tests unitaires classiques, nous devons implémenter du "Differential Testing" pour comparer les versions de textes (Généré vs Corrigé). C'est ainsi que nous automatiserons le calcul du *Fidelity Ratio*. Un environnement de test local (via CLI) est requis pour valider les prompts de l'IA-Miroir sans dépendre systématiquement du cloud.

## 4.4 Assomptions et Requêtes Additionnelles

- **Isolation des Données (Privacy by Design) :** Les données extraites des CV ne doivent jamais être stockées de manière permanente dans les "logs" des modèles d'IA tiers. Nous utiliserons des couches d'anonymisation si nécessaire.
- **Moteur d'IA Hybride :** Nous assumerons l'utilisation d'un LLM puissant (type GPT-5 ou Claude 4, standards en 2026) pour la compréhension, couplé à un moteur de règles propriétaire (heuristiques stylistiques) pour injecter la "rugosité".
- **Persistance du "Miroir" :** Les réglages de l'Equalizer doivent être stockés sous forme de "vecteurs de style" ou de configurations JSON structurées pour être réutilisables instantanément à chaque nouvelle session.
- **Temps Réel :** L'interaction avec l'Equalizer nécessite des WebSockets ou des Server-Sent Events (SSE) pour que l'utilisateur voie l'impact de ses réglages sur le texte en moins de 500ms.

# 5. Liste des Epics (Epic List)

Voici l'ordre logique de déploiement pour transformer le concept en réalité :

- **Epic 1 : Fondation et Ancrage de Réalité**
    - *Objectif :* Établir l'infrastructure technique (Monorepo, Auth, CI/CD) et permettre l'importation ainsi que l'analyse factuelle du CV.
    - *Valeur :* À la fin de cet epic, l'utilisateur peut créer un compte et voir son "expertise brute" extraite et structurée par le système.
- **Epic 2 : Sculpture de l'Identité (Mirror Discovery & Equalizer)**
    - *Objectif :* Développer l'onboarding gamifié et l'interface de réglage fin (curseurs) pour définir le style du jumeau numérique.
    - *Valeur :* L'utilisateur peut "sculpter" son reflet et sauvegarder ses préférences stylistiques (le "Vecteur de Style").
- **Epic 3 : Génération de la "Trace Humaine"**
    - *Objectif :* Implémenter le moteur de synthèse IA et l'algorithme de "dé-lissage" pour produire des posts LinkedIn à partir d'idées brutes.
    - *Valeur :* L'utilisateur peut générer son premier post LinkedIn "rugueux" et authentique.
- **Epic 4 : Raffinement, Mesure et Historique**
    - *Objectif :* Créer l'éditeur de fidélité, le calcul automatique du *Fidelity Ratio* et le tableau de bord des publications passées.
    - *Valeur :* L'utilisateur peut finaliser ses publications et nous pouvons mesurer objectivement la précision du jumeau numérique.

# 6. Détails des Epics et Stories

## Epic 1 : Fondation et Ancrage de Réalité

**Objectif :** Mettre en place l'environnement technique et permettre à l'IA de comprendre le métier de l'utilisateur via son CV.

- **Story 1.1 : Initialisation du Projet et CI/CD**
    - *En tant que* Développeur, *je veux* mettre en place le monorepo, le framework web et le pipeline de déploiement, *afin de* commencer le développement sur des bases solides.
    - **Critères d'Acceptation :**
        1. Le monorepo est configuré (Frontend/Backend).
        2. Une page "Hello World" est déployée et accessible en ligne.
        3. Le pipeline CI/CD valide le build à chaque push.
- **Story 1.2 : Authentification Utilisateur (MVP)**
    - *En tant qu'* Utilisateur, *je veux* me connecter via un système simple (email ou social login), *afin d'* accéder à mon espace personnel sécurisé.
    - **Critères d'Acceptation :**
        1. L'utilisateur peut créer un compte et se connecter.
        2. Les sessions sont persistantes.
        3. Les données utilisateur sont isolées en base de données.
- **Story 1.3 : Collecte de l'Expertise (CV ou Manuel)**
    - *En tant qu'* Utilisateur, *je veux* uploader mon CV ou saisir manuellement mes infos (années d'expérience, métier, domaine), *afin de* nourrir mon jumeau numérique sans friction.
    - **Critères d'Acceptation :**
        1. L'utilisateur choisit entre "Upload PDF" ou "Formulaire Rapide".
        2. Le formulaire manuel contient 3 champs : Années d'expérience, Description métier, Domaine.
        3. Les données (qu'elles soient parsées du PDF ou saisies manuellement) sont centralisées dans le profil.
- **Story 1.4 : Structuration et Création du Profil de Connaissance**
    - *En tant que* Jumeau Numérique, *je veux* interpréter les données collectées via l'IA, *afin de* créer une base de connaissances structurée.
    - **Critères d'Acceptation :**
        1. L'IA transforme les entrées (PDF ou Manuel) en un profil JSON structuré.
        2. Le système génère un résumé factuel de l'expertise pour l'utilisateur.
        3. Ce profil sert de "garde-fou" sémantique pour les futures générations de posts.

## Epic 2 : Sculpture de l'Identité (Mirror Discovery & Equalizer)

**Objectif :** Créer l'interface de calibration du style et de la "rugosité".

- **Story 2.1 : Interface "Mirror Discovery" (Quiz)**
    - *En tant qu'* Utilisateur, *je veux* répondre à un quiz visuel de style, *afin de* définir mes préférences esthétiques initiales.
    - **Critères d'Acceptation :**
        1. L'interface présente 3 à 5 choix A/B de textes courts.
        2. L'interaction est fluide et ludique (clic ou swipe).
        3. Les choix sont enregistrés pour alimenter le profil stylistique.
- **Story 2.2 : L'Equalizer d'Identité (UI)**
    - *En tant qu'* Utilisateur, *je veux* ajuster mon profil via des curseurs, *afin de* gommer ou accentuer certains traits (Rugosité, Autorité, etc.).
    - **Critères d'Acceptation :**
        1. L'interface présente au moins 3 curseurs fonctionnels.
        2. Les valeurs des curseurs sont sauvegardées en temps réel.
        3. Le design respecte l'esthétique "Atelier" définie dans les objectifs UI.
- **Story 2.3 : Moteur de Preview en Temps Réel**
    - *En tant qu'* Utilisateur, *je veux* voir un texte d'exemple changer selon mes réglages d'Equalizer, *afin de* comprendre l'impact de mes choix.
    - **Critères d'Acceptation :**
        1. Un texte "témoin" est affiché à côté des curseurs.
        2. Le texte est mis à jour en moins de 1 seconde après un mouvement de curseur.
        3. Les variations reflètent réellement les changements de ton (ex: plus direct, plus technique).

## Epic 3 : Génération de la "Trace Humaine"

**Objectif :** Implémenter le moteur de rédaction "rugueuse" basé sur l'identité calibrée.

- **Story 3.1 : Capture de l'Idée Brute**
    - *En tant qu'* Utilisateur, *je veux* saisir une idée simple ou un fait marquant dans un champ texte, *afin de* lancer la création d'un post.
    - **Critères d'Acceptation :**
        1. Une zone de saisie simple est disponible.
        2. Le système accepte des notes brutes, même mal structurées.
- **Story 3.2 : Moteur de Synthèse IA-Miroir**
    - *En tant que* Jumeau Numérique, *je veux* rédiger un post LinkedIn en combinant l'idée brute, les faits du profil et les réglages de l'Equalizer.
    - **Critères d'Acceptation :**
        1. Le post produit respecte strictement les faits de l'Epic 1.
        2. Le ton et le style correspondent aux réglages de l'Equalizer (Epic 2).
- **Story 3.3 : Algorithme de "Dé-lissage" (Rugosité)**
    - *En tant que* Système, *je veux* appliquer un post-traitement au texte généré, *afin d'* injecter des imperfections stylistiques humaines (rugosité).
    - **Critères d'Acceptation :**
        1. Le texte final évite les structures trop parfaites ou répétitives des LLMs standards.
        2. La rugosité est modulée selon le curseur dédié de l'Equalizer.

## Epic 4 : Raffinement, Mesure et Historique

**Objectif :** Finaliser la boucle de feedback et le suivi des performances.

- **Story 4.1 : Éditeur de Fidélité et Comparaison**
    - *En tant qu'* Utilisateur, *je veux* relire et modifier le post généré, *afin de* lui apporter ma touche finale.
    - **Critères d'Acceptation :**
        1. Un éditeur de texte riche est disponible.
        2. L'interface permet de comparer facilement la version IA et la version modifiée.
- **Story 4.2 : Calcul du Fidelity Ratio**
    - *En tant que* Product Manager, *je veux* mesurer le taux de correction apporté par l'utilisateur, *afin de* valider la précision du jumeau numérique.
    - **Critères d'Acceptation :**
        1. Le système calcule le ratio de caractères modifiés/supprimés/ajoutés.
        2. Cette donnée est enregistrée de manière anonyme pour analyse globale.
- **Story 4.3 : Historique et "Copier-Coller" Final**
    - *En tant qu'* Utilisateur, *je veux* accéder à mes anciens posts et copier le texte final, *afin de* le publier manuellement sur LinkedIn.
    - **Critères d'Acceptation :**
        1. Un bouton "Copier pour LinkedIn" est présent.
        2. Un tableau de bord liste les publications passées avec leur date et leur score de fidélité.