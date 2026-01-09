import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FDFBF7] p-4 font-serif">
      <main className="text-center space-y-8 max-w-2xl">
        <h1 className="text-6xl font-bold text-[#1A1A1A] tracking-tight">
          postry.ai
        </h1>
        <p className="text-xl text-[#4A4A4A] leading-relaxed">
          Capturez votre voix unique. 
          Sculptez votre jumeau numérique. 
          Publiez avec authenticité.
        </p>
        
        <div className="flex gap-4 justify-center">
          {user ? (
            <Link
              href="/atelier"
              className="px-8 py-3 bg-[#1A1A1A] text-[#FDFBF7] font-medium hover:bg-[#2A2A2A] transition-colors"
            >
              Entrer dans l&apos;Atelier
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="px-8 py-3 bg-[#1A1A1A] text-[#FDFBF7] font-medium hover:bg-[#2A2A2A] transition-colors"
              >
                Se connecter
              </Link>
              <Link
                href="/register"
                className="px-8 py-3 border border-[#1A1A1A] text-[#1A1A1A] font-medium hover:bg-[#1A1A1A]/5 transition-colors"
              >
                Créer un compte
              </Link>
            </>
          )}
        </div>
      </main>
      
      <footer className="absolute bottom-8 text-sm text-[#6A6A6A]">
        L&apos;art de l&apos;automatisation humaine.
      </footer>
    </div>
  );
}
