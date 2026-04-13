export function AboutSection() {
  const stats = [
    { label: 'Proyek Selesai', value: '5+' },
    { label: 'Teknologi Dikuasai', value: '10+' },
    { label: 'Sertifikasi', value: '10+' },
    { label: 'Pengalaman (Tahun)', value: '1+' },
  ]

  return (
    <section id="about" className="relative py-20 md:py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Tentang <span className="text-primary">Saya</span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Saya adalah seorang pengembang perangkat lunak yang berfokus pada efisiensi dan inovasi. Dengan latar belakang pendidikan Informatika, saya memiliki minat mendalam pada pengembangan Fullstack, penerapan Artificial Intelligence, dan ekosistem IoT.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Visi saya adalah menciptakan solusi digital yang tidak hanya berfungsi secara teknis, tetapi juga memberikan pengalaman pengguna yang luar biasa dan dampak positif bagi masyarakat.
            </p>

            <div className="pt-4">
              <div className="relative group inline-block">
                {/* Outer Glow (blur) */}
                <div className="absolute -inset-[2px] rounded-lg blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-500 overflow-hidden translate-z-0">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400%] aspect-square animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ff0055_0%,#8a2be2_33%,#00e5ff_66%,#ff0055_100%)]" />
                </div>

                {/* Crisp Border */}
                <div className="absolute -inset-[2px] rounded-lg overflow-hidden translate-z-0">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400%] aspect-square animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ff0055_0%,#8a2be2_33%,#00e5ff_66%,#ff0055_100%)]" />
                </div>

                <a
                  href="#contact"
                  className="relative z-10 w-full h-full block px-6 py-3 bg-slate-900 rounded-[6px] text-primary font-semibold transition-all duration-300"
                >
                  Unduh CV Saya
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group h-full"
              >
                {/* Outer Glow (blur) */}
                <div className="absolute -inset-[2px] rounded-2xl blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-500 overflow-hidden translate-z-0">
                  <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ff0055_0%,#8a2be2_33%,#00e5ff_66%,#ff0055_100%)]" />
                </div>

                {/* Crisp Border */}
                <div className="absolute -inset-[2px] rounded-2xl overflow-hidden translate-z-0">
                  <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ff0055_0%,#8a2be2_33%,#00e5ff_66%,#ff0055_100%)]" />
                </div>

                <div className="relative p-6 rounded-[14px] bg-slate-900 z-10 h-full flex flex-col justify-center">
                  <p className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-left">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

