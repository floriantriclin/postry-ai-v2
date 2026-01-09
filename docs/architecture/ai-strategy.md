# Stratégie IA et API

## Architecture des Endpoints (Vercel Edge Functions)

Nous utiliserons le **Vercel AI SDK** pour gérer le streaming et l'orchestration des appels vers Gemini.

1. **POST /api/onboard/analyze** :
    - *Rôle :* Reçoit le texte du CV ou la saisie manuelle.
    - *Action :* Utilise Gemini pour extraire un JSON structuré des faits métier.
2. **POST /api/mirror/stream (SSE)** :
    - *Rôle :* L'endpoint de l'**Equalizer**.
    - *Action :* Reçoit les valeurs des curseurs (0.0 à 1.0) et un texte témoin. Renvoie en streaming la variation stylistique immédiate.
3. **POST /api/generate/post (SSE)** :
    - *Rôle :* Le moteur de production final.
    - *Action :* Combine l'idée brute + les faits du profil + les vecteurs d'identité pour générer le post LinkedIn "rugueux".

## Ingénierie des Prompts (Le "System Prompt" Miroir)

Pour obtenir la **Rugosité Stylistique**, nous n'utiliserons pas un prompt simple, mais une structure en trois couches :

- **Couche 1 : L'Ancre de Personnalité (Identity Anchor)**
    > "Tu es le Jumeau Numérique de [Nom/Domaine]. Ton niveau d'autorité est réglé à [Value]. Ton ton est [Tone_Value]. Tu parles à partir des faits suivants uniquement : [Knowledge_Base_Context]."

- **Couche 2 : Le Filtre de Rugosité (The De-Smoothing Filter)**
    > "CRITIQUE : Évite absolument le style 'Assistant IA'. Ne commence jamais par 'Dans le monde d'aujourd'hui' ou 'Il est important de'. Utilise des phrases de longueurs inégales. Intègre des silences, des hésitations ou des formulations directes. Si le curseur Rugosité est à [High], privilégie le langage parlé et les observations brutes de terrain."

- **Couche 3 : La Contrainte LinkedIn (Platform Guardrail)**
    > "Formate le contenu pour LinkedIn : accroche percutante, aération maximale, pas de hashtags génériques en excès. Le texte doit passer le test de l'intuition humaine : on doit croire que c'est l'auteur qui a tapé cela sur son téléphone dans un moment de réflexion."

## Optimisation Gemini 3 Flash

Nous exploiterons la fonction de **"System Instructions"** native de Gemini pour figer le jumeau numérique au niveau du modèle, ce qui réduit la latence et la consommation de tokens à chaque mouvement de l'Equalizer.
