import Image from 'next/image'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Users } from 'lucide-react'
import { Tour } from '@/lib/tours-data'

interface TourCardProps {
  tour: Tour
  variant?: 'default' | 'featured'
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function TourCard({ tour, variant = 'default' }: TourCardProps) {
  return (
    <Link href={`/tours/${tour.slug}`} className="group block">
      <div
        className="overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
        style={{
          background: 'var(--vintage-paper)',
          border: '2px solid var(--vintage-burgundy)',
          boxShadow: '4px 4px 0 var(--vintage-sepia)',
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: variant === 'featured' ? '220px' : '180px' }}>
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Vintage overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(27,15,8,0.6) 100%)' }}
          />
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="poster-badge text-xs">
              {tour.categoryLabel}
            </span>
          </div>
          {/* Featured badge */}
          {tour.featured && (
            <div className="absolute top-3 right-3">
              <span
                className="text-xs tracking-widest uppercase px-2 py-1"
                style={{
                  background: 'var(--vintage-gold)',
                  color: 'var(--vintage-sepia)',
                  fontFamily: 'var(--font-oswald)',
                  fontSize: '0.65rem',
                }}
              >
                In Evidenza
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Location */}
          <div className="flex items-center gap-1 mb-2">
            <MapPin size={11} style={{ color: 'var(--vintage-burgundy)' }} />
            <span
              className="text-xs tracking-wider uppercase"
              style={{ color: 'var(--vintage-burgundy)', fontFamily: 'var(--font-oswald)' }}
            >
              {tour.location}, {tour.country}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-lg leading-tight mb-2 uppercase tracking-wide text-balance"
            style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}
          >
            {tour.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-4 line-clamp-2"
            style={{ color: 'var(--vintage-sepia)', fontFamily: 'var(--font-playfair)', opacity: 0.85 }}
          >
            {tour.shortDescription}
          </p>

          {/* Meta info */}
          <div className="flex items-center gap-4 mb-4 text-xs" style={{ color: 'var(--vintage-sepia)', opacity: 0.75 }}>
            <div className="flex items-center gap-1">
              <Calendar size={11} />
              <span style={{ fontFamily: 'var(--font-oswald)' }}>{formatDate(tour.startDate)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={11} />
              <span style={{ fontFamily: 'var(--font-oswald)' }}>{tour.duration}</span>
            </div>
          </div>

          {/* CTA */}
          <div
            className="flex items-center justify-end pt-3"
            style={{ borderTop: '1px solid var(--vintage-burgundy)' }}
          >
            <span
              className="text-xs tracking-widest uppercase px-4 py-2 transition-opacity group-hover:opacity-90"
              style={{
                background: 'var(--vintage-navy)',
                color: 'var(--vintage-cream)',
                fontFamily: 'var(--font-oswald)',
              }}
            >
              Scopri il Tour
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
