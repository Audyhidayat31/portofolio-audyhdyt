'use client'

import { GraduationCap, Award, BookOpen, Star, Download, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const achievements = [
  {
    id: 1,
    year: '2023 - 2027',
    title: 'Universitas Bina Sarana Informatika',
    subtitle: 'S1 Fakultas Teknik & Informatika',
    description: 'Sedang menempuh pendidikan sarjana dengan fokus pada pengembangan perangkat lunak dan sistem cerdas.',
    icon: <GraduationCap className="w-6 h-6" />,
    image: '/cert-placeholder.png', 
    side: 'left',
    downloadUrl: '#'
  },
  {
    id: 2,
    year: '2023',
    title: 'PCAP: Programming Essentials in Python',
    subtitle: 'Python Institute',
    description: 'Meraih sertifikasi profesional bahasa pemrograman Python, mencakup dasar-dasar hingga konsep OOP.',
    icon: <Award className="w-6 h-6" />,
    image: '/cert-placeholder.png',
    side: 'right',
    downloadUrl: '#'
  },
  {
    id: 3,
    year: '2024',
    title: 'AWS Certified Cloud Practitioner',
    subtitle: 'Amazon Web Services',
    description: 'Pemahaman mendalam tentang infrastruktur cloud AWS, keamanan, dan layanan inti cloud.',
    icon: <Award className="w-6 h-6" />,
    image: '/cert-placeholder.png',
    side: 'left',
    downloadUrl: '#'
  },
  {
    id: 4,
    year: '2024',
    title: 'Fullstack Web Development Bootcamp',
    subtitle: 'Digital Talent Scholarship',
    description: 'Penyelesaian program intensif dalam pengembangan aplikasi web modern menggunakan React dan Node.js.',
    icon: <BookOpen className="w-6 h-6" />,
    image: '/cert-placeholder.png',
    side: 'right',
    downloadUrl: '#'
  }
]

export function AchievementSection() {
  return (
    <section id="achievement" className="relative py-32 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              Sertifikat & Achievement
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            Milestone perjalanan akademik dan pencapaian profesional saya.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full"></div>
        </div>

        {/* Timeline Desktop */}
        <div className="hidden md:block relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary to-primary/50 -translate-x-1/2 shadow-[0_0_15px_rgba(34,211,238,0.3)]"></div>

          <div className="space-y-24">
            {achievements.map((item) => (
              <div key={item.id} className={`flex items-center justify-center relative w-full ${item.side === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Content Side */}
                <div className="w-1/2 px-12">
                  <div className={`p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 group relative shadow-2xl flex flex-col ${item.side === 'left' ? 'items-end text-right' : 'items-start text-left'}`}>
                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-900 border border-slate-800 rotate-45 z-0 ${item.side === 'left' ? '-right-2' : '-left-2'}`}></div>

                    <span className="text-primary font-bold text-sm tracking-widest mb-2 block uppercase">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-cyan-400/80 text-sm font-semibold mb-4">
                      {item.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed font-medium mb-6">
                      {item.description}
                    </p>

                    {/* Certificate Preview */}
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 border border-slate-700 bg-slate-800/50">
                      <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                        <Award className="w-12 h-12 opacity-20" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
                      {/* Fake certificate data if no image */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                         <div className="w-12 h-1 bg-primary/30 rounded-full"></div>
                         <div className="space-y-2">
                           <div className="w-3/4 h-2 bg-white/10 rounded-full"></div>
                           <div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
                         </div>
                      </div>
                    </div>

                    {/* Download Button */}
                    <a 
                      href={item.downloadUrl}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-full hover:bg-indigo-500 hover:scale-105 transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                    >
                      <Download className="w-4 h-4" />
                      UNDUH PDF
                    </a>
                  </div>
                </div>

                {/* Node */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse"></div>
                    <div className="relative w-8 h-8 bg-slate-950 border-2 border-primary rounded-full flex items-center justify-center text-primary shadow-[0_0_15px_rgba(34,211,238,0.5)] z-10">
                      {item.icon}
                    </div>
                  </div>
                </div>

                {/* Empty Side */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-12 relative">
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-primary/30"></div>

          {achievements.map((item) => (
            <div key={item.id} className="relative pl-12">
              {/* Node Mobile */}
              <div className="absolute left-0 top-6 -translate-x-1/2 w-8 h-8 bg-slate-950 border-2 border-primary rounded-full flex items-center justify-center text-primary shadow-[0_0_10px_rgba(34,211,238,0.5)] z-10">
                <Star className="w-4 h-4" />
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm flex flex-col items-start">
                <span className="text-primary font-bold text-xs tracking-widest mb-1 block uppercase">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-cyan-400/80 text-xs font-semibold mb-3">
                  {item.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium mb-6">
                  {item.description}
                </p>

                {/* Certificate Preview Mobile */}
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-4 border border-slate-700 bg-slate-800/50">
                   <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
                </div>

                <a 
                  href={item.downloadUrl}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white text-xs font-bold rounded-full"
                >
                  <Download className="w-3.5 h-3.5" />
                  UNDUH PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

