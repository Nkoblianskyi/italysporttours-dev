import Image from 'next/image'
import Link from 'next/link'
import { Award, Globe, Users } from 'lucide-react'

const stats = [
  { icon: Users, value: '2.400+', label: 'Viaggiatori Soddisfatti' },
  { icon: Globe, value: '18', label: 'Paesi Visitati' },
  { icon: Award, value: '16', label: 'Anni di Esperienza' },
]

export default function AboutPreview() {
  return (
    <section className="py-16 px-4" style={{ background: 'var(--vintage-navy)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="mb-3">
              <span
                className="text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-gold)' }}
              >
                Chi Siamo
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl uppercase mb-6 leading-tight text-balance"
              style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-cream)' }}
            >
              Passione per lo Sport, Amore per il Viaggio
            </h2>
            <div
              className="w-12 h-1 mb-6"
              style={{ background: 'var(--vintage-gold)' }}
            />
            <p
              className="text-base leading-relaxed mb-4 opacity-90"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-cream)' }}
            >
              Italy Sport Tours nasce dalla passione di un gruppo di appassionati di sport e viaggi che credevano si potesse fare di meglio: non solo acquistare un biglietto, ma vivere un&apos;esperienza completa, curata nei minimi dettagli.
            </p>
            <p
              className="text-base leading-relaxed mb-8 opacity-90"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-cream)' }}
            >
              Dal 2010 organizziamo tour sportivi in Italia e in tutta Europa, con la stessa cura artigianale di un vecchio manifesto da viaggio: ogni dettaglio conta, ogni momento deve essere indimenticabile.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <div key={i} className="text-center">
                    <Icon size={20} className="mx-auto mb-2" style={{ color: 'var(--vintage-gold)' }} />
                    <div
                      className="text-2xl"
                      style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-gold)' }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs leading-tight opacity-70 mt-1"
                      style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-cream)', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>

            <Link
              href="/chi-siamo"
              className="inline-block px-8 py-3 text-sm tracking-widest uppercase transition-opacity hover:opacity-90"
              style={{
                background: 'var(--vintage-gold)',
                color: 'var(--vintage-sepia)',
                fontFamily: 'var(--font-oswald)',
              }}
            >
              Scopri la Nostra Storia
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              className="absolute -top-3 -right-3 w-full h-full"
              style={{ border: '2px solid var(--vintage-gold)', opacity: 0.4 }}
            />
            <div className="relative overflow-hidden" style={{ height: '360px' }}>
              <Image
                src="/images/about-team.jpg"
                alt="Il team di Italy Sport Tours"
                fill
                className="object-cover"
                style={{ filter: 'sepia(20%)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
