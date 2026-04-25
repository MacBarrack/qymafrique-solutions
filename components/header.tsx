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

// ── Shared colour tokens ──────────────────────────────────────────────────────
const C = {
  navy:       "#0f1e4a",
  navyHover:  "#1a2f6b",
  navyBg:     "#0f1e4a14",
  navyBgHov:  "#0f1e4a0d",
  muted:      "#4a5a80",
  mutedMob:   "#8a97b5",
  green:      "#22c55e",
  greenHov:   "#16a34a",
  white:      "#ffffff",
  border:     "#1e2a4a22",
  borderMob:  "#1e2a4a1a",
} as const

// ── Animation styles (dangerouslySetInnerHTML avoids JSX parser issues) ───────
function HeaderStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          .hdr-init    { opacity:0; transform:translateY(-20px) scale(0.98); }
          .hdr-in      { animation: hdrDown 0.45s cubic-bezier(0.22,1,0.36,1) forwards; }
          .mob-init    { opacity:0; transform:translateY(20px); }
          .mob-in      { animation: mobUp  0.45s cubic-bezier(0.22,1,0.36,1) 0.1s forwards; }
          @keyframes hdrDown {
            from { opacity:0; transform:translateY(-20px) scale(0.98); }
            to   { opacity:1; transform:translateY(0) scale(1); }
          }
          @keyframes mobUp {
            from { opacity:0; transform:translateY(20px); }
            to   { opacity:1; transform:translateY(0); }
          }
        `,
      }}
    />
  )
}

// ── Desktop nav link ──────────────────────────────────────────────────────────
function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  const [hov, setHov] = useState(false)
  return (
    <Link
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150"
      style={{
        background: active ? C.navyBg : hov ? C.navyBgHov : "transparent",
        color: active || hov ? C.navy : C.muted,
      }}
    >
      {children}
    </Link>
  )
}

// ── WhatsApp button ───────────────────────────────────────────────────────────
function WaButton() {
  const [hov, setHov] = useState(false)
  return (
    
      href="https://wa.me/254717687202?text=Hello%20Qymafrique%20Solutions"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label="WhatsApp"
      className="flex h-8 w-8 items-center justify-center rounded-xl transition-colors"
      style={{ background: hov ? C.greenHov : C.green }}
    >
      <MessageCircle className="w-3.5 h-3.5 text-white" />
    </a>
  )
}

// ── Quote button ──────────────────────────────────────────────────────────────
function QuoteButton() {
  const [hov, setHov] = useState(false)
  return (
    <Link href="/quote">
      <span
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="flex items-center gap-1.5 h-8 px-3 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer select-none"
        style={{ background: hov ? C.navyHover : C.navy }}
      >
        <Zap className="w-3 h-3" />
        Quote
      </span>
    </Link>
  )
}

// ── Main Header ───────────────────────────────────────────────────────────────
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Re-run entrance animation on every page change
  useEffect(() => {
    setMounted(false)
    const raf = requestAnimationFrame(() => {
      const t = setTimeout(() => setMounted(true), 30)
      return () => clearTimeout(t)
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const deskClass = mounted ? "hdr-in" : "hdr-init"
  const mobClass  = mounted ? "mob-in" : "mob-init"

  return (
    <>
      <HeaderStyles />

      {/* ── DESKTOP / LARGE TABLET ── */}
      <header className="hidden md:flex fixed top-0 inset-x-0 z-50 justify-center px-4 pt-4">
        <div className={`w-full max-w-2xl ${deskClass}`}>
          <div
            className="flex h-12 items-center justify-between rounded-2xl px-4 border"
            style={{
              background: C.white,
              borderColor: C.border,
              boxShadow: scrolled
                ? "0 8px 32px rgba(15,23,60,0.12)"
                : "0 2px 12px rgba(15,23,60,0.06)",
              transition: "box-shadow 0.3s ease",
            }}
          >
            {/* Logo — navy filter */}
            <Link href="/" className="shrink-0">
              <span
                className="block"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(13%) sepia(50%) saturate(900%) hue-rotate(200deg) brightness(80%)",
                }}
              >
                <QLogo />
              </span>
            </Link>

            {/* Nav */}
            <nav className="flex items-center gap-0.5">
              {navLinks
                .filter((l) => l.href !== "/")
                .map(({ href, label }) => (
                  <NavLink key={href} href={href} active={pathname === href}>
                    {label}
                  </NavLink>
                ))}
            </nav>

            {/* CTAs */}
            <div className="flex items-center gap-2">
              <WaButton />
              <QuoteButton />
            </div>
          </div>
        </div>
      </header>

      {/* ── MOBILE / SMALL TABLET ── */}
      <nav
        className={`md:hidden fixed bottom-0 inset-x-0 z-50 px-3 ${mobClass}`}
        style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
      >
        <div
          className="rounded-2xl px-2 py-2 border"
          style={{
            background: C.white,
            borderColor: C.borderMob,
            boxShadow: "0 -4px 24px rgba(15,23,60,0.09)",
          }}
        >
          {/* Icon nav row */}
          <div className="flex items-center justify-around">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className="flex flex-col items-center gap-1 px-2 py-1.5 rounded-xl transition-all"
                  style={{ background: active ? C.navyBg : "transparent" }}
                >
                  <Icon className="w-5 h-5" style={{ color: active ? C.navy : C.mutedMob }} />
                  <span
                    style={{
                      fontSize: "clamp(9px, 2.2vw, 11px)",
                      fontWeight: 500,
                      color: active ? C.navy : C.mutedMob,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                  </span>
                </Link>
              )
            })}

            {/* WhatsApp shortcut */}
            
              href="https://wa.me/254717687202?text=Hello%20Qymafrique%20Solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 px-2 py-1.5 rounded-xl transition-all"
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{ background: C.green }}
              >
                <MessageCircle className="w-3 h-3 text-white" />
              </div>
              <span
                style={{
                  fontSize: "clamp(9px, 2.2vw, 11px)",
                  fontWeight: 500,
                  color: C.mutedMob,
                  whiteSpace: "nowrap",
                }}
              >
                Chat
              </span>
            </a>
          </div>

          {/* Get Quote — full width pill */}
          <Link href="/quote" className="block mt-2">
            <span
              className="flex items-center justify-center gap-2 w-full rounded-xl"
              style={{
                background: C.navy,
                color: C.white,
                fontWeight: 700,
                fontSize: "clamp(11px, 3vw, 13px)",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <Zap className="w-3.5 h-3.5 shrink-0" />
              Get a Quote
            </span>
          </Link>
        </div>
      </nav>

      {/* Spacer so page content clears the mobile nav */}
      <div className="md:hidden h-28" />
    </>
  )
}