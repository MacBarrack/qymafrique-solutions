"use client"

import { useState, useEffect } from 'react';
import { ArrowRight, Zap, Rocket, Code, Palette, Zap as ZapIcon } from 'lucide-react';
import Link from 'next/link';

const phrases = [
  "Digital Excellence",
  "Websites That Convert",
  "Solutions That Scale",
  "Brands That Stand Out",
  "Digital Products",
  "Results That Matter"
];

export function HeroNew() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3500);
    return () => clearInterval(phraseInterval);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden pt-0 pb-8 sm:pb-12 -mt-24 sm:-mt-20">
      {/* Animated gradient background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-sky-100 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDuration: '6s' }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-sky-200 to-blue-100 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-5xl pt-24 sm:pt-20">
        {/* Hero Card Container */}
        <div className={`relative backdrop-blur-xl bg-white/70 border border-blue-200/50 rounded-3xl overflow-hidden shadow-xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Decorative SVG Corners - Smaller */}
          <div className="absolute top-0 left-0 opacity-10 pointer-events-none hidden sm:block">
            <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0Q50 50 100 25Q150 0 200 0" stroke="url(#grad1)" strokeWidth="2" />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e40af" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none hidden sm:block">
            <svg width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M200 200Q150 150 100 175Q50 200 0 200" stroke="url(#grad2)" strokeWidth="2" />
              <defs>
                <linearGradient id="grad2" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#1e40af" />
                  <stop offset="100%" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative p-4 xs:p-6 sm:p-8 md:p-10">
            {/* Content Padding Adjustment */}
            <div className="flex flex-col items-center justify-center gap-8 sm:gap-10">
              
              {/* Badge */}
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 border border-blue-300/60 text-xs sm:text-sm font-semibold text-blue-900 backdrop-blur-sm">
                  <Rocket className="w-3.5 h-3.5" />
                  Digital Solutions
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="leading-tight text-center">
                <span className="block text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
                  We Build
                </span>
                <div className="relative h-14 xs:h-20 sm:h-28 lg:h-32 mt-3 sm:mt-4 flex items-center justify-center">
                  {phrases.map((phrase, index) => (
                    <span
                      key={index}
                      className={`absolute whitespace-nowrap transition-all duration-700 ease-in-out ${
                        index === currentPhrase
                          ? 'opacity-100 translate-y-0'
                          : index < currentPhrase
                          ? 'opacity-0 -translate-y-4'
                          : 'opacity-0 translate-y-4'
                      }`}
                    >
                      <span className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                        {phrase}
                      </span>
                    </span>
                  ))}
                </div>
              </h1>

              {/* Subtitle */}
              <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-2xl text-center leading-relaxed">
                Enterprise-grade digital solutions engineered for scalability, performance, and growth.
              </p>

              {/* CTA Button - Only Start Project */}
              <Link href="/quote">
                <button className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-xl font-semibold text-sm sm:text-base text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform relative z-10" />
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>
              </Link>
            </div>

            {/* Floating Feature Icons */}
            <div className="absolute top-6 right-6 opacity-0 hover:opacity-100 transition-opacity p-2 bg-white/80 rounded-lg backdrop-blur-sm border border-blue-200/50 group hidden sm:block">
              <Code className="w-4 h-4 text-blue-600" />
            </div>
            <div className="absolute bottom-6 left-6 opacity-0 hover:opacity-100 transition-opacity p-2 bg-white/80 rounded-lg backdrop-blur-sm border border-blue-200/50 group hidden sm:block">
              <Palette className="w-4 h-4 text-blue-600" />
            </div>
          </div>

          {/* Stats Section - Below Card */}
          <div className={`border-t border-blue-200/30 px-6 sm:px-10 md:px-12 py-6 sm:py-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {[
              { number: '50+', label: 'Check Our Portfolio' },
              { number: '30+', label: 'Clients Globally' },
              { number: '99%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-blue-900">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
