import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { tours } from '@/lib/tours-data'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import { Calendar, Clock, MapPin, Users, CheckCircle, ChevronRight, Star } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })
}

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) return {}
  return {
    title: `${tour.title} — Italy Sport Tours`,
    description: tour.shortDescription,
  }
}

export default async function TourPage({ params }: Props) {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) notFound()

  const relatedTours = tours.filter((t) => t.id !== tour.id && (t.category === tour.category || t.country === tour.country)).slice(0, 3)

  const difficultyColor = {
    facile: 'var(--vintage-ochre)',
    media: 'var(--vintage-burgundy)',
    impegnativa: 'var(--vintage-sepia)',
  }[tour.difficulty]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero image */}
        <div className="relative" style={{ height: '55vh', minHeight: '320px', maxHeight: '480px' }}>
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover"
            priority
            style={{ filter: 'sepia(15%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(27,15,8,0.3) 0%, rgba(27,15,8,0.75) 100%)' }}
          />

          {/* Breadcrumb */}
          <div className="absolute top-6 left-4 right-4">
            <div className="max-w-4xl mx-auto flex items-center gap-2 text-xs opacity-80" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-cream)' }}>
              <Link href="/" className="hover:opacity-100 uppercase tracking-wider">Home</Link>
              <ChevronRight size={12} />
              <Link href="/tours" className="hover:opacity-100 uppercase tracking-wider">Tour</Link>
              <ChevronRight size={12} />
              <span className="uppercase tracking-wider opacity-70 truncate">{tour.title}</span>
            </div>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className="poster-badge">{tour.categoryLabel}</span>
                <span
                  className="text-xs tracking-widest uppercase px-2 py-1"
                  style={{ background: difficultyColor, color: 'var(--vintage-cream)', fontFamily: 'var(--font-oswald)', fontSize: '0.65rem' }}
                >
                  {tour.difficulty}
                </span>
              </div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl uppercase leading-tight mb-3 text-balance"
                style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-cream)', letterSpacing: '0.05em' }}
              >
                {tour.title}
              </h1>
              <div className="flex items-center gap-2 text-sm opacity-80" style={{ color: 'var(--vintage-gold)', fontFamily: 'var(--font-oswald)' }}>
                <MapPin size={14} />
                <span>{tour.location}, {tour.country}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-12 px-4" style={{ background: 'var(--vintage-cream)' }}>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Main content */}
              <div className="lg:col-span-2 space-y-10">

                {/* Quick facts */}
                <div
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5"
                  style={{ background: 'var(--vintage-paper)', border: '1px solid var(--vintage-burgundy)' }}
                >
                  <div className="text-center">
                    <Calendar size={18} className="mx-auto mb-2" style={{ color: 'var(--vintage-burgundy)' }} />
                    <p className="text-xs uppercase tracking-wider opacity-60 mb-1" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>Partenza</p>
                    <p className="text-sm leading-tight" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>{formatDate(tour.startDate)}</p>
                  </div>
                  <div className="text-center">
                    <Calendar size={18} className="mx-auto mb-2" style={{ color: 'var(--vintage-burgundy)' }} />
                    <p className="text-xs uppercase tracking-wider opacity-60 mb-1" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>Ritorno</p>
                    <p className="text-sm leading-tight" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>{formatDate(tour.endDate)}</p>
                  </div>
                  <div className="text-center">
                    <Clock size={18} className="mx-auto mb-2" style={{ color: 'var(--vintage-burgundy)' }} />
                    <p className="text-xs uppercase tracking-wider opacity-60 mb-1" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>Durata</p>
                    <p className="text-sm" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>{tour.duration}</p>
                  </div>
                  <div className="text-center">
                    <Users size={18} className="mx-auto mb-2" style={{ color: 'var(--vintage-burgundy)' }} />
                    <p className="text-xs uppercase tracking-wider opacity-60 mb-1" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>Max Posti</p>
                    <p className="text-sm" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>{tour.maxParticipants}</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h2
                    className="text-2xl uppercase mb-6 pb-3"
                    style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)', borderBottom: '2px solid var(--vintage-burgundy)' }}
                  >
                    Il Tour
                  </h2>
                  <div className="space-y-4">
                    {tour.longDescription.split('\n\n').map((para, i) => (
                      <p
                        key={i}
                        className="text-base leading-relaxed"
                        style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)', opacity: 0.9 }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h2
                    className="text-2xl uppercase mb-6 pb-3"
                    style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)', borderBottom: '2px solid var(--vintage-burgundy)' }}
                  >
                    Punti Salienti
                  </h2>
                  <ul className="space-y-3">
                    {tour.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Star size={14} className="mt-1 shrink-0" style={{ color: 'var(--vintage-gold)' }} fill="var(--vintage-gold)" />
                        <span
                          className="text-sm leading-relaxed"
                          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)' }}
                        >
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Included */}
                <div>
                  <h2
                    className="text-2xl uppercase mb-6 pb-3"
                    style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)', borderBottom: '2px solid var(--vintage-burgundy)' }}
                  >
                    Cosa Include
                  </h2>
                  <ul className="space-y-3">
                    {tour.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={14} className="mt-1 shrink-0" style={{ color: 'var(--vintage-burgundy)' }} />
                        <span
                          className="text-sm leading-relaxed"
                          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)' }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar — booking card */}
              <div className="lg:col-span-1">
                <div
                  className="sticky top-24 p-6"
                  style={{
                    background: 'var(--vintage-paper)',
                    border: '2px solid var(--vintage-burgundy)',
                    boxShadow: '5px 5px 0 var(--vintage-sepia)',
                  }}
                >
                  {/* Decorative label */}
                  <div
                    className="text-center mb-4 py-1"
                    style={{ background: 'var(--vintage-navy)', color: 'var(--vintage-gold)', fontFamily: 'var(--font-oswald)', fontSize: '0.65rem', letterSpacing: '0.2em' }}
                  >
                    PRENOTAZIONE
                  </div>

                  <div className="h-px mb-5" style={{ background: 'var(--vintage-burgundy)', opacity: 0.3 }} />

                  {/* Details recap */}
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between gap-2">
                      <span className="opacity-60 uppercase tracking-wider text-xs" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>Destinazione</span>
                      <span className="text-right text-xs" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>{tour.location}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="opacity-60 uppercase tracking-wider text-xs" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>Durata</span>
                      <span className="text-xs" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>{tour.duration}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="opacity-60 uppercase tracking-wider text-xs" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>Difficoltà</span>
                      <span
                        className="text-xs uppercase tracking-wider px-2 py-0.5"
                        style={{ background: difficultyColor, color: 'var(--vintage-cream)', fontFamily: 'var(--font-oswald)', fontSize: '0.6rem' }}
                      >
                        {tour.difficulty}
                      </span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="opacity-60 uppercase tracking-wider text-xs" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>Max Posti</span>
                      <span className="text-xs" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>{tour.maxParticipants} persone</span>
                    </div>
                  </div>

                  <Link
                    href={`/contatti?tour=${tour.slug}`}
                    className="block text-center py-4 text-sm tracking-widest uppercase transition-opacity hover:opacity-90 mb-3"
                    style={{
                      background: 'var(--vintage-burgundy)',
                      color: 'var(--vintage-cream)',
                      fontFamily: 'var(--font-oswald)',
                      border: '1px solid var(--vintage-gold)',
                    }}
                  >
                    Contatta per Informazioni
                  </Link>

                  <p
                    className="text-center text-xs mt-4 opacity-50 leading-relaxed"
                    style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)' }}
                  >
                    Il nostro team risponde entro 24 ore con tutti i dettagli e la disponibilità.
                  </p>
                </div>
              </div>
            </div>

            {/* Related tours */}
            {relatedTours.length > 0 && (
              <div className="mt-16">
                <div className="vintage-divider mb-8">
                  <span
                    className="px-4 text-xs tracking-[0.3em] uppercase"
                    style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-burgundy)' }}
                  >
                    Potrebbe Interessarti
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {relatedTours.map((t) => (
                    <Link key={t.id} href={`/tours/${t.slug}`} className="group block">
                      <div
                        className="overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
                        style={{ border: '1px solid var(--vintage-burgundy)', background: 'var(--vintage-paper)', boxShadow: '3px 3px 0 var(--vintage-sepia)' }}
                      >
                        <div className="relative" style={{ height: '140px' }}>
                          <Image src={t.image} alt={t.title} fill className="object-cover" style={{ filter: 'sepia(10%)' }} />
                          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(27,15,8,0.5) 100%)' }} />
                          <span className="absolute top-2 left-2 poster-badge">{t.categoryLabel}</span>
                        </div>
                        <div className="p-3">
                          <p className="text-sm uppercase tracking-wide leading-tight mb-1" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>{t.title}</p>
                          <p className="text-xs opacity-60" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}>{t.location}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
