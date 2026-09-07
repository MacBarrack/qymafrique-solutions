"use client"

import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"

const portfolioProjects = [
  {
    id: 1,
    title: "Otieno Justus & Co Advocates",
    category: "Legal Services",
    description: "Professional legal representation with integrity. Comprehensive counsel for individuals and businesses.",
    url: "https://justus-otieno.vercel.app/",
    tags: ["Legal", "Professional", "Web"],
    accent: "bg-blue-600",
  },
  {
    id: 2,
    title: "Twin Compass Tours",
    category: "Travel & Tourism",
    description: "Premium East African safari adventures. Explore Maasai Mara, Serengeti, and more.",
    url: "https://twinapp.vercel.app/",
    tags: ["Tourism", "Safari", "Booking"],
    accent: "bg-amber-500",
  },
  {
    id: 3,
    title: "Le Jardin de Den Daycare",
    category: "Education",
    description: "Premier childcare for ages 6 weeks to 12 years. Safe, loving, nurturing environment.",
    url: "https://le-jardin-brown.vercel.app/",
    tags: ["Education", "Childcare", "Services"],
    accent: "bg-emerald-500",
  },
  {
    id: 4,
    title: "Africa Sojourners of Hope",
    category: "Non-Profit",
    description: "Transforming vulnerable children and communities through education, health, and mentorship.",
    url: "https://www.africasojournersofhope.org/",
    tags: ["Non-Profit", "Education", "Impact"],
    accent: "bg-red-500",
    noEmbed: true,
  },
  {
    id: 5,
    title: "Evuptiki",
    category: "In-House Project",
    description: "Discover and book events. Live the moment with concerts, sports, festivals, and tech talks.",
    url: "https://evuptiki.vercel.app",
    tags: ["Events", "Ticketing", "Platform"],
    accent: "bg-violet-600",
  },
  {
    id: 6,
    title: "Nitibu Healthcare",
    category: "Healthcare",
    description: "Comprehensive healthcare platform delivering quality medical solutions across East Africa.",
    url: "https://www.nitibuhealthcare.com/",
    tags: ["Healthcare", "Medical", "Telemedicine"],
    accent: "bg-cyan-600",
  },
  {
    id: 7,
    title: "World Concepts Ventures",
    category: "Investment",
    description: "Pioneering African innovation. Driving economic growth across East and Central Africa.",
    url: "https://www.worldconcepts.co.ke/",
    tags: ["Investment", "Finance", "Ventures"],
    accent: "bg-slate-600",
  },
  {
    id: 8,
    title: "EMS-GS",
    category: "Enterprise System",
    description: "Employee management system. Streamline workforce operations, track attendance, manage payroll.",
    url: "https://ems-gs.vercel.app",
    tags: ["Enterprise", "HR", "Analytics"],
    accent: "bg-indigo-600",
  },
  {
    id: 9,
    title: "Destiny",
    category: "Web Platform",
    description: "A modern, fast web platform built to deliver a smooth end-to-end user experience.",
    url: "https://destiny-orcin.vercel.app/",
    tags: ["Platform", "Web"],
    accent: "bg-rose-600",
  },
]

function LandingPagePreview({ url, title, accent }: { url: string; title: string; accent: string }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-100">
      {/* Live scaled-down preview of the actual landing page */}
      <div
        className="absolute top-0 left-0 origin-top-left pointer-events-none"
        style={{
          width: "400%",
          height: "400%",
          transform: "scale(0.25)",
        }}
      >
        <iframe
          src={url}
          title={`${title} landing page preview`}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          className="w-full h-full border-0"
        />
      </div>
      {/* Fallback label shown underneath in case the site blocks embedding */}
      <div className={`absolute inset-0 -z-10 ${accent} flex items-center justify-center`}>
        <span className="text-white/80 text-xs font-bold px-3 text-center">{title}</span>
      </div>
    </div>
  )
}

export function PortfolioShowcase() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Portfolio</span>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
            Projects That<br />Drive Results
          </h1>
          <p className="mt-4 text-gray-500 max-w-lg text-sm sm:text-base leading-relaxed">
            Real solutions for real businesses across legal, healthcare, tourism, education, and more.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-14">
          {portfolioProjects.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 h-full flex flex-col bg-white">
                <div className="relative h-44 sm:h-48 overflow-hidden bg-gray-100">
                  {p.noEmbed ? (
                    <div className={`w-full h-full ${p.accent} flex items-center justify-center`}>
                      <div className="text-center">
                        <span className="text-4xl font-black text-white block">ASOH</span>
                        <span className="text-white/70 text-xs mt-1 block">Africa Sojourners</span>
                      </div>
                    </div>
                  ) : (
                    <LandingPagePreview url={p.url} title={p.title} accent={p.accent} />
                  )}
                </div>

                <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
                  <div>
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white ${p.accent} mb-2`}
                    >
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
                    <div className="flex gap-1.5 flex-wrap">
                      {p.tags.slice(0, 2).map(t => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="border border-gray-200 rounded-3xl p-7 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-black">Ready to build something?</h3>
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
