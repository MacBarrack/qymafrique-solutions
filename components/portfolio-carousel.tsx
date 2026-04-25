"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Globe } from 'lucide-react';

const portfolioProjects = [
  {
    id: 1,
    title: "Otieno Justus & Co Advocates",
    category: "Legal Services",
    description: "Professional legal representation with integrity. Comprehensive counsel for individuals and businesses.",
    image: "/portfolio-otieno.jpg",
    url: "https://www.otienojustuscoadvocates.com/",
    tags: ["Legal", "Professional", "Web"],
    color: "from-blue-600 to-blue-700"
  },
  {
    id: 2,
    title: "Twin Compass Tours",
    category: "Travel & Tourism",
    description: "Premium East African safari adventures. Explore Maasai Mara, Serengeti, and more.",
    image: "/real-twin-compass.jpg",
    url: "https://www.twincompasstours.com/",
    tags: ["Tourism", "Safari", "Booking"],
    color: "from-amber-600 to-amber-700"
  },
  {
    id: 3,
    title: "Le Jardin de Den Daycare",
    category: "Education",
    description: "Premier childcare services for ages 6 weeks to 12 years. Safe, loving, nurturing environment.",
    image: "/real-daycare.jpg",
    url: "https://www.lejardindedendaycare.com/",
    tags: ["Education", "Childcare", "Services"],
    color: "from-green-600 to-green-700"
  },
  {
    id: 4,
    title: "Africa Sojourners of Hope",
    category: "Non-Profit",
    description: "Transforming vulnerable children and communities through education, health, and mentorship.",
    image: "/real-asoh.jpg",
    url: "https://www.africasojournersofhope.org/",
    tags: ["Non-Profit", "Education", "Impact"],
    color: "from-red-600 to-red-700"
  },
  {
    id: 5,
    title: "Evuptiki",
    category: "In-House Project",
    description: "Discover and book events. Live the moment with concerts, sports, festivals, and tech talks.",
    image: "/portfolio-evuptiki.jpg",
    url: "https://evuptiki.vercel.app",
    tags: ["Events", "Ticketing", "Platform"],
    color: "from-purple-600 to-purple-700"
  },
  {
    id: 6,
    title: "Nitibu Healthcare",
    category: "Healthcare",
    description: "Comprehensive healthcare platform delivering quality medical solutions across East Africa.",
    image: "/portfolio-nitibu.jpg",
    url: "https://www.nitibuhealthcare.com/",
    tags: ["Healthcare", "Medical", "Telemedicine"],
    color: "from-cyan-600 to-cyan-700"
  },
  {
    id: 7,
    title: "World Concepts Ventures",
    category: "Investment",
    description: "Pioneering African innovation. Driving economic growth across East and Central Africa.",
    image: "/portfolio-worldconcepts.jpg",
    url: "https://www.worldconcepts.co.ke/",
    tags: ["Investment", "Finance", "Ventures"],
    color: "from-slate-600 to-slate-700"
  },
  {
    id: 8,
    title: "EMS-GS",
    category: "Enterprise System",
    description: "Employee management system. Streamline workforce operations, track attendance, manage payroll.",
    image: "/portfolio-ems.jpg",
    url: "https://ems-gs.vercel.app",
    tags: ["Enterprise", "HR", "Analytics"],
    color: "from-indigo-600 to-indigo-700"
  },
  {
    id: 9,
    title: "QuickCart",
    category: "E-Commerce",
    description: "Fast and intuitive shopping platform. Seamless checkout and inventory management.",
    image: "/portfolio-quickcart.jpg",
    url: "https://quickcart.greatstack.in/",
    tags: ["E-Commerce", "Shopping", "Platform"],
    color: "from-rose-600 to-rose-700"
  }
];

export function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioProjects.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 4000);
  };

  const visibleProjects = [
    portfolioProjects[currentIndex],
    portfolioProjects[(currentIndex + 1) % portfolioProjects.length],
    portfolioProjects[(currentIndex + 2) % portfolioProjects.length],
  ];

  return (
    <section className="relative py-12 md:py-16 bg-white overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="max-w-2xl mb-8 sm:mb-12 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full border border-sky-300 mb-3">
            <span className="w-2 h-2 bg-blue-900 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-blue-900">Featured Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Best Work
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Discover the projects that showcase our expertise and creativity
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {visibleProjects.map((project, idx) => (
              <Link key={project.id} href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="group h-full cursor-pointer transform transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-full bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-102 origin-center flex flex-col">
                    
                    {/* Project Image */}
                    <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                      {project.id === 4 ? (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-400 to-red-600">
                          <div className="text-center">
                            <h4 className="text-3xl font-bold text-white">ASOH</h4>
                            <p className="text-white/80 text-xs mt-1">Africa Sojourners</p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                        </>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-3 xs:p-4 relative flex flex-col flex-grow">
                      {/* Category Badge */}
                      <div className={`inline-block px-2 py-0.5 rounded-full text-[10px] xs:text-xs font-semibold mb-2 bg-gradient-to-r ${project.color} text-white w-fit`}>
                        {project.category}
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-xs xs:text-sm text-gray-900 mb-1 group-hover:text-blue-900 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-[10px] xs:text-xs text-gray-600 mb-3 flex-grow line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 py-0.5 rounded text-[9px] xs:text-[10px] bg-sky-50 text-blue-900 border border-sky-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer Link */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-200 mt-auto">
                        <div className="flex items-center gap-1.5 text-blue-900">
                          <Globe className="w-3 h-3" />
                          <span className="text-[10px] xs:text-xs font-semibold">Visit</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-blue-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2">
            {portfolioProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-blue-900 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              {isAutoPlay ? 'Auto-playing...' : 'Manual mode'}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <Link href="/portfolio">
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-900 to-sky-600 rounded-lg font-semibold text-xs sm:text-sm text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
              View All Projects
              <ExternalLink className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
