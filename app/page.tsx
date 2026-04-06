import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import CatalogPreview from '@/components/catalog-preview'
import TravelTips from '@/components/travel-tips'
import FAQ from '@/components/faq'
import AboutPreview from '@/components/about-preview'
import CookieBanner from '@/components/cookie-banner'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CatalogPreview />
        <AboutPreview />
        <TravelTips />
        <FAQ />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
