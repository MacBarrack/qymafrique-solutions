import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteFormClient } from "@/components/quote-form-client"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Get a Quote - Qymafrique Solutions",
  description: "Request a custom quote for your web development project. Fast turnaround, professional pricing.",
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-b from-white via-sky-50/20 to-white pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button variant="ghost" asChild size="sm">
              <Link href="/">
                <ArrowLeft className="mr-2 h-3 w-3" />
                Back
              </Link>
            </Button>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-medium bg-sky-100 text-blue-900 rounded-full border border-sky-300">
                <span className="w-1.5 h-1.5 bg-sky-600 rounded-full animate-pulse" />
                Project Quote
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
                Get Your Custom Quote
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                Tell us about your project and we&apos;ll send a detailed quote within 24 hours.
              </p>
            </div>

            <QuoteFormClient />

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-muted-foreground text-center mb-4">Need to discuss first?</p>
              <div className="flex flex-col xs:flex-row gap-2 justify-center">
                <Button asChild variant="outline" size="sm" className="text-xs h-8">
                  <a href="https://wa.me/254717687202" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-1.5 h-3 w-3" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" asChild size="sm" className="text-xs h-8">
                  <a href="mailto:sales@qymafrique.co.ke">Email</a>
                </Button>
                <Button variant="outline" asChild size="sm" className="text-xs h-8">
                  <a href="tel:+254717687202">Call</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
