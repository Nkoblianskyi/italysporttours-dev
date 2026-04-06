import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import { Award, Globe, Users, Heart, Shield, Compass } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi Siamo — Italy Sport Tours',
  description: 'Scopri la storia di Italy Sport Tours: dal 2010 organizziamo tour sportivi indimenticabili in Italia e in tutta Europa.',
}

const values = [
  {
    icon: Heart,
    title: 'Passione Autentica',
    body: 'Siamo prima di tutto tifosi e appassionati di sport. Ogni tour nasce da un amore genuino per lo sport e per il viaggio, non da calcoli commerciali.',
  },
  {
    icon: Shield,
    title: 'Affidabilità Totale',
    body: 'In 16 anni di attività non abbiamo mai cancellato un tour per nostra inadempienza. La vostra fiducia è il nostro bene più prezioso.',
  },
  {
    icon: Compass,
    title: 'Cura dei Dettagli',
    body: 'Come un antico manifesto di viaggio, ogni dettaglio viene studiato e curato: dall\'hotel alla guida, dal ristorante al posto in tribuna.',
  },
]

const team = [
  {
    name: 'Marco Ferretti',
    role: 'Fondatore e Direttore',
    bio: 'Ex giornalista sportivo con 20 anni di esperienza. Ha seguito eventi sportivi in 40 paesi. La sua passione per il calcio italiano è inesauribile.',
  },
  {
    name: 'Giulia Marchetti',
    role: 'Responsabile Tour Europa',
    bio: 'Specializzata in logistica del turismo sportivo, parla quattro lingue e conosce personalmente ogni venue dei nostri tour europei.',
  },
  {
    name: 'Luca Santini',
    role: 'Guida Senior Italia',
    bio: 'Nato e cresciuto a Roma, ex atleta di mezzofondo. La sua conoscenza del territorio italiano è enciclopedica e la sua simpatia è contagiosa.',
  },
]

export default function ChiSiamoPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div
          className="relative py-20 px-4 text-center overflow-hidden"
          style={{ background: 'var(--vintage-navy)' }}
        >
          <div className="absolute top-5 left-5 w-12 h-12" style={{ borderTop: '2px solid var(--vintage-gold)', borderLeft: '2px solid var(--vintage-gold)' }} />
          <div className="absolute top-5 right-5 w-12 h-12" style={{ borderTop: '2px solid var(--vintage-gold)', borderRight: '2px solid var(--vintage-gold)' }} />
          <div className="absolute bottom-5 left-5 w-12 h-12" style={{ borderBottom: '2px solid var(--vintage-gold)', borderLeft: '2px solid var(--vintage-gold)' }} />
          <div className="absolute bottom-5 right-5 w-12 h-12" style={{ borderBottom: '2px solid var(--vintage-gold)', borderRight: '2px solid var(--vintage-gold)' }} />

          <div className="inline-block mb-4 px-4 py-1" style={{ background: 'var(--vintage-burgundy)', border: '1px solid var(--vintage-gold)' }}>
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-gold)' }}>La Nostra Storia</span>
          </div>
          <h1 className="text-5xl md:text-6xl uppercase mb-4" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-cream)', letterSpacing: '0.05em' }}>
            Chi Siamo
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px" style={{ background: 'var(--vintage-gold)' }} />
            <div className="w-2 h-2 rotate-45" style={{ background: 'var(--vintage-gold)' }} />
            <div className="w-16 h-px" style={{ background: 'var(--vintage-gold)' }} />
          </div>
          <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-cream)', opacity: 0.85 }}>
            Dal 2010 trasformiamo la passione per lo sport in ricordi indelebili.
          </p>
        </div>

        {/* Story section */}
        <div className="py-16 px-4" style={{ background: 'var(--vintage-cream)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full" style={{ border: '2px solid var(--vintage-gold)', opacity: 0.4 }} />
                <div className="relative overflow-hidden" style={{ height: '420px' }}>
                  <Image
                    src="/images/about-team.jpg"
                    alt="Il team di Italy Sport Tours sul campo"
                    fill
                    className="object-cover"
                    style={{ filter: 'sepia(20%)' }}
                  />
                </div>
              </div>
              <div>
                <h2
                  className="text-4xl uppercase mb-6 text-balance"
                  style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}
                >
                  Una Storia Nata dal Campo
                </h2>
                <div className="w-12 h-1 mb-6" style={{ background: 'var(--vintage-burgundy)' }} />
                <p className="text-base leading-relaxed mb-5 opacity-90" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)' }}>
                  Italy Sport Tours nasce nel 2010 da un&apos;idea semplice: il tifoso italiano merita di più di un biglietto acquistato all&apos;ultimo momento. Merita un&apos;esperienza completa, organizzata con lo stesso amore con cui si segue la propria squadra del cuore.
                </p>
                <p className="text-base leading-relaxed mb-5 opacity-90" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)' }}>
                  Quello che è iniziato come un piccolo gruppo di amici appassionati di sport è diventato un&apos;agenzia di riferimento per il turismo sportivo in Italia e in Europa. Abbiamo portato oltre 2.400 viaggiatori a vivere eventi memorabili, dalle piste toscane ai palazzetti madrileni, dalle tribune londinesi ai circuiti alpini.
                </p>
                <p className="text-base leading-relaxed mb-8 opacity-90" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)' }}>
                  Il nostro segreto? Non vendiamo solo un tour. Costruiamo un ricordo. Come quei vecchi manifesti del cinema o del turismo degli anni &apos;50 che ancora appesi sui muri raccontano un&apos;epoca, vogliamo che ogni nostra esperienza rimanga impressa nella memoria per sempre.
                </p>
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Users, value: '2.400+', label: 'Viaggiatori' },
                    { icon: Globe, value: '18', label: 'Paesi' },
                    { icon: Award, value: '16', label: 'Anni' },
                  ].map((stat, i) => {
                    const Icon = stat.icon
                    return (
                      <div
                        key={i}
                        className="text-center p-4"
                        style={{ background: 'var(--vintage-paper)', border: '1px solid var(--vintage-burgundy)' }}
                      >
                        <Icon size={18} className="mx-auto mb-2" style={{ color: 'var(--vintage-burgundy)' }} />
                        <div className="text-2xl" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-burgundy)' }}>{stat.value}</div>
                        <div className="text-xs uppercase tracking-wide opacity-70 mt-1" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>{stat.label}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-16 px-4" style={{ background: 'var(--vintage-paper)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="vintage-divider mb-4">
                <span className="px-4 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-burgundy)' }}>I Nostri Valori</span>
              </div>
              <h2 className="text-4xl uppercase text-balance" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>
                Cosa Ci Distingue
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon
                return (
                  <div key={i} className="p-8 text-center" style={{ background: 'var(--vintage-cream)', border: '1px solid var(--vintage-burgundy)', boxShadow: '4px 4px 0 var(--vintage-burgundy)' }}>
                    <div className="w-14 h-14 flex items-center justify-center mx-auto mb-6" style={{ background: 'var(--vintage-burgundy)' }}>
                      <Icon size={24} style={{ color: 'var(--vintage-cream)' }} />
                    </div>
                    <h3 className="text-xl uppercase mb-4" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>{v.title}</h3>
                    <p className="text-sm leading-relaxed opacity-85" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)' }}>{v.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="py-16 px-4" style={{ background: 'var(--vintage-cream)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="vintage-divider mb-4">
                <span className="px-4 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-burgundy)' }}>Le Persone</span>
              </div>
              <h2 className="text-4xl uppercase text-balance" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>
                Il Nostro Team
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <div key={i} style={{ border: '1px solid var(--vintage-burgundy)', background: 'var(--vintage-paper)', boxShadow: '3px 3px 0 var(--vintage-sepia)' }}>
                  <div
                    className="py-10 text-center"
                    style={{ background: 'var(--vintage-navy)', borderBottom: '2px solid var(--vintage-gold)' }}
                  >
                    <div
                      className="w-16 h-16 mx-auto flex items-center justify-center"
                      style={{ background: 'var(--vintage-gold)', border: '2px solid var(--vintage-cream)' }}
                    >
                      <span
                        className="text-2xl"
                        style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}
                      >
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg uppercase mb-1" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>{member.name}</h3>
                    <p className="text-xs uppercase tracking-widest mb-4 opacity-60" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-burgundy)' }}>{member.role}</p>
                    <p className="text-sm leading-relaxed opacity-85" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)' }}>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company info */}
        <div className="py-12 px-4" style={{ background: 'var(--vintage-navy)' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl uppercase mb-6" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-gold)' }}>Dati Societari</h2>
            <div className="inline-block px-8 py-6 text-left" style={{ border: '2px solid var(--vintage-gold)', background: 'rgba(0,0,0,0.2)' }}>
              <p className="text-base leading-loose" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-cream)', letterSpacing: '0.05em' }}>
                K.C. NTOMATA LIMITED<br />
                Stylianou Lena, 24<br />
                Christiana Court, Flat/Office 202<br />
                Strovolos, 2019 Nicosia<br />
                Cyprus<br />
                <span className="opacity-60 text-sm">italysporttours.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-14 px-4 text-center" style={{ background: 'var(--vintage-cream)', borderTop: '3px solid var(--vintage-burgundy)' }}>
          <h2 className="text-3xl uppercase mb-4" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>Pronto per la Prossima Avventura?</h2>
          <p className="text-base leading-relaxed mb-8 max-w-md mx-auto opacity-85" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)' }}>
            Sfoglia il nostro catalogo o contattaci per un tour su misura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" className="px-10 py-4 text-sm tracking-widest uppercase transition-opacity hover:opacity-90" style={{ background: 'var(--vintage-burgundy)', color: 'var(--vintage-cream)', fontFamily: 'var(--font-oswald)', border: '2px solid var(--vintage-burgundy)' }}>
              Esplora i Tour
            </Link>
            <Link href="/contatti" className="px-10 py-4 text-sm tracking-widest uppercase transition-opacity hover:opacity-80" style={{ background: 'transparent', color: 'var(--vintage-sepia)', fontFamily: 'var(--font-oswald)', border: '2px solid var(--vintage-sepia)' }}>
              Contattaci
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
