import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                Qymafrique
              </span>
              <span className="text-lg font-light text-gray-500">Solutions</span>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Crafting digital experiences that drive growth and transform businesses across Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/portfolio", label: "Portfolio" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-blue-900 transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>E-Commerce</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-blue-900 flex-shrink-0" />
                <a
                  href="mailto:info@qymafrique.co.ke"
                  className="text-gray-600 hover:text-blue-900 transition-colors break-all"
                >
                  info@qymafrique.co.ke
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MessageCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <a href="https://wa.me/254717687202" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
                  +254 717 687202
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin className="h-5 w-5 text-blue-900 flex-shrink-0" />
                <span className="text-gray-600">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Qymafrique Solutions. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-gray-600 hover:text-blue-900 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-blue-900 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
