"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { MessageCircle, Zap, Briefcase, Wrench, Info, Mail, Home } from "lucide-react"
import { QLogo } from "@/components/q-logo"

const navLinks = [
  { href: "/",          label: "Home",     icon: Home },
  { href: "/portfolio", label: "Work",     icon: Briefcase },
  { href: "/services",  label: "Services", icon: Wrench },
  { href: "/about",     label: "About",    icon: Info },
  { href: "/contact",   label: "Contact",  icon: Mail },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* ── DESKTOP / LARGE TABLET — top floating pill ── */}
      <header className="hidden md:flex fixed top-0 inset-x-0 z-50 justify-center px-4 pt-4">
        <div
          className={`w-full max-w-2xl transition-all duration-300 ${
            scrolled ? "shadow-xl shadow-black/20" : ""
          }`}
        >
          <div className="flex h-12 items-center justify-between bg-gray-950 border border-white/10 rounded-2xl px-4">

            {/* Logo */}
            <Link href="/" className="shrink-0">
              <QLogo className="brightness-0 invert" />
            </Link>

            {/* Nav links */}
            <nav className="flex items-center gap-0.5">
              {navLinks.filter(l => l.href !== "/").map(({ href, label }) => {
                const active = pathname === href
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/8"
                    }`}
                  >
                    {label}
                  </Link>
                )
              })}
            </nav>

            {/* CTAs */}
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/254717687202?text=Hello%20Qymafrique%20Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-white" />
              </a>
              <Link href="/quote">
                <span className="flex items-center gap-1.5 h-8 px-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-colors">
                  <Zap className="w-3 h-3" />
                  Quote
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE / TABLET — bottom nav bar ── */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 px-3 pb-3">
        <div className="bg-gray-950 border border-white/10 rounded-2xl px-2 py-2 shadow-2xl shadow-black/40">
          <div className="flex items-center justify-around">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all ${
                    active ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      active ? "text-blue-400" : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`text-[10px] font-medium transition-colors ${
                      active ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              )
            })}

            {/* WhatsApp shortcut */}
            <a
              href="https://wa.me/254717687202?text=Hello%20Qymafrique%20Solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl hover:bg-white/5 transition-all"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                <MessageCircle className="w-3 h-3 text-white" />
              </div>
              <span className="text-[10px] font-medium text-gray-500">Chat</span>
            </a>
          </div>

          {/* Get Quote pill — full width */}
          <Link href="/quote" className="block mt-2">
            <span className="flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-colors w-full">
              <Zap className="w-3.5 h-3.5" />
              Get a Quote
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile bottom padding so content doesn't hide behind nav */}
      <div className="md:hidden h-28" />
    </>
  )
}