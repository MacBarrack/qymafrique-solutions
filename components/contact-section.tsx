import Link from "next/link"
import { Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react"

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "sales@qymafrique.co.ke",
    href: "mailto:sales@qymafrique.co.ke",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+254 717 687202",
    href: "https://wa.me/254717687202",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: null,
    color: "text-gray-600",
    bg: "bg-gray-50",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri, 9AM–6PM",
    href: null,
    color: "text-gray-600",
    bg: "bg-gray-50",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Contact</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight tracking-tight">
              Let's Build<br />Something<br />Together
            </h2>
            <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed max-w-sm">
              Have a project in mind? We'd love to hear about it. Reach out and let's make it real.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {channels.map(({ icon: Icon, label, value, href, color, bg, external }) => {
                const inner = (
                  <div className={`${bg} rounded-2xl p-4 h-full hover:shadow-sm transition-shadow`}>
                    <div className={`${color} mb-2`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</p>
                    <p
                      className={`text-xs font-semibold mt-0.5 ${href ? color : "text-gray-700"} leading-tight`}
                    >
                      {value}
                    </p>
                  </div>
                )
                if (href) {
                  return (
                    <a
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      {inner}
                    </a>
                  )
                }
                return <div key={label}>{inner}</div>
              })}
            </div>
          </div>

          {/* Right */}
          <div className="bg-white rounded-3xl border border-gray-200 p-7 sm:p-10 shadow-sm">
            <h3 className="text-xl font-black text-black mb-2">Ready to Start?</h3>
            <p className="text-sm text-gray-500 mb-7 leading-relaxed">
              Whether it's a website, app, or full digital strategy — we're ready to bring your vision to life.
            </p>

            <div className="space-y-3">
              <Link href="/quote" className="block">
                <span className="flex items-center justify-between px-5 py-4 bg-black hover:bg-gray-900 text-white text-sm font-bold rounded-2xl transition-colors">
                  Get a Project Quote
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <a
                href="https://wa.me/254717687202?text=Hi%20Qymafrique%20Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-4 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-2xl transition-colors"
              >
                Chat on WhatsApp
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="mailto:sales@qymafrique.co.ke"
                className="flex items-center justify-between px-5 py-4 bg-white hover:bg-gray-50 text-black text-sm font-bold rounded-2xl border border-gray-200 transition-colors"
              >
                Send an Email
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="mt-6 text-[11px] text-gray-400 text-center">
              We respond to all inquiries within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}