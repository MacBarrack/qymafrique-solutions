"use client"

import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Sparkles, Zap, Rocket } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const projects = [
    {
      name: "Otieno Justus Advocates",
      url: "https://www.otienojustuscoadvocates.com/",
      type: "Legal Services"
    },
    {
      name: "Twin Compass Tours",
      url: "https://www.twincompasstours.com/",
      type: "Travel & Tourism"
    },
    {
      name: "Le Jardin de Den Daycare",
      url: "https://www.lejardindedendaycare.com/",
      type: "Education"
    },
    {
      name: "Africa Sojourners of Hope",
      url: "https://www.africasojournersofhope.org/",
      type: "Non-Profit"
    },
    {
      name: "Evuptiki",
      url: "https://evuptiki.vercel.app",
      type: "In-House Project"
    },
    {
      name: "Nitibu Healthcare",
      url: "https://www.nitibuhealthcare.com/",
      type: "Healthcare"
    },
    {
      name: "World Concepts",
      url: "https://www.worldconcepts.co.ke/",
      type: "Investment"
    },
    {
      name: "EMS-GS",
      url: "https://ems-gs.vercel.app",
      type: "Enterprise System"
    },
    {
      name: "QuickCart",
      url: "https://quickcart.greatstack.in/",
      type: "E-Commerce"
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, projects.length]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
    setIsAutoPlay(false);
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex items-center justify-center pt-20 md:pt-0">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/30 backdrop-blur-xl w-fit mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
              <span className="text-sm font-semibold text-orange-300">
                See Our Latest Work
              </span>
              <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping" />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                <span className="block">Digital Solutions</span>
                <span className="block bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                  That Transform Business
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                Crafting web apps, mobile solutions, and digital experiences that drive growth. Trusted by 50+ clients across Africa and beyond.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Link href="/quote">
                <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-900 to-sky-600 rounded-lg font-semibold text-white shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              
              <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-lg font-semibold text-white border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                View Portfolio
              </button>
            </div>


          </div>

          {/* Right - Interactive Carousel */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative group" onMouseEnter={() => setIsAutoPlay(false)} onMouseLeave={() => setIsAutoPlay(true)}>
              {/* Main Carousel Container */}
              <div className="relative bg-gradient-to-br from-slate-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-orange-500/20 p-1 shadow-2xl overflow-hidden">
                <div className="relative bg-gradient-to-br from-slate-900 to-black rounded-2xl overflow-hidden aspect-video">
                  {/* Carousel Slides */}
                  <div className="relative w-full h-full">
                    {projects.map((project, index) => (
                      <a
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 transition-all duration-1000 ease-in-out"
                        style={{
                          opacity: index === currentSlide ? 1 : 0,
                          visibility: index === currentSlide ? 'visible' : 'hidden',
                        }}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-black flex items-center justify-center relative overflow-hidden cursor-pointer">
                          {/* Animated Background Pattern */}
                          <div className="absolute inset-0 opacity-30">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,107,53,0.1)_25%,rgba(255,107,53,0.1)_50%,transparent_50%,transparent_75%,rgba(255,107,53,0.1)_75%,rgba(255,107,53,0.1))] bg-[length:40px_40px] animate-pulse" />
                          </div>

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          
                          {/* Content */}
                          <div className="relative z-10 text-center space-y-4 px-6">
                            <div className="inline-block px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/50 backdrop-blur-sm animate-fade-in">
                              <span className="text-xs sm:text-sm font-semibold text-orange-300 uppercase tracking-wide">{project.type}</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{project.name}</h3>
                            <div className="flex items-center justify-center gap-2 text-orange-400 text-sm font-medium group-hover:gap-3 transition-all">
                              Visit Site <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrevious}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-orange-500/70 hover:bg-orange-600 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 hover:scale-110 transform"
                    aria-label="Previous slide"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-orange-500/70 hover:bg-orange-600 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 hover:scale-110 transform"
                    aria-label="Next slide"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex gap-2 mt-6 justify-center flex-wrap">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleIndicatorClick(index)}
                    className={`transition-all duration-300 rounded-full cursor-pointer hover:scale-110 transform ${
                      index === currentSlide
                        ? 'w-8 h-2.5 bg-orange-500 shadow-lg shadow-blue-900/20'
                        : 'w-2.5 h-2.5 bg-slate-600 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Auto-play Status */}
              <div className="mt-4 text-center text-xs text-slate-400">
                <span className="inline-block animate-pulse">●</span> Auto-rotating • Click to navigate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
