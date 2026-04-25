"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, MessageCircle, Zap } from "lucide-react"
import { QLogo } from "@/components/q-logo"

const navLinks = [
  { href: "/portfolio", label: "Work" },
  { href: "/services",  label: "Services" },
  { href: "/about",     label: "About" },
  { href: "/contact",   label: "Contact" },
]

export function Header() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <div className={`w-full max-w-2xl transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-black/8" : ""}`}>

        <div className="flex h-12 items-center justify-between bg-white border border-gray-200 rounded-2xl px-4">

          <Link href="/" className="shrink-0">
            <QLogo />
          </Link>

          <nav className="hidden sm:flex items-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-black transition-colors rounded-lg hover:bg-gray-50"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/254717687202?text=Hello%20Qymafrique%20Solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-600 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white" />
            </a>

            <Link href="/quote" className="hidden sm:block">
              <span className="flex items-center gap-1.5 h-8 px-3 bg-black hover:bg-gray-900 text-white text-xs font-semibold rounded-xl transition-colors">
                <Zap className="w-3 h-3" />
                Quote
              </span>
            </Link>

            <button
              onClick={() => setOpen(v => !v)}
              className="sm:hidden flex h-8 w-8 items-center justify-center rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="sm:hidden mt-2 bg-white border border-gray-200 rounded-2xl p-3 shadow-lg">
            <nav className="flex flex-col gap-0.5 mb-3">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="border-t border-gray-100 pt-3 flex flex-col gap-2">
              <a
                href="https://wa.me/254717687202?text=Hello%20Qymafrique%20Solutions"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold rounded-xl transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Chat on WhatsApp
              </a>
              <Link href="/quote" onClick={() => setOpen(false)}>
                <span className="flex items-center justify-center gap-2 py-2.5 bg-black hover:bg-gray-900 text-white text-xs font-semibold rounded-xl transition-colors w-full">
                  <Zap className="w-3.5 h-3.5" />
                  Get a Quote
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}