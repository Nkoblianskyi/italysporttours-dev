'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import { Mail, Phone, MapPin, Clock, CheckCircle, Send, X } from 'lucide-react'
import { tours } from '@/lib/tours-data'

export default function ContattiContent() {
  const searchParams = useSearchParams()
  const tourSlug = searchParams.get('tour')
  const selectedTour = tourSlug ? tours.find((t) => t.slug === tourSlug) : null

  const [form, setForm] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    tour: selectedTour?.title ?? '',
    partecipanti: '2',
    messaggio: '',
    privacy: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (selectedTour) {
      setForm((prev) => ({ ...prev, tour: selectedTour.title }))
    }
  }, [selectedTour])

  function validate() {
    const e: Record<string, string> = {}
    if (!form.nome.trim()) e.nome = 'Il nome è obbligatorio'
    if (!form.cognome.trim()) e.cognome = 'Il cognome è obbligatorio'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email non valida'
    if (!form.messaggio.trim()) e.messaggio = 'Il messaggio è obbligatorio'
    if (!form.privacy) e.privacy = 'Accetta la privacy policy per procedere'
    return e
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const inputStyle = {
    background: 'var(--vintage-cream)',
    color: 'var(--vintage-sepia)',
    border: '1px solid var(--vintage-burgundy)',
    fontFamily: 'var(--font-playfair)',
    fontSize: '0.9rem',
    padding: '10px 14px',
    width: '100%',
    outline: 'none',
  }

  const labelStyle = {
    fontFamily: 'var(--font-oswald)',
    fontSize: '0.7rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: 'var(--vintage-sepia)',
    display: 'block',
    marginBottom: '6px',
    opacity: 0.8,
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <div className="py-16 px-4 text-center relative overflow-hidden" style={{ background: 'var(--vintage-navy)' }}>
          <div className="absolute top-5 left-5 w-12 h-12" style={{ borderTop: '2px solid var(--vintage-gold)', borderLeft: '2px solid var(--vintage-gold)' }} />
          <div className="absolute top-5 right-5 w-12 h-12" style={{ borderTop: '2px solid var(--vintage-gold)', borderRight: '2px solid var(--vintage-gold)' }} />
          <div className="absolute bottom-5 left-5 w-12 h-12" style={{ borderBottom: '2px solid var(--vintage-gold)', borderLeft: '2px solid var(--vintage-gold)' }} />
          <div className="absolute bottom-5 right-5 w-12 h-12" style={{ borderBottom: '2px solid var(--vintage-gold)', borderRight: '2px solid var(--vintage-gold)' }} />

          <div className="inline-block mb-4 px-4 py-1" style={{ background: 'var(--vintage-burgundy)', border: '1px solid var(--vintage-gold)' }}>
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-gold)' }}>Siamo qui per te</span>
          </div>
          <h1 className="text-5xl md:text-6xl uppercase mb-4" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-cream)', letterSpacing: '0.05em' }}>
            Contattaci
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px" style={{ background: 'var(--vintage-gold)' }} />
            <div className="w-2 h-2 rotate-45" style={{ background: 'var(--vintage-gold)' }} />
            <div className="w-16 h-px" style={{ background: 'var(--vintage-gold)' }} />
          </div>
          <p className="text-base leading-relaxed max-w-lg mx-auto" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-cream)', opacity: 0.85 }}>
            Hai domande su un tour? Vuoi un preventivo personalizzato? Il nostro team risponde entro 24 ore.
          </p>
        </div>

        {/* Main content */}
        <div className="py-14 px-4" style={{ background: 'var(--vintage-cream)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Contact info */}
              <div className="space-y-5">
                <h2 className="text-2xl uppercase pb-3" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)', borderBottom: '2px solid var(--vintage-burgundy)' }}>
                  Dove Siamo
                </h2>

                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    lines: ['info@italysporttours.com'],
                    href: 'mailto:info@italysporttours.com',
                  },
                  {
                    icon: Clock,
                    title: 'Orari',
                    lines: ['Lun–Ven: 9:00–18:00', 'Sabato: 10:00–14:00', 'Domenica: Chiuso'],
                  },
                  {
                    icon: MapPin,
                    title: 'Sede Legale',
                    lines: [
                      'K.C. NTOMATA LIMITED',
                      'Stylianou Lena, 24',
                      'Christiana Court, Flat/Office 202',
                      'Strovolos, 2019 Nicosia',
                      'Cyprus',
                    ],
                  },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={i}
                      className="p-5"
                      style={{ background: 'var(--vintage-paper)', border: '1px solid var(--vintage-burgundy)', boxShadow: '3px 3px 0 var(--vintage-sepia)' }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 flex items-center justify-center shrink-0" style={{ background: 'var(--vintage-burgundy)' }}>
                          <Icon size={14} style={{ color: 'var(--vintage-cream)' }} />
                        </div>
                        <span className="text-sm uppercase tracking-widest" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>{item.title}</span>
                      </div>
                      {item.lines.map((line, j) =>
                        item.href && j === 0 ? (
                          <a key={j} href={item.href} className="block text-sm leading-relaxed hover:underline" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-burgundy)' }}>
                            {line}
                          </a>
                        ) : (
                          <p key={j} className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)', opacity: 0.85 }}>
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Contact form */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl uppercase mb-6 pb-3" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)', borderBottom: '2px solid var(--vintage-burgundy)' }}>
                  Scrivi un Messaggio
                </h2>

                {selectedTour && (
                  <div className="mb-6 px-5 py-4 flex items-center gap-3" style={{ background: 'var(--vintage-navy)', border: '1px solid var(--vintage-gold)' }}>
                    <CheckCircle size={16} style={{ color: 'var(--vintage-gold)' }} />
                    <p className="text-sm" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-gold)', letterSpacing: '0.05em' }}>
                      Richiesta per: {selectedTour.title}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div
                    className="p-8"
                    style={{ background: 'var(--vintage-paper)', border: '2px solid var(--vintage-burgundy)', boxShadow: '5px 5px 0 var(--vintage-sepia)' }}
                  >
                    <div className="text-center mb-6 -mx-8 -mt-8 py-2" style={{ background: 'var(--vintage-navy)', color: 'var(--vintage-gold)', fontFamily: 'var(--font-oswald)', fontSize: '0.65rem', letterSpacing: '0.2em' }}>
                      MODULO DI CONTATTO
                    </div>

                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label style={labelStyle}>Nome *</label>
                          <input name="nome" value={form.nome} onChange={handleChange} style={inputStyle} placeholder="Il tuo nome" />
                          {errors.nome && <p className="text-xs mt-1" style={{ color: 'var(--vintage-burgundy)', fontFamily: 'var(--font-oswald)' }}>{errors.nome}</p>}
                        </div>
                        <div>
                          <label style={labelStyle}>Cognome *</label>
                          <input name="cognome" value={form.cognome} onChange={handleChange} style={inputStyle} placeholder="Il tuo cognome" />
                          {errors.cognome && <p className="text-xs mt-1" style={{ color: 'var(--vintage-burgundy)', fontFamily: 'var(--font-oswald)' }}>{errors.cognome}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label style={labelStyle}>Email *</label>
                          <input name="email" type="email" value={form.email} onChange={handleChange} style={inputStyle} placeholder="nome@email.com" />
                          {errors.email && <p className="text-xs mt-1" style={{ color: 'var(--vintage-burgundy)', fontFamily: 'var(--font-oswald)' }}>{errors.email}</p>}
                        </div>
                        <div>
                          <label style={labelStyle}>Telefono</label>
                          <input name="telefono" type="tel" value={form.telefono} onChange={handleChange} style={inputStyle} placeholder="+39 000 000 0000" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label style={labelStyle}>Tour di Interesse</label>
                          <select name="tour" value={form.tour} onChange={handleChange} style={inputStyle}>
                            <option value="">-- Seleziona un tour --</option>
                            {tours.map((t) => (
                              <option key={t.id} value={t.title}>{t.title}</option>
                            ))}
                            <option value="tour-personalizzato">Tour Personalizzato</option>
                          </select>
                        </div>
                        <div>
                          <label style={labelStyle}>Numero Partecipanti</label>
                          <select name="partecipanti" value={form.partecipanti} onChange={handleChange} style={inputStyle}>
                            {['1', '2', '3', '4', '5', '6–10', '11–20', '20+'].map((n) => (
                              <option key={n} value={n}>{n} {n === '1' ? 'persona' : 'persone'}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label style={labelStyle}>Messaggio *</label>
                        <textarea
                          name="messaggio"
                          value={form.messaggio}
                          onChange={handleChange}
                          rows={5}
                          style={inputStyle}
                          placeholder="Raccontaci le tue aspettative, le date preferite o qualsiasi altra informazione utile..."
                        />
                        {errors.messaggio && <p className="text-xs mt-1" style={{ color: 'var(--vintage-burgundy)', fontFamily: 'var(--font-oswald)' }}>{errors.messaggio}</p>}
                      </div>

                      <div>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="privacy"
                            checked={form.privacy}
                            onChange={handleChange}
                            className="mt-1"
                            style={{ accentColor: 'var(--vintage-burgundy)', width: '16px', height: '16px', flexShrink: 0 }}
                          />
                          <span className="text-xs leading-relaxed" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)', opacity: 0.85 }}>
                            Ho letto e accetto la{' '}
                            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--vintage-burgundy)' }}>
                              Privacy Policy
                            </a>
                            {' '}e autorizzo il trattamento dei miei dati personali.
                          </span>
                        </label>
                        {errors.privacy && <p className="text-xs mt-1 ml-7" style={{ color: 'var(--vintage-burgundy)', fontFamily: 'var(--font-oswald)' }}>{errors.privacy}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-3 py-4 text-sm tracking-widest uppercase transition-opacity hover:opacity-90 disabled:opacity-60"
                        style={{
                          background: loading ? 'var(--vintage-sepia)' : 'var(--vintage-burgundy)',
                          color: 'var(--vintage-cream)',
                          fontFamily: 'var(--font-oswald)',
                          border: '1px solid var(--vintage-gold)',
                          cursor: loading ? 'not-allowed' : 'pointer',
                        }}
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--vintage-cream)', borderTopColor: 'transparent' }} />
                            Invio in corso...
                          </>
                        ) : (
                          <>
                            <Send size={14} />
                            Invia il Messaggio
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />

      {/* Success Modal */}
      {submitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(27,15,8,0.8)' }}
          role="dialog"
          aria-modal="true"
          aria-label="Messaggio inviato con successo"
        >
          <div
            className="relative max-w-md w-full p-8 text-center"
            style={{
              background: 'var(--vintage-paper)',
              border: '3px solid var(--vintage-gold)',
              boxShadow: '8px 8px 0 var(--vintage-sepia)',
            }}
          >
            <div className="absolute top-3 left-3 w-8 h-8" style={{ borderTop: '2px solid var(--vintage-burgundy)', borderLeft: '2px solid var(--vintage-burgundy)' }} />
            <div className="absolute top-3 right-3 w-8 h-8" style={{ borderTop: '2px solid var(--vintage-burgundy)', borderRight: '2px solid var(--vintage-burgundy)' }} />
            <div className="absolute bottom-3 left-3 w-8 h-8" style={{ borderBottom: '2px solid var(--vintage-burgundy)', borderLeft: '2px solid var(--vintage-burgundy)' }} />
            <div className="absolute bottom-3 right-3 w-8 h-8" style={{ borderBottom: '2px solid var(--vintage-burgundy)', borderRight: '2px solid var(--vintage-burgundy)' }} />

            <div className="-mx-8 -mt-8 py-2 mb-6" style={{ background: 'var(--vintage-navy)', color: 'var(--vintage-gold)', fontFamily: 'var(--font-oswald)', fontSize: '0.65rem', letterSpacing: '0.2em' }}>
              ITALY SPORT TOURS
            </div>

            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5" style={{ background: 'var(--vintage-burgundy)', border: '2px solid var(--vintage-gold)' }}>
              <CheckCircle size={28} style={{ color: 'var(--vintage-gold)' }} />
            </div>

            <h2 className="text-2xl uppercase mb-4" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>
              Messaggio Inviato!
            </h2>

            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-px" style={{ background: 'var(--vintage-burgundy)' }} />
              <div className="w-1.5 h-1.5 rotate-45" style={{ background: 'var(--vintage-burgundy)' }} />
              <div className="w-8 h-px" style={{ background: 'var(--vintage-burgundy)' }} />
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)', opacity: 0.9 }}>
              Grazie, <strong>{form.nome}</strong>! Il tuo messaggio è stato ricevuto. Il nostro team ti contatterà entro <strong>24 ore</strong> all&apos;indirizzo <strong>{form.email}</strong>.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="px-10 py-3 text-sm tracking-widest uppercase transition-opacity hover:opacity-90"
              style={{ background: 'var(--vintage-burgundy)', color: 'var(--vintage-cream)', fontFamily: 'var(--font-oswald)', border: '1px solid var(--vintage-gold)' }}
            >
              Chiudi
            </button>

            <button onClick={() => setSubmitted(false)} className="absolute top-5 right-5" aria-label="Chiudi" style={{ color: 'var(--vintage-sepia)', opacity: 0.5 }}>
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
