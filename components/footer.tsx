import Link from "next/link"
import { Mail, MapPin, MessageCircle, ArrowUpRight, Zap } from "lucide-react"

const nav = [
  { href: "/portfolio", label: "Work" },
  { href: "/services",  label: "Services" },
  { href: "/about",     label: "About" },
  { href: "/contact",   label: "Contact" },
  { href: "/quote",     label: "Get a Quote" },
]

const services = [
  "Web Development",
  "Mobile Apps",
  "E-Commerce",
  "Branding",
  "Digital Marketing",
]

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-black text-white">Qymafrique</span>
              <br />
              <span className="text-sm text-gray-500 font-medium">Solutions</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Crafting digital products that perform — clean code, sharp design, real results.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs text-emerald-400 font-medium">Available for new projects</span>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {label}
                    {label === "Get a Quote" && (
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Services</p>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s} className="text-sm text-gray-400">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@qymafrique.co.ke"
                  className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-gray-600 group-hover:text-blue-400 transition-colors" />
                  info@qymafrique.co.ke
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/254717687202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 shrink-0 text-gray-600 group-hover:text-emerald-400 transition-colors" />
                  +254 717 687202
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-600" />
                Nairobi, Kenya
              </li>
            </ul>

            {/* Quote CTA */}
            <Link href="/quote" className="mt-6 inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-colors">
              <Zap className="w-3 h-3" />
              Start a Project
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Qymafrique Solutions. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}