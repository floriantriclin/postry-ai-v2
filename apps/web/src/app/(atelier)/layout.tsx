import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function AtelierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Self-healing: Ensure profile exists
  const { data: profile } = await supabase
    .from('profiles')
    .select('id')
    .eq('id', user.id)
    .single();

  if (!profile) {
    console.warn(`Profile missing for user ${user.id}, creating...`);
    await supabase.from('profiles').insert([
      {
        id: user.id,
        email: user.email,
      },
    ]);
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <nav className="border-b border-[#E5E1DA] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-xl font-serif text-[#1A1A1A]">postry.ai</div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#6A6A6A]">{user.email}</span>
            <form action="/auth/signout" method="post">
              <button
                type="submit"
                className="text-sm text-[#1A1A1A] hover:underline"
              >
                Déconnexion
              </button>
            </form>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
