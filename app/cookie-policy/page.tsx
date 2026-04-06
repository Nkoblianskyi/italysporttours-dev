import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy — Italy Sport Tours',
  description: 'Informativa sull\'utilizzo dei cookie sul sito italysporttours.com.',
}

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="py-16 px-4 text-center relative" style={{ background: 'var(--vintage-navy)' }}>
          <div className="absolute top-5 left-5 w-10 h-10" style={{ borderTop: '2px solid var(--vintage-gold)', borderLeft: '2px solid var(--vintage-gold)' }} />
          <div className="absolute top-5 right-5 w-10 h-10" style={{ borderTop: '2px solid var(--vintage-gold)', borderRight: '2px solid var(--vintage-gold)' }} />
          <h1 className="text-4xl md:text-5xl uppercase mb-3" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-cream)', letterSpacing: '0.05em' }}>
            Cookie Policy
          </h1>
          <p className="text-sm opacity-70" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-gold)' }}>
            Ultimo aggiornamento: 2026
          </p>
        </div>

        {/* Content */}
        <div className="py-14 px-4" style={{ background: 'var(--vintage-cream)' }}>
          <div className="max-w-3xl mx-auto">
            <div
              className="p-8"
              style={{ background: 'var(--vintage-paper)', border: '1px solid var(--vintage-burgundy)' }}
            >
              <div className="space-y-8">
                {[
                  {
                    title: '1. Cosa Sono i Cookie',
                    content: `I cookie sono piccoli file di testo che i siti web salvano sul dispositivo dell'utente durante la navigazione. Permettono al sito di ricordare le preferenze dell'utente e di migliorare l'esperienza di navigazione nel tempo.`,
                  },
                  {
                    title: '2. Tipologie di Cookie Utilizzati',
                    content: `Sul sito italysporttours.com utilizziamo le seguenti categorie di cookie:\n\nCookie Tecnici (necessari): Sono indispensabili per il corretto funzionamento del sito. Permettono la navigazione e l'utilizzo delle funzionalità di base. Non richiedono il consenso dell'utente.\n\nCookie Analitici: Raccolgono informazioni in forma anonima e aggregata su come gli utenti interagiscono con il sito (pagine visitate, tempo di permanenza, errori). Utilizziamo Google Analytics con anonimizzazione dell'IP.\n\nCookie di Preferenze: Memorizzano le scelte dell'utente (lingua, consenso cookie) per migliorare l'esperienza nelle visite successive.\n\nCookie di Terze Parti: Alcuni contenuti integrati nel sito (mappe, video) possono installare cookie di terze parti soggetti alle rispettive privacy policy.`,
                  },
                  {
                    title: '3. Cookie Specifici Utilizzati',
                    content: `ist-cookie-consent: Memorizza la scelta dell'utente riguardo ai cookie. Durata: 12 mesi. Tipo: tecnico/preferenze.\n\n_ga, _gid, _gat: Cookie di Google Analytics per l'analisi del traffico. Durata: da 24 ore a 2 anni. Tipo: analitico.\n\nSessi one di navigazione: Cookie di sessione temporanei eliminati alla chiusura del browser. Tipo: tecnico.`,
                  },
                  {
                    title: '4. Come Gestire i Cookie',
                    content: `L'utente può gestire le preferenze sui cookie in qualsiasi momento:\n\n• Tramite il banner cookie che appare alla prima visita al sito;\n• Attraverso le impostazioni del proprio browser (ogni browser ha opzioni diverse per bloccare, eliminare o gestire i cookie);\n• Per i cookie analitici di Google Analytics: google.com/settings/ads\n\nLa disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.`,
                  },
                  {
                    title: '5. Cookie di Terze Parti',
                    content: `Il sito potrebbe integrare servizi di terze parti che installano i propri cookie. Si consiglia di consultare le rispettive informative:\n\n• Google Analytics: policies.google.com/privacy\n• Google Maps (se integrato): policies.google.com/privacy\n\nK.C. NTOMATA LIMITED non è responsabile delle policy dei cookie di terze parti.`,
                  },
                  {
                    title: '6. Aggiornamenti della Cookie Policy',
                    content: `La presente Cookie Policy può essere aggiornata in qualsiasi momento per riflettere modifiche nei servizi o nella normativa applicabile. La data di ultimo aggiornamento è sempre indicata in cima a questa pagina.`,
                  },
                  {
                    title: '7. Contatti',
                    content: `Per qualsiasi domanda relativa all'utilizzo dei cookie, contattare:\n\nK.C. NTOMATA LIMITED\ninfo@italysporttours.com\nStylelianou Lena, 24, Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus.`,
                  },
                ].map((section, i) => (
                  <div key={i}>
                    <h2
                      className="text-xl uppercase mb-3 pb-2"
                      style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)', borderBottom: '1px solid var(--vintage-burgundy)' }}
                    >
                      {section.title}
                    </h2>
                    <div className="space-y-2">
                      {section.content.split('\n').map((line, j) => (
                        <p
                          key={j}
                          className="text-sm leading-relaxed"
                          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)', opacity: line === '' ? 0 : 0.88 }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
