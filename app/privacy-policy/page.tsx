import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Italy Sport Tours',
  description: 'Informativa sul trattamento dei dati personali di Italy Sport Tours.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="py-16 px-4 text-center relative" style={{ background: 'var(--vintage-navy)' }}>
          <div className="absolute top-5 left-5 w-10 h-10" style={{ borderTop: '2px solid var(--vintage-gold)', borderLeft: '2px solid var(--vintage-gold)' }} />
          <div className="absolute top-5 right-5 w-10 h-10" style={{ borderTop: '2px solid var(--vintage-gold)', borderRight: '2px solid var(--vintage-gold)' }} />
          <h1 className="text-4xl md:text-5xl uppercase mb-3" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-cream)', letterSpacing: '0.05em' }}>
            Privacy Policy
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
              <div className="prose-vintage space-y-8">
                {[
                  {
                    title: '1. Titolare del Trattamento',
                    content: `Il Titolare del trattamento dei dati personali è K.C. NTOMATA LIMITED, con sede in Stylianou Lena, 24, Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus. Email: info@italysporttours.com.`,
                  },
                  {
                    title: '2. Dati Raccolti',
                    content: `Raccogliamo i seguenti dati personali:\n\n• Dati identificativi: nome, cognome, indirizzo email, numero di telefono;\n• Dati di navigazione: indirizzo IP, tipo di browser, pagine visitate, durata della visita;\n• Dati di prenotazione: informazioni fornite durante la richiesta di tour, preferenze di viaggio;\n• Comunicazioni: contenuto delle email e dei messaggi inviati tramite il modulo di contatto.`,
                  },
                  {
                    title: '3. Finalità e Base Giuridica del Trattamento',
                    content: `I dati vengono trattati per le seguenti finalità:\n\n• Gestione delle richieste di prenotazione e informazioni (base giuridica: esecuzione di un contratto);\n• Invio di comunicazioni commerciali previo consenso esplicito (base giuridica: consenso);\n• Adempimento di obblighi legali (base giuridica: obbligo legale);\n• Miglioramento dei servizi tramite analisi statistica anonima (base giuridica: legittimo interesse).`,
                  },
                  {
                    title: '4. Conservazione dei Dati',
                    content: `I dati personali vengono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti:\n\n• Dati di prenotazione: 10 anni dalla conclusione del rapporto contrattuale;\n• Dati di marketing: fino alla revoca del consenso;\n• Dati di navigazione: 13 mesi dalla raccolta.`,
                  },
                  {
                    title: '5. Diritti degli Interessati',
                    content: `In conformità al Regolamento UE 2016/679 (GDPR), l'utente ha il diritto di:\n\n• Accedere ai propri dati personali;\n• Ottenere la rettifica di dati inesatti;\n• Richiedere la cancellazione dei dati ("diritto all'oblio");\n• Opporsi al trattamento;\n• Ottenere la portabilità dei dati;\n• Revocare il consenso in qualsiasi momento.\n\nPer esercitare questi diritti, contattare: info@italysporttours.com.`,
                  },
                  {
                    title: '6. Comunicazione a Terzi',
                    content: `I dati non vengono ceduti a terzi per finalità commerciali autonome. Possono essere comunicati a:\n\n• Fornitori di servizi tecnici (hosting, email marketing) che agiscono come responsabili del trattamento;\n• Autorità competenti in caso di obblighi di legge;\n• Partner di viaggio strettamente necessari all'erogazione dei servizi prenotati.`,
                  },
                  {
                    title: '7. Trasferimento Internazionale dei Dati',
                    content: `Alcuni fornitori di servizi potrebbero trovarsi al di fuori dello Spazio Economico Europeo. In tali casi, ci assicuriamo che il trasferimento avvenga nel rispetto delle garanzie previste dal GDPR (clausole contrattuali standard o decisioni di adeguatezza della Commissione Europea).`,
                  },
                  {
                    title: '8. Modifiche alla Privacy Policy',
                    content: `Ci riserviamo il diritto di aggiornare la presente Privacy Policy in qualsiasi momento. Le modifiche verranno pubblicate su questa pagina con l'indicazione della data di aggiornamento. Si consiglia di consultare periodicamente questa pagina.`,
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
