import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteFormClient } from "@/components/quote-form-client"
import { ArrowLeft, MessageCircle, Mail, Phone } from "lucide-react"

export const metadata = {
  title: "Get a Quote — Qymafrique Solutions",
  description: "Request a custom quote for your project. Fast turnaround, professional pricing.",
}

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-black transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to home
          </Link>

          {/* Page heading */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold bg-blue-50 text-blue-700 rounded-full border border-blue-200">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              Project Quote
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-3">
              Get Your Custom Quote
            </h1>
            <p className="text-base text-gray-500 leading-relaxed">
              Tell us about your project and we'll send a detailed quote promptly.
            </p>
          </div>

          {/* Form */}
          <QuoteFormClient />

          {/* Contact alternatives */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-400 text-center mb-4 font-medium uppercase tracking-wider">
              Prefer to reach out directly?
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href="https://wa.me/254717687202"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-700 text-xs font-semibold border border-gray-200 rounded-xl transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                WhatsApp
              </a>
              <a
                href="mailto:info@qymafrique.co.ke"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-700 text-xs font-semibold border border-gray-200 rounded-xl transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                info@qymafrique.co.ke
              </a>
              <a
                href="tel:+254717687202"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-700 text-xs font-semibold border border-gray-200 rounded-xl transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gray-500" />
                +254 717 687202
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}