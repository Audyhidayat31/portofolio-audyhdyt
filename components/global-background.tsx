'use client'

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#020617]">
      {/* Background Soft Gradients (Keeps the minimalist depth) */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* SVG Geometric Neon Grid */}
      <div className="absolute inset-0 z-10">
        <svg 
          className="w-full h-full opacity-60" 
          viewBox="0 0 1000 1000" 
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="neon" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur1" />
              <feGaussianBlur stdDeviation="6" result="blur2" />
              <feGaussianBlur stdDeviation="12" result="blur3" />
              <feMerge>
                <feMergeNode in="blur3" />
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g stroke="rgba(14, 165, 233, 0.05)" strokeWidth="1" vectorEffect="non-scaling-stroke">
            {/* Base static grid lines */}
            <path d="M 200 0 L 200 1000 M 800 0 L 800 1000 M 0 250 L 1000 250 M 0 750 L 1000 750" />
            <path d="M 0 500 L 1000 500 M 500 0 L 500 1000" />
            {/* Base static perspective diagonals */}
            <path d="M 0 50 L 200 250 M 1000 50 L 800 250 M 0 950 L 200 750 M 1000 950 L 800 750" />
          </g>

          {/* Animated drawing lines */}
          <g fill="none" stroke="#0ea5e9" strokeOpacity="0.3" strokeWidth="1" vectorEffect="non-scaling-stroke">
            <path className="animate-draw-1" d="M 200 0 L 200 1000" />
            <path className="animate-draw-2" d="M 800 1000 L 800 0" />
            <path className="animate-draw-3" d="M 0 250 L 1000 250" />
            <path className="animate-draw-4" d="M 1000 750 L 0 750" />
            <path className="animate-draw-1" d="M 0 50 L 200 250 L 800 250 L 1000 50" />
            <path className="animate-draw-2" d="M 1000 950 L 800 750 L 200 750 L 0 950" />
            <path className="animate-draw-3" d="M 200 250 L 200 750 M 800 250 L 800 750" />
          </g>

          {/* Glowing neon moving particles/light lines */}
          <g fill="none" stroke="#38bdf8" strokeWidth="1.5" filter="url(#neon)" vectorEffect="non-scaling-stroke">
             <path className="animate-light-track" d="M 200 0 L 200 1000" />
             <path className="animate-light-track-reverse" d="M 800 0 L 800 1000" />
             <path className="animate-light-track" d="M 0 250 L 1000 250" />
             <path className="animate-light-track-reverse" d="M 0 750 L 1000 750" />
             <path className="animate-light-track" d="M 0 50 L 200 250 L 800 250 L 1000 50" />
             <path className="animate-light-track-reverse" d="M 0 950 L 200 750 L 800 750 L 1000 950" />
             <path className="animate-light-track" d="M 200 250 L 200 750" />
             <path className="animate-light-track-reverse" d="M 800 250 L 800 750" />
          </g>

        </svg>
      </div>
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-transparent to-[#020617]/80"></div>
    </div>
  )
}
