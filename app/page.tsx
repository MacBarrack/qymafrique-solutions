import { Header } from "@/components/header"
import { HeroNew } from "@/components/hero-new"
import { PortfolioCarousel } from "@/components/portfolio-carousel"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroNew />
        <PortfolioCarousel />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}