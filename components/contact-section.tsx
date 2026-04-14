'use client'

import { Mail, Linkedin, Github, Instagram, MessageCircle } from 'lucide-react'

export function ContactSection() {
  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:audyhidayat31@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/audy-abdillah-hidayat-570942402/' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/Audyhidayat31' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/audyyhdytz/' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/6281297472004' },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[150px] opacity-30"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="group relative rounded-3xl">
          {/* Outer Glow (blur) */}
          <div className="absolute -inset-[2px] rounded-3xl blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-500 overflow-hidden translate-z-0">
            <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ff0055_0%,#8a2be2_33%,#00e5ff_66%,#ff0055_100%)]" />
          </div>

          {/* Crisp Border */}
          <div className="absolute -inset-[2px] rounded-3xl overflow-hidden translate-z-0">
            <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ff0055_0%,#8a2be2_33%,#00e5ff_66%,#ff0055_100%)]" />
          </div>

          <div className="relative z-10 rounded-[22px] bg-slate-900 p-8 md:p-20 text-center space-y-12 backdrop-blur-sm">
            {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Ayo Mulai <span className="text-primary">Berkolaborasi</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto">
              Saya selalu terbuka untuk proyek menarik, peluang riset, atau sekadar berdiskusi tentang teknologi. Jangan ragu untuk menghubungi saya!
            </p>
          </div>

          {/* Email CTA Button */}
          <div className="pt-4">
            <a
              href="mailto:audyhidayat31@gmail.com"
              className="px-10 py-5 bg-primary text-primary-foreground font-bold rounded-full shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:scale-105 transition-all duration-300 inline-block text-lg"
            >
              Kirim Email Sekarang
            </a>
          </div>

          {/* Social Links Grid */}
          <div className="pt-8">
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-8">
              Temukan Saya Di
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-4 rounded-xl bg-slate-800/50 text-muted-foreground hover:text-primary hover:bg-slate-800 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              })}
            </div>
          </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid sm:grid-cols-3 gap-8 mt-16 px-4 text-center">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">
              Lokasi
            </p>
            <p className="text-white font-semibold">Jakarta, Indonesia</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">
              Status
            </p>
            <p className="text-white font-semibold">Tersedia untuk Proyek</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">
              Respon
            </p>
            <p className="text-white font-semibold">&lt; 24 Jam</p>
          </div>
        </div>
      </div>
    </section>
  )
}

