'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tours', label: 'Tour' },
  { href: '/chi-siamo', label: 'Chi Siamo' },
  { href: '/contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50" style={{ background: 'var(--vintage-navy)', borderBottom: '3px solid var(--vintage-gold)' }}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          <div className="flex flex-col leading-none">
            <span
              className="text-xl font-display tracking-widest uppercase"
              style={{ color: 'var(--vintage-gold)', fontFamily: 'var(--font-oswald)' }}
            >
              Italy Sport Tours
            </span>

          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase transition-colors hover:opacity-80"
              style={{ color: 'var(--vintage-cream)', fontFamily: 'var(--font-oswald)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/tours"
            className="poster-badge text-xs tracking-widest transition-opacity hover:opacity-90 px-4 py-2"
            style={{ background: 'var(--vintage-burgundy)', color: 'var(--vintage-cream)', fontFamily: 'var(--font-oswald)' }}
          >
            Prenota Ora
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          style={{ color: 'var(--vintage-gold)' }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden absolute top-16 left-0 right-0 z-50 py-4 border-t"
          style={{ background: 'var(--vintage-navy)', borderColor: 'var(--vintage-gold)' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm tracking-widest uppercase transition-colors"
              style={{ color: 'var(--vintage-cream)', fontFamily: 'var(--font-oswald)' }}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <Link
              href="/tours"
              onClick={() => setOpen(false)}
              className="block text-center py-2 px-4 text-sm tracking-widest uppercase"
              style={{ background: 'var(--vintage-burgundy)', color: 'var(--vintage-cream)', fontFamily: 'var(--font-oswald)' }}
            >
              Prenota Ora
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
