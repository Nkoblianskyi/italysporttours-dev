import type { Metadata } from 'next'
import { Playfair_Display, Oswald } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Italy Sport Tours — Tour Sportivi in Italia e in Europa',
  description:
    'Scopri i migliori tour sportivi in Italia e in tutta Europa. Calcio, ciclismo, atletica, tennis e molto altro. Esperienze indimenticabili con Italy Sport Tours.',
  keywords: 'tour sportivi, Italia, Europa, calcio, ciclismo, tennis, atletica, viaggi sportivi',
  authors: [{ name: 'Italy Sport Tours' }],
  openGraph: {
    title: 'Italy Sport Tours',
    description: 'Tour sportivi indimenticabili in Italia e in Europa',
    url: 'https://italysporttours.com',
    siteName: 'Italy Sport Tours',
    locale: 'it_IT',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#6b1e1e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${playfair.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
