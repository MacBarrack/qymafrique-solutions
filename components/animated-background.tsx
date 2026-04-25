"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />

      {/* Floating SVG shapes */}
      <svg className="absolute top-20 left-10 w-16 h-16 text-primary/10 animate-float" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="currentColor" />
      </svg>

      <svg className="absolute top-40 right-20 w-20 h-20 text-accent/10 animate-float-delayed" viewBox="0 0 100 100">
        <rect x="20" y="20" width="60" height="60" fill="currentColor" rx="12" />
      </svg>

      <svg className="absolute bottom-40 left-1/3 w-24 h-24 text-primary/10 animate-spin-slow" viewBox="0 0 100 100">
        <polygon points="50,10 90,90 10,90" fill="currentColor" />
      </svg>

      <svg className="absolute top-1/2 right-10 w-12 h-12 text-accent/10 animate-bounce-slow" viewBox="0 0 100 100">
        <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="currentColor" />
      </svg>

      <svg className="absolute bottom-20 right-1/3 w-16 h-16 text-primary/10 animate-float" viewBox="0 0 100 100">
        <path d="M50 10 L61 35 L90 35 L67 52 L78 77 L50 60 L22 77 L33 52 L10 35 L39 35 Z" fill="currentColor" />
      </svg>
    </div>
  )
}
