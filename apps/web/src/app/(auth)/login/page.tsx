'use client';

import { login } from '../actions';
import { useActionState } from 'react';

export default function LoginPage() {
  const [state, formAction] = useActionState(login, null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-paper p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-sm shadow-sm border border-black/5">
        <h1 className="text-3xl font-eb-garamond text-ink mb-6 text-center">
          Se connecter à l&apos;Atelier
        </h1>
        <form action={formAction} className="space-y-4">
          {state?.error && (
            <div className="p-3 text-sm bg-red-50 text-red-500 rounded-sm border border-red-100">
              {state.error}
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-ink/60 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full p-2 border-b border-ink/20 focus:border-ink outline-none transition-colors bg-transparent font-inter"
              placeholder="votre@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-ink/60 mb-1"
            >
              Mot de passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full p-2 border-b border-ink/20 focus:border-ink outline-none transition-colors bg-transparent font-inter"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-ink text-paper font-medium hover:bg-ink/90 transition-colors relative overflow-hidden group"
          >
            <span className="relative z-10">Entrer</span>
            <div 
              className="absolute inset-0 opacity-10 group-hover:opacity-20 pointer-events-none"
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
              }}
            />
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-ink/60">
          Pas encore de compte ?{' '}
          <a href="/register" className="text-ink hover:underline font-medium">
            S&apos;inscrire
          </a>
        </p>
      </div>
    </div>
  );
}
