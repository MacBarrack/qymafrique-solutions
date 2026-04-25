import { Header } from "@/components/header"
import { PortfolioShowcase } from "@/components/portfolio-showcase"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Portfolio - Qymafrique Solutions",
  description: "View our portfolio of successful projects across web development, mobile apps, and digital solutions.",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* pt-16 clears the fixed desktop pill nav at top
          pb-28 clears the fixed mobile nav at bottom      */}
      <main className="pt-16 md:pt-20 pb-28 md:pb-0">
        <PortfolioShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}