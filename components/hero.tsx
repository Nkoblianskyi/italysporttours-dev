import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '80vh', maxHeight: '600px', background: 'var(--vintage-navy)' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Italy Sport Tours — Tour d’autore in Italia e in Europa"
          fill
          className="object-cover"
          priority
          style={{ opacity: 0.35 }}
        />
      </div>

      {/* Decorative corner borders */}
      <div
        className="absolute top-6 left-6 w-16 h-16 pointer-events-none"
        style={{ borderTop: '3px solid var(--vintage-gold)', borderLeft: '3px solid var(--vintage-gold)' }}
      />
      <div
        className="absolute top-6 right-6 w-16 h-16 pointer-events-none"
        style={{ borderTop: '3px solid var(--vintage-gold)', borderRight: '3px solid var(--vintage-gold)' }}
      />
      <div
        className="absolute bottom-6 left-6 w-16 h-16 pointer-events-none"
        style={{ borderBottom: '3px solid var(--vintage-gold)', borderLeft: '3px solid var(--vintage-gold)' }}
      />
      <div
        className="absolute bottom-6 right-6 w-16 h-16 pointer-events-none"
        style={{ borderBottom: '3px solid var(--vintage-gold)', borderRight: '3px solid var(--vintage-gold)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 py-20" style={{ minHeight: '80vh', maxHeight: '600px' }}>
        {/* Eyebrow */}
        <div
          className="inline-block mb-4 px-4 py-1"
          style={{ background: 'var(--vintage-burgundy)', border: '1px solid var(--vintage-gold)' }}
        >
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-gold)' }}
          >
            Dal 2010 · Tour d’Autore
          </span>
        </div>

        {/* Main title */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl text-balance leading-none mb-4 uppercase"
          style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-cream)', letterSpacing: '0.06em' }}
        >
          La strada
          <br />
          <span style={{ color: 'var(--vintage-gold)' }}>come arte</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-4 w-48">
          <div className="flex-1 h-px" style={{ background: 'var(--vintage-gold)' }} />
          <div className="w-2 h-2 rotate-45" style={{ background: 'var(--vintage-gold)' }} />
          <div className="flex-1 h-px" style={{ background: 'var(--vintage-gold)' }} />
        </div>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl text-balance"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-cream)', opacity: 0.9 }}
        >
          Tour d&apos;autore in Italia e in tutta Europa: montagne, passi alpini, gravel, sentieri e grandi panorami — vissuti come non hai mai immaginato.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/tours"
            className="px-8 py-3 text-sm tracking-widest uppercase transition-opacity hover:opacity-90"
            style={{
              background: 'var(--vintage-burgundy)',
              color: 'var(--vintage-cream)',
              fontFamily: 'var(--font-oswald)',
              border: '2px solid var(--vintage-gold)',
            }}
          >
            Esplora i Tour
          </Link>
          <Link
            href="/chi-siamo"
            className="px-8 py-3 text-sm tracking-widest uppercase transition-opacity hover:opacity-80"
            style={{
              background: 'transparent',
              color: 'var(--vintage-cream)',
              fontFamily: 'var(--font-oswald)',
              border: '2px solid var(--vintage-cream)',
            }}
          >
            Chi Siamo
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={20} style={{ color: 'var(--vintage-gold)', opacity: 0.7 }} />
        </div>
      </div>

      {/* Bottom decorative strip */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'var(--vintage-gold)' }} />
    </section>
  )
}
