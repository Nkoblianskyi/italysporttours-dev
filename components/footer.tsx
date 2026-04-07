import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="pt-12 pb-6"
      style={{ background: 'var(--vintage-sepia)', color: 'var(--vintage-cream)' }}
    >
      {/* Decorative top border */}
      <div className="h-1 w-full mb-10" style={{ background: 'var(--vintage-gold)' }} />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <p
                className="text-2xl tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-oswald)', color: 'var(--vintage-gold)' }}
              >
                Italy Sport Tours
              </p>
            </div>
            <p className="text-sm leading-relaxed opacity-80" style={{ fontFamily: 'var(--font-playfair)' }}>
              Tour d’autore indimenticabili in Italia e in tutta Europa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-sm tracking-widest uppercase mb-4 pb-2"
              style={{ fontFamily: 'var(--font-oswald)', borderBottom: '1px solid var(--vintage-gold)', color: 'var(--vintage-gold)' }}
            >
              Pagine
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/tours', label: 'Catalogo Tour' },
                { href: '/chi-siamo', label: 'Chi Siamo' },
                { href: '/contatti', label: 'Contatti' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                    style={{ fontFamily: 'var(--font-oswald)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3
              className="text-sm tracking-widest uppercase mb-4 pb-2"
              style={{ fontFamily: 'var(--font-oswald)', borderBottom: '1px solid var(--vintage-gold)', color: 'var(--vintage-gold)' }}
            >
              Legale
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/cookie-policy', label: 'Cookie Policy' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                    style={{ fontFamily: 'var(--font-oswald)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-sm tracking-widest uppercase mb-4 pb-2"
              style={{ fontFamily: 'var(--font-oswald)', borderBottom: '1px solid var(--vintage-gold)', color: 'var(--vintage-gold)' }}
            >
              Contatti
            </h3>
            <ul className="space-y-3 text-sm opacity-80" style={{ fontFamily: 'var(--font-playfair)' }}>
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-1 shrink-0" />
                <a href="mailto:info@italysporttours.com" className="hover:opacity-100">
                  info@italysporttours.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 shrink-0" />
                <span className="leading-relaxed">
                  K.C. NTOMATA LIMITED<br />
                  Stylianou Lena, 24<br />
                  Christiana Court, Flat 202<br />
                  Strovolos, 2019 Nicosia<br />
                  Cyprus
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-60"
          style={{ borderColor: 'var(--vintage-gold)', fontFamily: 'var(--font-oswald)' }}
        >
          <p>© 2026 Italy Sport Tours · K.C. NTOMATA LIMITED · Tutti i diritti riservati</p>
          <p>italysporttours.com</p>
        </div>
      </div>
    </footer>
  )
}
