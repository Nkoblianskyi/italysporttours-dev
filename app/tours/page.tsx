'use client'

import { useState, useMemo } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import TourCard from '@/components/tour-card'
import CookieBanner from '@/components/cookie-banner'
import { tours, categories, countries } from '@/lib/tours-data'
import { SlidersHorizontal, X } from 'lucide-react'

export default function ToursPage() {
  const [activeCategory, setActiveCategory] = useState('tutti')
  const [activeCountry, setActiveCountry] = useState('tutti')
  const [sortBy, setSortBy] = useState<'date' | 'duration'>('date')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let result = [...tours]
    if (activeCategory !== 'tutti') result = result.filter((t) => t.category === activeCategory)
    if (activeCountry !== 'tutti') result = result.filter((t) => t.country === activeCountry)
    if (sortBy === 'duration') result.sort((a, b) => parseInt(a.duration) - parseInt(b.duration))
    else result.sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    return result
  }, [activeCategory, activeCountry, sortBy])

  const hasFilters = activeCategory !== 'tutti' || activeCountry !== 'tutti'

  function clearFilters() {
    setActiveCategory('tutti')
    setActiveCountry('tutti')
    setSortBy('date')
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <div
          className="relative py-16 px-4 text-center overflow-hidden"
          style={{ background: 'var(--vintage-navy)' }}
        >
          {/* Corner decorations */}
          <div className="absolute top-5 left-5 w-12 h-12 pointer-events-none" style={{ borderTop: '2px solid var(--vintage-gold)', borderLeft: '2px solid var(--vintage-gold)' }} />
          <div className="absolute top-5 right-5 w-12 h-12 pointer-events-none" style={{ borderTop: '2px solid var(--vintage-gold)', borderRight: '2px solid var(--vintage-gold)' }} />
          <div className="absolute bottom-5 left-5 w-12 h-12 pointer-events-none" style={{ borderBottom: '2px solid var(--vintage-gold)', borderLeft: '2px solid var(--vintage-gold)' }} />
          <div className="absolute bottom-5 right-5 w-12 h-12 pointer-events-none" style={{ borderBottom: '2px solid var(--vintage-gold)', borderRight: '2px solid var(--vintage-gold)' }} />

          <div
            className="inline-block mb-4 px-4 py-1"
            style={{ background: 'var(--vintage-burgundy)', border: '1px solid var(--vintage-gold)' }}
          >
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-gold)' }}>
              Catalogo Completo
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl uppercase mb-4"
            style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-cream)', letterSpacing: '0.05em' }}
          >
            I Nostri Tour
          </h1>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px" style={{ background: 'var(--vintage-gold)' }} />
            <div className="w-2 h-2 rotate-45" style={{ background: 'var(--vintage-gold)' }} />
            <div className="w-16 h-px" style={{ background: 'var(--vintage-gold)' }} />
          </div>
          <p
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-cream)', opacity: 0.85 }}
          >
            Dalla Toscana alle Alpi, dai laghi alle coste: ogni tour è un manifesto d&apos;avventura firmato Italy Sport Tours.
          </p>
        </div>

        {/* Filters bar */}
        <div
          className="sticky top-16 z-30 px-4 py-3 border-b"
          style={{ background: 'var(--vintage-paper)', borderColor: 'var(--vintage-burgundy)' }}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 flex-wrap">
            {/* Mobile toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-xs tracking-widest uppercase md:hidden"
              style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-burgundy)' }}
            >
              <SlidersHorizontal size={14} />
              Filtri {hasFilters && <span className="inline-block w-2 h-2 rounded-full" style={{ background: 'var(--vintage-burgundy)' }} />}
            </button>

            {/* Desktop filters always visible */}
            <div className={`w-full md:flex items-center gap-4 flex-wrap ${showFilters ? 'flex' : 'hidden'}`}>
              {/* Category */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs tracking-wider uppercase opacity-60 shrink-0" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>Stile:</span>
                <div className="flex gap-1 flex-wrap">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setActiveCategory(cat.value)}
                      className="px-3 py-1 text-xs tracking-wider uppercase transition-all"
                      style={{
                        fontFamily: 'var(--font-oswald)',
                        background: activeCategory === cat.value ? 'var(--vintage-burgundy)' : 'transparent',
                        color: activeCategory === cat.value ? 'var(--vintage-cream)' : 'var(--vintage-sepia)',
                        border: `1px solid ${activeCategory === cat.value ? 'var(--vintage-burgundy)' : 'var(--vintage-border)'}`,
                      }}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Country */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs tracking-wider uppercase opacity-60 shrink-0" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>Paese:</span>
                <div className="flex gap-1 flex-wrap">
                  {countries.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => setActiveCountry(c.value)}
                      className="px-3 py-1 text-xs tracking-wider uppercase transition-all"
                      style={{
                        fontFamily: 'var(--font-oswald)',
                        background: activeCountry === c.value ? 'var(--vintage-navy)' : 'transparent',
                        color: activeCountry === c.value ? 'var(--vintage-cream)' : 'var(--vintage-sepia)',
                        border: `1px solid ${activeCountry === c.value ? 'var(--vintage-navy)' : 'var(--vintage-border)'}`,
                      }}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs tracking-wider uppercase opacity-60" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>Ordina:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="text-xs px-3 py-1 border"
                  style={{
                    fontFamily: 'var(--font-oswald)',
                    background: 'var(--vintage-cream)',
                    color: 'var(--vintage-sepia)',
                    borderColor: 'var(--vintage-burgundy)',
                  }}
                >
                  <option value="date">Per Data</option>
                  <option value="duration">Per Durata</option>
                </select>

                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-xs tracking-wider uppercase"
                    style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-burgundy)' }}
                  >
                    <X size={12} /> Reset
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tours grid */}
        <div className="py-12 px-4" style={{ background: 'var(--vintage-cream)' }}>
          <div className="max-w-6xl mx-auto">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p
                  className="text-2xl uppercase mb-4"
                  style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}
                >
                  Nessun tour trovato
                </p>
                <button
                  onClick={clearFilters}
                  className="text-sm tracking-widest uppercase underline"
                  style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-burgundy)' }}
                >
                  Rimuovi i filtri
                </button>
              </div>
            ) : (
              <>
                <p
                  className="text-xs tracking-widest uppercase mb-8 opacity-60"
                  style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}
                >
                  {filtered.length} {filtered.length === 1 ? 'tour trovato' : 'tour trovati'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filtered.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
