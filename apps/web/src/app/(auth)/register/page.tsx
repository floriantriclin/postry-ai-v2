'use client';

import { signup } from '../actions';
import { useActionState } from 'react';

export default function RegisterPage() {
  const [state, formAction] = useActionState(signup, null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-paper p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-sm shadow-sm border border-black/5">
        <h1 className="text-3xl font-eb-garamond text-ink mb-6 text-center">
          Créer un compte
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
            <span className="relative z-10">S&apos;inscrire</span>
            <div className="absolute inset-0 bg-[url('/ink-texture.png')] opacity-10 group-hover:opacity-20 pointer-events-none" />
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-ink/60">
          Déjà un compte ?{' '}
          <a href="/login" className="text-ink hover:underline font-medium">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
}
