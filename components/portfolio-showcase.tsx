"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"

const portfolioProjects = [
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
    description: "Premium East African safari adventures. Explore Maasai Mara, Serengeti, and more.",
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
    accent: "bg-slate-600",
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

export function PortfolioShowcase() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-14">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Portfolio</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-black text-black leading-tight tracking-tight">
            Projects That<br />Drive Results
          </h1>
          <p className="mt-4 text-gray-500 max-w-lg text-base leading-relaxed">
            Real solutions for real businesses across legal, healthcare, tourism, education, and more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {portfolioProjects.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col bg-white">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  {p.noImage ? (
                    <div className={`w-full h-full ${p.accent} flex items-center justify-center`}>
                      <div className="text-center">
                        <span className="text-4xl font-black text-white block">ASOH</span>
                        <span className="text-white/70 text-xs mt-1 block">Africa Sojourners</span>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white ${p.accent} mb-2`}>
                      {p.category}
                    </span>
                    <h3 className="text-sm font-bold text-black line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex gap-1.5">
                      {p.tags.slice(0, 2).map(t => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="border border-gray-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-black">Ready to build something?</h3>
            <p className="text-gray-500 mt-1 text-sm">Let's turn your idea into a product people love.</p>
          </div>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-900 text-white text-sm font-bold rounded-2xl transition-colors whitespace-nowrap">
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}