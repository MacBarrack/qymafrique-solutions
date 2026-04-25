import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Us - Qymafrique Solutions",
  description: "Learn about Qymafrique Solutions, our mission, and our team of talented developers and designers.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16 md:pt-20 pb-28 md:pb-0">
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}