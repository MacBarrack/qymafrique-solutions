"use client"

import Link from "next/link"
import { Menu, X, MessageCircle, Briefcase, Users, Mail, Zap } from "lucide-react"
import { useState, useEffect } from "react"
import { QLogo } from "@/components/q-logo"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: "/portfolio", label: "Work", icon: Briefcase },
    { href: "/services", label: "Services", icon: Zap },
    { href: "/about", label: "About", icon: Users },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <header className={`sticky top-4 z-50 w-full px-4 transition-all duration-500 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
    }`}>
      <div className="mx-auto max-w-2xl">
        <div className="relative flex h-14 items-center justify-between bg-white/95 backdrop-blur-md border border-gray-200/60 rounded-2xl px-4 sm:px-5 shadow-lg hover:shadow-xl transition-all duration-300">
          {/* Logo - Compact */}
          <Link href="/" className="flex items-center group shrink-0">
            <QLogo />
          </Link>

          {/* Desktop Navigation - Compact Icon Style */}
          <nav className="hidden sm:flex items-center gap-0.5 mx-auto">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="p-2 text-gray-600 hover:text-blue-900 hover:bg-sky-50 rounded-lg transition-all duration-300 relative group"
                  title={link.label}
                >
                  <Icon className="w-4 h-4" />
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Section - Compact */}
          <div className="flex items-center gap-1 shrink-0">
            <a href="https://wa.me/254717687202?text=Hello%20Qymafrique%20Solutions" target="_blank" rel="noopener noreferrer" className="hidden sm:flex">
              <button className="p-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 group" title="Chat with us">
                <MessageCircle className="w-4 h-4" />
              </button>
            </a>
            <Link href="/quote" className="hidden sm:block">
              <button className="px-3 py-2 bg-blue-900 hover:bg-blue-950 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 text-xs hover:scale-105 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">Get Quote</span>
              </button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-2 text-gray-600 hover:text-blue-900 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 bg-white/95 backdrop-blur-md border border-gray-200/60 rounded-2xl p-3 animate-in fade-in slide-in-from-top-2 duration-300 shadow-lg">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-900 hover:bg-sky-50 rounded-lg transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}
              <div className="border-t border-gray-200/50 my-2" />
              <a href="https://wa.me/254717687202?text=Hello%20Qymafrique%20Solutions" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="w-full">
                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-green-600 rounded-lg font-semibold text-white shadow-sm transition-all duration-300 text-xs hover:bg-green-700">
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </button>
              </a>
              <Link 
                href="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              >
                <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-blue-900 rounded-lg font-semibold text-white shadow-md transition-all duration-300 text-xs hover:bg-blue-950">
                  <Zap className="w-4 h-4" />
                  Get Quote
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
