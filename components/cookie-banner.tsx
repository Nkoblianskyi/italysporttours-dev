'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('ist-cookie-consent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('ist-cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('ist-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
      role="dialog"
      aria-label="Banner cookie"
    >
      <div
        className="max-w-3xl mx-auto p-5 shadow-2xl"
        style={{
          background: 'var(--vintage-sepia)',
          border: '2px solid var(--vintage-gold)',
          boxShadow: '4px 4px 0 var(--vintage-burgundy)',
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3
            className="text-sm tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-gold)' }}
          >
            Informativa sui Cookie
          </h3>
          <button onClick={decline} aria-label="Chiudi banner cookie" style={{ color: 'var(--vintage-cream)' }}>
            <X size={16} />
          </button>
        </div>

        <p
          className="text-sm leading-relaxed mb-4 opacity-90"
          style={{ color: 'var(--vintage-cream)', fontFamily: 'var(--font-playfair)' }}
        >
          Utilizziamo i cookie per migliorare la tua esperienza di navigazione e analizzare il traffico del sito.
          Continuando a navigare, accetti il nostro utilizzo dei cookie.{' '}
          <Link href="/cookie-policy" className="underline hover:opacity-80">
            Leggi la Cookie Policy
          </Link>
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={accept}
            className="px-6 py-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-90"
            style={{
              background: 'var(--vintage-burgundy)',
              color: 'var(--vintage-cream)',
              fontFamily: 'var(--font-oswald)',
              border: '1px solid var(--vintage-gold)',
            }}
          >
            Accetta Tutti
          </button>
          <button
            onClick={decline}
            className="px-6 py-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-80"
            style={{
              background: 'transparent',
              color: 'var(--vintage-cream)',
              fontFamily: 'var(--font-oswald)',
              border: '1px solid var(--vintage-cream)',
            }}
          >
            Solo Essenziali
          </button>
        </div>
      </div>
    </div>
  )
}
