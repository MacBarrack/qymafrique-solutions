"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

const phrases = [
  "That Convert",
  "That Scale",
  "That Stand Out",
  "That Last",
  "That Matter",
]

const clients = [
  { name: "Nitibu Healthcare",  dot: "bg-blue-600" },
  { name: "Twin Compass Tours", dot: "bg-emerald-500" },
  { name: "Otieno Advocates",   dot: "bg-violet-500" },
]

const projects = [
  { name: "Otieno Justus & Co Advocates", category: "Legal Services",      url: "https://www.otienojustuscoadvocates.com/", dot: "bg-violet-500",  color: "bg-violet-600" },
  { name: "Twin Compass Tours",            category: "Travel & Tourism",    url: "https://www.twincompasstours.com/",         dot: "bg-emerald-500", color: "bg-emerald-600" },
  { name: "Le Jardin de Den Daycare",      category: "Education",           url: "https://www.lejardindedendaycare.com/",     dot: "bg-pink-500",    color: "bg-pink-600" },
  { name: "Africa Sojourners of Hope",     category: "Non-Profit",          url: "https://www.africasojournersofhope.org/",   dot: "bg-amber-500",   color: "bg-amber-600" },
  { name: "Evuptiki",                      category: "In-House · Events",   url: "https://evuptiki.vercel.app/",              dot: "bg-indigo-500",  color: "bg-indigo-600" },
  { name: "Nitibu Healthcare",             category: "Healthcare",          url: "https://www.nitibuhealthcare.com/",         dot: "bg-blue-500",    color: "bg-blue-600" },
  { name: "World Concepts Ventures",       category: "Investment",          url: "https://www.worldconcepts.co.ke/",          dot: "bg-yellow-500",  color: "bg-yellow-600" },
  { name: "EMS-GS",                        category: "Enterprise System",   url: "https://ems-gs.vercel.app/",                dot: "bg-purple-500",  color: "bg-purple-600" },
  { name: "QuickCart",                     category: "E-Commerce",          url: "https://quickcart.greatstack.in/",          dot: "bg-red-500",     color: "bg-red-600" },
]

export function HeroNew() {
  const [phrase,  setPhrase]  = useState(0)
  const [project, setProject] = useState(0)
  const [visible, setVisible] = useState(false)
  const [fade,    setFade]    = useState(true)

  useEffect(() => {
    setVisible(true)
    const phraseId = setInterval(() => setPhrase(p => (p + 1) % phrases.length), 3000)
    return () => clearInterval(phraseId)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setProject(p => (p + 1) % projects.length)
        setFade(true)
      }, 300)
    }, 3200)
    return () => clearInterval(id)
  }, [])

  const current = projects[project]

  return (
    <section className="min-h-screen bg-white flex items-center pt-20 pb-16 px-4 overflow-hidden">

      <div className="w-full max-w-3xl mx-auto">

        <div
          className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >

          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">

            <div className="grid lg:grid-cols-5 min-h-[520px]">

              {/* ── LEFT ── */}
              <div className="lg:col-span-3 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">

                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8">
                    <span className="w-4 h-px bg-gray-400" />
                    Digital Studio — Nairobi
                  </span>

                  <h1 className="text-5xl sm:text-6xl font-black text-black leading-[1.0] tracking-tight">
                    We Build
                    <br />
                    <span className="text-blue-600">Digital</span>
                    <br />
                    <span className="relative inline-block h-[1.1em] overflow-hidden align-bottom w-full">
                      {phrases.map((p, i) => (
                        <span
                          key={p}
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            i === phrase
                              ? "opacity-100 translate-y-0"
                              : i < phrase
                              ? "opacity-0 -translate-y-full"
                              : "opacity-0 translate-y-full"
                          }`}
                        >
                          {p}
                        </span>
                      ))}
                    </span>
                  </h1>
                </div>

                <div className="mt-10 lg:mt-0">
                  <p className="text-base text-gray-500 max-w-sm leading-relaxed mb-8">
                    Enterprise-grade web, mobile, and digital solutions built for African businesses and beyond.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link href="/quote">
                      <span className="inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-900 text-white text-sm font-bold rounded-2xl transition-colors">
                        <Zap className="w-4 h-4" />
                        Start a Project
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>

                    <Link href="/portfolio">
                      <span className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-black text-sm font-semibold border border-gray-200 rounded-2xl transition-colors">
                        See Our Work
                      </span>
                    </Link>
                  </div>

                  <div className="mt-10 flex items-center gap-3">
                    <div className="flex -space-x-1.5">
                      {clients.map(({ name, dot }) => (
                        <div key={name} className={`w-7 h-7 rounded-full border-2 border-white ${dot} flex items-center justify-center`}>
                          <span className="text-[8px] font-black text-white">{name[0]}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 font-medium">
                      Trusted by <span className="text-black font-bold">30+</span> businesses
                    </p>
                  </div>
                </div>
              </div>

              {/* ── RIGHT — rotating project live ── */}
              <div className="lg:col-span-2 bg-gray-950 relative flex items-center justify-center p-8 min-h-[280px]">

                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-8 left-8 w-32 h-32 rounded-full bg-blue-600/20 blur-3xl" />
                  <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full bg-blue-400/10 blur-2xl" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-blue-900/30 blur-3xl" />
                </div>

                <div className="relative z-10 w-full max-w-xs">

                  {/* Project live card */}
                  <div
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-3 backdrop-blur-sm"
                    style={{ transition: "opacity 0.3s, transform 0.3s", opacity: fade ? 1 : 0, transform: fade ? "translateY(0)" : "translateY(6px)" }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-8 h-8 rounded-xl ${current.color} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-[10px] font-black text-white">{current.name[0]}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-white text-xs font-bold truncate">{current.name}</p>
                        <p className="text-gray-400 text-[10px]">{current.category}</p>
                      </div>
                      <span className="ml-auto flex-shrink-0 relative flex h-2 w-2">
                        <span className="animate-ping absolute h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative rounded-full h-2 w-2 bg-emerald-400" />
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {[75, 55, 88].map((w, i) => (
                        <div key={i} className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-700"
                            style={{ width: fade ? `${w}%` : "0%", transitionDelay: `${i * 0.15}s` }}
                          />
                        </div>
                      ))}
                    </div>

                    <a
                      href={current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center gap-1.5 text-[10px] text-gray-400 hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-3 h-3" />
                      Visit project
                    </a>
                  </div>

                  {/* Progress dots */}
                  <div className="flex items-center justify-between px-1 mb-3">
                    <div className="flex gap-1">
                      {projects.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => { setFade(false); setTimeout(() => { setProject(i); setFade(true) }, 200) }}
                          className={`rounded-full transition-all duration-300 ${
                            i === project
                              ? "w-4 h-1.5 bg-white"
                              : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[9px] text-gray-500 font-mono">
                      {String(project + 1).padStart(2, "0")}/{String(projects.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Response time card */}
                  <div className="mt-1 bg-blue-600 rounded-2xl p-4">
                    <p className="text-white text-xs font-bold mb-1">Response time</p>
                    <p className="text-blue-200 text-[10px]">We reply within 24 hours</p>
                    <p className="text-white font-black text-2xl mt-1">&lt; 24h</p>
                  </div>

                </div>
              </div>

            </div>

            {/* ── FOOTER BAR ── */}
            <div className="border-t border-gray-100 px-8 sm:px-10 lg:px-12 py-4">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">Built with</span>
                {["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "MongoDB"].map(t => (
                  <span key={t} className="text-[11px] font-semibold text-gray-700">{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}