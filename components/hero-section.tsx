import { Linkedin, Github, Instagram, Youtube, MessageCircle, MoreHorizontal } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/audyhdyt' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Audyhidayat31' },
    { icon: <MessageCircle className="w-5 h-5" />, href: 'https://wa.me/6281297472004' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/audyyhdytz/' },
    { icon: <MoreHorizontal className="w-5 h-5" />, href: '#' },
  ]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      <div className="relative z-10 max-w-4xl w-full text-center space-y-10">
        {/* Profile Image with Glow */}
        <div className="flex justify-center">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl scale-110 animate-pulse-glow"></div>
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-primary overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              <Image
                src="/profile.png"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Halo, Saya <span className="text-primary drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Audy Abdillah Hidayat.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
            Mahasiswa Informatika tingkat akhir di Universitas Bina Sarana Informatika.
            Berpengalaman dalam pengembangan Fullstack, AI, dan sistem IoT.
            Siap memberikan solusi teknologi yang inovatif.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 transition-transform duration-300"
          >
            LIHAT PORTOFOLIO
          </a>
          <a
            href="mailto:audyhidayat31@gmail.com"
            className="px-8 py-3 border border-primary/50 text-primary font-semibold rounded-full hover:bg-primary/10 transition-colors duration-300"
          >
            HUBUNGI SAYA
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 pt-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/50 border border-slate-800 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

