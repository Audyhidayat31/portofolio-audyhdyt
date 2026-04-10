export function AboutSection() {
  const stats = [
    { label: 'Proyek Selesai', value: '5+' },
    { label: 'Teknologi Dikuasai', value: '15+' },
    { label: 'Sertifikasi', value: '10+' },
    { label: 'Pengalaman (Tahun)', value: '1+' },
  ]

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
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
              <a
                href="#contact"
                className="px-6 py-3 bg-slate-900 border border-slate-800 text-primary font-semibold rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                Unduh CV Saya
              </a>
            </div>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group"
              >
                <p className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

