import Link from 'next/link'
import Image from 'next/image'
import { tours } from '@/lib/tours-data'
import TourCard from './tour-card'
import { ArrowRight } from 'lucide-react'

export default function CatalogPreview() {
  const featured = tours.filter((t) => t.featured).slice(0, 4)

  return (
    <section className="py-16 px-4" style={{ background: 'var(--vintage-cream)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="vintage-divider mb-4">
            <span
              className="text-xs tracking-[0.3em] uppercase px-4"
              style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-burgundy)' }}
            >
              I Nostri Tour
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl uppercase mb-3 text-balance"
            style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}
          >
            Tour in Evidenza
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)', opacity: 0.8 }}
          >
            Selezioniamo ogni tour con cura maniacale perché ogni viaggio sia un&apos;esperienza unica, memorabile e degna di essere raccontata.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featured.map((tour) => (
            <TourCard key={tour.id} tour={tour} variant="featured" />
          ))}
        </div>

        {/* CTA to catalog */}
        <div className="text-center">
          <Link
            href="/tours"
            className="inline-flex items-center gap-3 px-10 py-4 text-sm tracking-widest uppercase transition-opacity hover:opacity-90"
            style={{
              background: 'var(--vintage-navy)',
              color: 'var(--vintage-cream)',
              fontFamily: 'var(--font-oswald)',
              border: '2px solid var(--vintage-navy)',
            }}
          >
            Vedi Tutti i Tour
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
