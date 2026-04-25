import { Header } from "@/components/header"
import { PortfolioShowcase } from "@/components/portfolio-showcase"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Portfolio - Qymafrique Solutions",
  description: "View our portfolio of successful projects across web development, mobile apps, and digital solutions.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <PortfolioShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
