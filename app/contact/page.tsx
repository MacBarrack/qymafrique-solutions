import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Us - Qymafrique Solutions",
  description: "Get in touch with Qymafrique Solutions. Contact us for inquiries, quotes, or partnerships.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
