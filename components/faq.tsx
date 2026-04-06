'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Come funziona il processo di prenotazione?',
    a: 'Per prenotare un tour, compila il modulo di contatto indicando il tour di interesse e le date. Il nostro team ti contatterà entro 24 ore per confermare la disponibilità e procedere con il pagamento. La prenotazione si considera confermata solo dopo la ricezione della caparra del 30%.',
  },
  {
    q: 'I tour includono i biglietti per gli eventi sportivi?',
    a: 'Sì, tutti i biglietti per gli eventi sportivi indicati nella descrizione del tour sono inclusi nel prezzo. In alcuni casi, come per eventi di particolare richiesta, possiamo garantire l\'accesso solo acquistando con largo anticipo, motivo per cui consigliamo di prenotare il prima possibile.',
  },
  {
    q: 'Qual è la politica di cancellazione?',
    a: 'Le cancellazioni effettuate oltre 60 giorni dalla partenza ricevono il rimborso completo meno le spese amministrative. Tra 30 e 60 giorni si trattiene il 50% del totale. Meno di 30 giorni dalla partenza non è previsto rimborso. In caso di cancellazione dell\'evento sportivo per cause di forza maggiore, riorganizziamo il tour o rimborsiamo integralmente.',
  },
  {
    q: 'I tour sono adatti a tutta la famiglia?',
    a: 'La maggior parte dei nostri tour è adatta anche alle famiglie con bambini. Tuttavia, alcuni tour con attività più impegnative (come seguire una gara di ciclismo su terreni sconnessi) potrebbero non essere ideali per i più piccoli. Contattaci per un consiglio personalizzato.',
  },
  {
    q: 'È possibile personalizzare un tour?',
    a: 'Assolutamente sì. Offriamo tour privati completamente personalizzabili per gruppi, aziende o famiglie. Contattaci con le tue esigenze specifiche — date, sport preferiti, numero di partecipanti, budget — e costruiremo insieme il tour dei tuoi sogni.',
  },
  {
    q: 'Qual è il numero minimo e massimo di partecipanti?',
    a: 'I nostri tour hanno un minimo di 4 partecipanti per garantire la partenza e un massimo che varia a seconda del tour (solitamente tra 12 e 24 persone). Per tour privati non ci sono minimi. Ogni tour specifica chiaramente il numero massimo di posti disponibili.',
  },
  {
    q: 'I prezzi includono i voli?',
    a: 'I prezzi indicati NON includono i voli internazionali di andata e ritorno, a meno che non sia esplicitamente indicato. Possiamo tuttavia assisterti nella ricerca e prenotazione dei voli migliori come servizio aggiuntivo, coordinando gli orari con quelli del tour.',
  },
  {
    q: 'Come contattarvi per maggiori informazioni?',
    a: 'Puoi contattarci tramite il modulo nella pagina Contatti, via email all\'indirizzo info@italysporttours.com, oppure telefonicamente al +39 06 1234 567. Il nostro team è disponibile dal lunedì al venerdì, dalle 9:00 alle 18:00.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 px-4" style={{ background: 'var(--vintage-cream)' }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="vintage-divider mb-4">
            <span
              className="text-xs tracking-[0.3em] uppercase px-4"
              style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-burgundy)' }}
            >
              Domande Frequenti
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl uppercase mb-3 text-balance"
            style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}
          >
            Hai Domande?
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)', opacity: 0.8 }}
          >
            Abbiamo raccolto le risposte alle domande più frequenti dei nostri viaggiatori.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                border: '1px solid var(--vintage-burgundy)',
                background: open === i ? 'var(--vintage-paper)' : 'var(--vintage-cream)',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 p-5 text-left"
                aria-expanded={open === i}
              >
                <span
                  className="text-sm leading-snug pr-2"
                  style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                >
                  {faq.q}
                </span>
                <span className="shrink-0 mt-0.5" style={{ color: 'var(--vintage-burgundy)' }}>
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <div className="h-px mb-4" style={{ background: 'var(--vintage-burgundy)', opacity: 0.3 }} />
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)', opacity: 0.85 }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
