import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-white via-sky-50/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 rounded-full border border-sky-300 mb-4">
            <span className="w-1.5 h-1.5 bg-sky-600 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-blue-900">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Let&apos;s Connect
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Have questions? We&apos;re here to help. Reach out and let&apos;s discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10">
          <div className="border border-gray-200 rounded-xl p-4 md:p-5 text-center group hover:border-sky-400 hover:shadow-md transition-all duration-300">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sky-100 text-blue-900 mb-2 group-hover:bg-sky-200 transition-colors">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">Email</h3>
            <a href="mailto:sales@qymafrique.co.ke" className="text-xs text-blue-900 hover:text-blue-950">
              sales@qymafrique.co.ke
            </a>
          </div>

          <div className="border border-gray-200 rounded-xl p-4 md:p-5 text-center group hover:border-green-400 hover:shadow-md transition-all duration-300">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-green-100 text-green-600 mb-2 group-hover:bg-green-200 transition-colors">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">WhatsApp</h3>
            <a href="https://wa.me/254717687202" target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:text-green-700">
              +254 717 687202
            </a>
          </div>

          <div className="border border-gray-200 rounded-xl p-4 md:p-5 text-center group hover:border-sky-400 hover:shadow-md transition-all duration-300">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sky-100 text-blue-900 mb-2 group-hover:bg-sky-200 transition-colors">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">Location</h3>
            <p className="text-xs text-gray-700">Nairobi, Kenya</p>
          </div>

          <div className="border border-gray-200 rounded-xl p-4 md:p-5 text-center group hover:border-sky-400 hover:shadow-md transition-all duration-300">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sky-100 text-blue-900 mb-2 group-hover:bg-sky-200 transition-colors">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">Hours</h3>
            <p className="text-xs text-gray-700">Mon-Fri 9AM-6PM</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-sky-50 to-white border border-sky-200 rounded-xl p-6 md:p-8 text-center shadow-md">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Ready to Start?</h3>
            <p className="text-sm md:text-base text-gray-600 mb-5">
              Whether it&apos;s a website, app, or digital solution, we&apos;re ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
              <Link href="/quote">
                <button className="w-full sm:w-auto px-6 py-2 bg-blue-900 hover:bg-blue-950 rounded-lg font-semibold text-sm text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Get Quote
                </button>
              </Link>
              <a href="https://wa.me/254717687202" target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-sm text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-1.5">
                  <MessageCircle className="w-4 h-4" />
                  Chat
                </button>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          Responses within 24 hours
        </p>
      </div>
    </section>
  )
}
