import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-[70vh] flex items-center justify-center px-4"
        style={{ background: 'var(--vintage-cream)' }}
      >
        <div className="text-center max-w-lg">
          {/* Large 404 */}
          <div
            className="text-9xl mb-6 leading-none"
            style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-burgundy)', opacity: 0.15 }}
          >
            404
          </div>

          <div className="inline-block mb-6 px-4 py-1" style={{ background: 'var(--vintage-burgundy)', border: '1px solid var(--vintage-gold)' }}>
            <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-gold)' }}>
              Pagina Non Trovata
            </span>
          </div>

          <h1
            className="text-4xl uppercase mb-4 text-balance"
            style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-sepia)' }}
          >
            Questa Pagina Non Esiste
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px" style={{ background: 'var(--vintage-burgundy)' }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: 'var(--vintage-burgundy)' }} />
            <div className="w-12 h-px" style={{ background: 'var(--vintage-burgundy)' }} />
          </div>

          <p
            className="text-base leading-relaxed mb-8"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--vintage-sepia)', opacity: 0.8 }}
          >
            Sembra che la pagina che stai cercando abbia preso una deviazione e non sia ancora tornata. Torna alla home o esplora i nostri tour.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 text-sm tracking-widest uppercase transition-opacity hover:opacity-90"
              style={{ background: 'var(--vintage-burgundy)', color: 'var(--vintage-cream)', fontFamily: 'var(--font-oswald)', border: '2px solid var(--vintage-burgundy)' }}
            >
              Torna alla Home
            </Link>
            <Link
              href="/tours"
              className="px-8 py-3 text-sm tracking-widest uppercase transition-opacity hover:opacity-80"
              style={{ background: 'transparent', color: 'var(--vintage-sepia)', fontFamily: 'var(--font-oswald)', border: '2px solid var(--vintage-sepia)' }}
            >
              Vedi i Tour
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
