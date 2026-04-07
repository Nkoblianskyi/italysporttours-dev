import { Compass, Luggage, Shield, Camera, Utensils, Map } from 'lucide-react'

const tips = [
  {
    icon: Compass,
    title: 'Pianifica in Anticipo',
    body: 'Le date migliori si riempiono rapidamente, soprattutto in alta stagione. Prenotare con 3-6 mesi di anticipo ti dà più scelta su alloggi, itinerari e ritmi di viaggio.',
  },
  {
    icon: Luggage,
    title: 'Viaggia Leggero',
    body: 'Per i tour in montagna e su strada basta uno zaino capiente. Abbigliamento comodo e multistrato, scarpe resistenti e un impermeabile leggero sono i tuoi migliori compagni di viaggio.',
  },
  {
    icon: Shield,
    title: 'Assicurazione di Viaggio',
    body: 'Non partire mai senza una polizza che copra cancellazioni, spese mediche e smarrimento bagagli. Un piccolo investimento che può salvarti da grandi problemi.',
  },
  {
    icon: Camera,
    title: 'Cattura i Momenti',
    body: 'Albe in quota e curve vista mare meritano una foto. Porta una fotocamera leggera oppure un buon smartphone: i ricordi dureranno per sempre.',
  },
  {
    icon: Utensils,
    title: 'Mangia come un Locale',
    body: 'I posti migliori non sono sempre i più visibili. Chiedi al nostro team dove mangiano davvero i locali — è lì che troverai l\'autentica cucina del luogo.',
  },
  {
    icon: Map,
    title: 'Esplora i Dintorni',
    body: 'Ogni tour è anche un\'opportunità culturale. Dedica almeno mezza giornata all\'esplorazione dei dintorni: troverai tesori nascosti che arricchiranno l\'intera esperienza.',
  },
]

export default function TravelTips() {
  return (
    <section className="py-16 px-4" style={{ background: 'var(--vintage-paper)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="vintage-divider mb-4">
            <span
              className="text-xs tracking-[0.3em] uppercase px-4"
              style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-burgundy)' }}
            >
              Consigli di Viaggio
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl uppercase mb-3 text-balance"
            style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}
          >
            Il Viaggiatore d’Avventura
          </h2>
          <p
            className="text-base leading-relaxed max-w-lg mx-auto"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)', opacity: 0.8 }}
          >
            Anni di esperienza condensati in sei consigli pratici per vivere al meglio ogni tour d’autore in Italia e in Europa.
          </p>
        </div>

        {/* Tips grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, i) => {
            const Icon = tip.icon
            return (
              <div
                key={i}
                className="p-6"
                style={{
                  background: 'var(--vintage-cream)',
                  border: '1px solid var(--vintage-burgundy)',
                  boxShadow: '3px 3px 0 var(--vintage-burgundy)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 flex items-center justify-center mb-4"
                  style={{ background: 'var(--vintage-burgundy)' }}
                >
                  <Icon size={20} style={{ color: 'var(--vintage-cream)' }} />
                </div>

                {/* Number */}
                <div
                  className="text-xs tracking-widest uppercase mb-2"
                  style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-burgundy)' }}
                >
                  Consiglio {String(i + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h3
                  className="text-lg uppercase mb-3 leading-tight"
                  style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}
                >
                  {tip.title}
                </h3>

                {/* Body */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)', opacity: 0.85 }}
                >
                  {tip.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
