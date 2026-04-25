import { Header } from "@/components/header"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Services - Qymafrique Solutions",
  description: "Web development, mobile apps, e-commerce, branding, and digital marketing services.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
