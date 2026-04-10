'use client'

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#020617]">
      {/* Background Moving Gradient Blobs */}
      <div className="absolute inset-0">
        {/* Blue Blob */}
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] animate-blob-1"></div>
        
        {/* Red Blob */}
        <div className="absolute top-[20%] right-[-5%] w-[700px] h-[700px] bg-red-500/15 rounded-full blur-[100px] animate-blob-2"></div>
        
        {/* Yellow Blob */}
        <div className="absolute bottom-[-10%] left-[20%] w-[900px] h-[900px] bg-yellow-500/15 rounded-full blur-[130px] animate-blob-3"></div>
        
        {/* White Highlight Blob */}
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] animate-pulse-glow"></div>

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 backdrop-blur-[100px] bg-background/60"></div>
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Abstract lines - made taller for global coverage */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-12"></div>
            <div className="absolute top-2/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -rotate-12"></div>
            <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-6"></div>
        </div>
      </div>
    </div>
  )
}
