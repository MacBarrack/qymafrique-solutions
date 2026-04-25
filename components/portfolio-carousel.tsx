"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Otieno Justus & Co Advocates",
    category: "Legal Services",
    description: "Professional legal representation with integrity. Comprehensive counsel for individuals and businesses.",
    image: "/portfolio-otieno.jpg",
    url: "https://www.otienojustuscoadvocates.com/",
    tags: ["Legal", "Professional", "Web"],
    accent: "bg-blue-600",
  },
  {
    id: 2,
    title: "Twin Compass Tours",
    category: "Travel & Tourism",
    description: "Premium East African safari adventures. Explore Maasai Mara, Serengeti, and beyond.",
    image: "/real-twin-compass.jpg",
    url: "https://www.twincompasstours.com/",
    tags: ["Tourism", "Safari", "Booking"],
    accent: "bg-amber-500",
  },
  {
    id: 3,
    title: "Le Jardin de Den Daycare",
    category: "Education",
    description: "Premier childcare for ages 6 weeks to 12 years. Safe, loving, nurturing environment.",
    image: "/real-daycare.jpg",
    url: "https://www.lejardindedendaycare.com/",
    tags: ["Education", "Childcare", "Services"],
    accent: "bg-emerald-500",
  },
  {
    id: 4,
    title: "Africa Sojourners of Hope",
    category: "Non-Profit",
    description: "Transforming vulnerable children and communities through education, health, and mentorship.",
    image: "/real-asoh.jpg",
    url: "https://www.africasojournersofhope.org/",
    tags: ["Non-Profit", "Education", "Impact"],
    accent: "bg-red-500",
    noImage: true,
  },
  {
    id: 5,
    title: "Evuptiki",
    category: "In-House Project",
    description: "Discover and book events. Live the moment with concerts, sports, festivals, and tech talks.",
    image: "/portfolio-evuptiki.jpg",
    url: "https://evuptiki.vercel.app",
    tags: ["Events", "Ticketing", "Platform"],
    accent: "bg-violet-600",
  },
  {
    id: 6,
    title: "Nitibu Healthcare",
    category: "Healthcare",
    description: "Comprehensive healthcare platform delivering quality medical solutions across East Africa.",
    image: "/portfolio-nitibu.jpg",
    url: "https://www.nitibuhealthcare.com/",
    tags: ["Healthcare", "Medical", "Telemedicine"],
    accent: "bg-cyan-600",
  },
  {
    id: 7,
    title: "World Concepts Ventures",
    category: "Investment",
    description: "Pioneering African innovation. Driving economic growth across East and Central Africa.",
    image: "/portfolio-worldconcepts.jpg",
    url: "https://www.worldconcepts.co.ke/",
    tags: ["Investment", "Finance", "Ventures"],
    accent: "bg-slate-700",
  },
  {
    id: 8,
    title: "EMS-GS",
    category: "Enterprise System",
    description: "Employee management system. Streamline workforce operations, track attendance, manage payroll.",
    image: "/portfolio-ems.jpg",
    url: "https://ems-gs.vercel.app",
    tags: ["Enterprise", "HR", "Analytics"],
    accent: "bg-indigo-600",
  },
  {
    id: 9,
    title: "QuickCart",
    category: "E-Commerce",
    description: "Fast and intuitive shopping platform. Seamless checkout and inventory management.",
    image: "/portfolio-quickcart.jpg",
    url: "https://quickcart.greatstack.in/",
    tags: ["E-Commerce", "Shopping", "Platform"],
    accent: "bg-rose-600",
  },
]

export function PortfolioCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setCurrent(p => (p + 1) % projects.length), 4000)
    return () => clearInterval(id)
  }, [paused])

  const visible = [
    projects[current],
    projects[(current + 1) % projects.length],
    projects[(current + 2) % projects.length],
  ]

  const go = (i: number) => {
    setCurrent(i)
    setPaused(true)
    setTimeout(() => setPaused(false), 5000)
  }

  return (
    <section className="bg-gray-950 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Featured Projects</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              Our Best<br />Work
            </h2>
          </div>
          <Link href="/portfolio">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors">
              View all projects <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {visible.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-44 overflow-hidden bg-gray-800">
                  {p.noImage ? (
                    <div className={`w-full h-full ${p.accent} flex items-center justify-center`}>
                      <span className="text-4xl font-black text-white">ASOH</span>
                    </div>
                  ) : (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold text-white ${p.accent} mb-2`}>
                      {p.category}
                    </span>
                    <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-blue-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">{p.description}</p>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-800">
                    <div className="flex gap-1.5">
                      {p.tags.slice(0, 2).map(t => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-gray-800 text-gray-400 border border-gray-700">
                          {t}
                        </span>
                      ))}
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-600 group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 justify-center">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-8 h-2 bg-blue-500" : "w-2 h-2 bg-gray-700 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}