# Arborescence du Projet (Source Tree)

```text
postry-ai/
├── apps/
│   └── web/                        # Application principale Next.js
│       ├── src/
│       │   ├── app/                # Next.js App Router
│       │   │   ├── (auth)/         # Routes d'authentification (login, register)
│       │   │   ├── (atelier)/      # Routes de l'application (dashboard, tuner, editor)
│       │   │   └── api/            # API Routes
│       │   │       ├── chat/       # Endpoint Vercel AI SDK pour Gemini
│       │   │       ├── onboard/    # Parsing CV et extraction de faits
│       │   │       └── mirror/     # Endpoint temps réel pour l'Equalizer (SSE)
│       │   ├── components/         # Composants React
│       │   │   ├── ui/             # Composants de base (Shadcn/UI modifiés)
│       │   │   ├── atelier/        # Composants spécifiques à la saisie d'idées
│       │   │   ├── tuner/          # Composants de l'Equalizer (IdentitySlider)
│       │   │   └── shared/         # Layouts, Navigation, Footer
│       │   ├── hooks/              # Hooks personnalisés (useMirror, useFidelity)
│       │   ├── lib/                # Configurations (gemini.ts, supabase.ts)
│       │   ├── services/           # Logique métier (ai-service.ts, profile-service.ts)
│       │   └── styles/             # Global CSS et thèmes Tailwind
│       └── next.config.js
├── packages/
│   ├── database/                   # Gestion Supabase
│   │   ├── migrations/             # Fichiers .sql (pgvector, RLS, Tables)
│   │   ├── seed/                   # Données initiales pour les tests de rugosité
│   │   └── types.ts                # Types générés automatiquement par Supabase CLI
│   ├── shared-types/               # Types TypeScript partagés (Frontend/Backend/AI)
│   │   └── index.ts                # Interfaces Jumeau, Post, IdentityVector
│   └── ai-engine/                  # (Optionnel) Logique de dé-lissage isolée
│       ├── prompts/                # Templates de prompts (Ancre, Rugosité, LinkedIn)
│       └── utils/                  # Algorithmes de post-traitement stylistique
├── docs/                           # Tous les documents de planification
├── package.json                    # Workspaces pnpm/npm
└── turbo.json                      # Orchestration Turborepo
```
