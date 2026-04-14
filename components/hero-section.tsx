import { Linkedin, Github, Instagram, Youtube, MessageCircle, MoreHorizontal } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/audy-abdillah-hidayat-570942402/' },
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/Audyhidayat31' },
    { icon: <MessageCircle className="w-5 h-5" />, href: 'https://wa.me/081297472004' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/audyyhdytz/' },
  ]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      <div className="relative z-10 max-w-4xl w-full text-center space-y-10">
        {/* Profile Image with Glow */}
        <div className="flex justify-center">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl scale-110 animate-pulse-glow"></div>
            <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-primary overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              <Image
                src="/diwayway.jpeg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Halo, Saya <span className="text-primary drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Audy Abdillah Hidayat.</span>
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
            Mahasiswa Informatika tingkat akhir di Universitas Bina Sarana Informatika.
            Berpengalaman dalam pengembangan Fullstack, AI, dan sistem IoT.
            Siap memberikan solusi teknologi yang inovatif.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground text-sm font-bold rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 transition-transform duration-300 text-center"
          >
            LIHAT PORTOFOLIO
          </a>
          <a
            href="mailto:audyhidayat31@gmail.com"
            className="w-full sm:w-auto px-8 py-3 border border-primary/50 text-primary text-sm font-bold rounded-full hover:bg-primary/10 transition-colors duration-300 text-center"
          >
            HUBUNGI SAYA
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center items-center gap-3 pt-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-slate-900/50 border border-slate-800 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {index === 0 ? social.icon : social.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

