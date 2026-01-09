export default function AtelierPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-4xl font-serif text-[#1A1A1A]">Bienvenue dans votre Atelier</h1>
        <p className="text-[#6A6A6A] mt-2">Prêt à sculpter votre prochain post ?</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 border border-[#E5E1DA] rounded-sm shadow-sm">
          <h2 className="text-xl font-serif text-[#1A1A1A] mb-4">Statut de votre Jumeau</h2>
          <p className="text-sm text-[#4A4A4A]">Votre identité n&apos;est pas encore calibrée.</p>
          <a href="/atelier/tuner" className="inline-block mt-4 text-sm font-medium text-[#1A1A1A] hover:underline">
            Accéder à l&apos;Equalizer →
          </a>
        </div>
        
        <div className="bg-white p-6 border border-[#E5E1DA] rounded-sm shadow-sm">
          <h2 className="text-xl font-serif text-[#1A1A1A] mb-4">Création rapide</h2>
          <p className="text-sm text-[#4A4A4A]">Commencez par jeter une idée brute.</p>
          <a href="/atelier/create" className="inline-block mt-4 text-sm font-medium text-[#1A1A1A] hover:underline">
            Lancer l&apos;établi →
          </a>
        </div>
      </div>
    </div>
  );
}
