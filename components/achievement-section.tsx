"use client"
import { GraduationCap, Award, BookOpen, Star, Download, ExternalLink, Eye, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const achievements = [
  {
    id: 1,
    year: '2023 - 2027',
    title: 'Universitas Bina Sarana Informatika',
    organization: 'S1 Fakultas Teknik & Informatika',
    description: 'Sedang menempuh pendidikan sarjana dengan fokus pada pengembangan perangkat lunak dan sistem cerdas.',
    icon: <GraduationCap className="w-6 h-6" />,
    certificate: null,
    skills: ['Computer Science', 'Software Engineering'],
    side: 'left'
  },
  {
    id: 2,
    year: '2025',
    title: 'Profesional Programmer With Golang',
    organization: 'Programmer Zaman Now',
    description: 'Penyelesaian program komprehensif yang mencakup fundamental bahasa Go hingga pengembangan aplikasi backend yang scalable.',
    icon: <Award className="w-6 h-6" />,
    certificate: '/certificate/Profesional Programmer With Golang.pdf',
    skills: ['Golang', 'Concurrency', 'Goroutines', 'Web API'],
    side: 'right'
  },
  {
    id: 3,
    year: '2024',
    title: 'CCNA: Introduction to Networks',
    organization: 'Cisco Networking Academy',
    description: 'Pelatihan mendalam tentang arsitektur, fungsi, dan komponen jaringan komputer serta protokol TCP/IP.',
    icon: <Award className="w-6 h-6" />,
    certificate: '/certificate/CCNA Introduction to Networks.pdf',
    skills: ['Networking', 'Cisco', 'TCP/IP', 'Ethernet'],
    side: 'left'
  },
  {
    id: 4,
    year: '2024',
    title: 'MikroTik Certified Network Associate',
    organization: 'MikroTik Training Center',
    description: 'Sertifikasi teknis dalam mengonfigurasi dan mengelola perangkat MikroTik untuk solusi jaringan profesional.',
    icon: <Award className="w-6 h-6" />,
    certificate: '/certificate/Mikrotik MTCNA.pdf',
    skills: ['MikroTik', 'RouterOS', 'Firewall', 'Routing'],
    side: 'right'
  },
  {
    id: 5,
    year: '2023',
    title: 'PCAP: Programming Essentials in Python',
    organization: 'Python Institute',
    description: 'Validasi kemampuan pemrograman Python tingkat lanjut, mencakup penanganan eksepsi dan pemrograman berorientasi objek.',
    icon: <Award className="w-6 h-6" />,
    certificate: '/certificate/PCAP - Programming Essentials in Python.pdf',
    skills: ['Python', 'OOP', 'Algorithms', 'Data Structures'],
    side: 'left'
  },
  {
    id: 6,
    year: '2024',
    title: 'Workshop Pemrograman Aplikasi AI',
    organization: 'Universitas Bina Sarana Informatika',
    description: 'Pengembangan aplikasi modern dengan integrasi model kecerdasan buatan untuk meningkatkan fungsionalitas sistem.',
    icon: <Award className="w-6 h-6" />,
    certificate: '/certificate/Workshop Programming Untuk Pengembangan Aplikasi AI.pdf',
    skills: ['AI Integration', 'Machine Learning', 'API Development'],
    side: 'right'
  },
  {
    id: 7,
    year: '2024',
    title: 'Transformasi Digital: IoT & AI',
    organization: 'Industrial Summit 2024',
    description: 'Eksplorasi ekosistem Internet of Things dan AI sebagai pilar utama transformasi digital di era industri 4.0.',
    icon: <Award className="w-6 h-6" />,
    certificate: '/certificate/Transformasi Digital  Integrasi IoT & Kecerdasan Buatan Untuk Solusi Masa Depan.pdf',
    skills: ['IoT', 'Artificial Intelligence', 'Industrial 4.0'],
    side: 'left'
  },
  {
    id: 8,
    year: '2024',
    title: 'Entrepreneurship for a Better Future',
    organization: 'Global Innovation Hub',
    description: 'Pelatihan kepemimpinan dan strategi inovasi bisnis untuk menciptakan solusi yang berdampak positif bagi masyarakat.',
    icon: <Award className="w-6 h-6" />,
    certificate: '/certificate/Entrepreneurship For a Better Future.pdf',
    skills: ['Entrepreneurship', 'Business Strategy', 'Innovation'],
    side: 'right'
  }
]

export function AchievementSection() {
  const [viewingCert, setViewingCert] = useState<string | null>(null)

  return (
    <section id="achievement" className="relative py-20 md:py-32 px-6 overflow-hidden">
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
                      {item.organization}
                    </p>
                    <p className="text-muted-foreground leading-relaxed font-medium mb-6">
                      {item.description}
                    </p>

                    {/* Skills Badges */}
                    <div className={`flex flex-wrap gap-2 mb-6 ${item.side === 'left' ? 'justify-end' : 'justify-start'}`}>
                      {item.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300 rounded-full border border-slate-700">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Certificate Preview Placeholder */}
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 border border-slate-700 bg-slate-800/50 group-hover:border-primary/30 transition-colors">
                      <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                        <Award className="w-12 h-12 opacity-20" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="w-12 h-1 bg-primary/30 rounded-full"></div>
                        <div className="space-y-2">
                          <div className="w-3/4 h-2 bg-white/10 rounded-full"></div>
                          <div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className={`flex items-center gap-3 ${item.side === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
                      {item.certificate && (
                        <>
                          <button
                            onClick={() => setViewingCert(item.certificate)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-white text-sm font-bold rounded-full hover:bg-slate-700 hover:scale-105 transition-all border border-slate-700"
                          >
                            <Eye className="w-4 h-4" />
                            LIHAT
                          </button>
                          <a
                            href={item.certificate}
                            download
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-full hover:bg-indigo-500 hover:scale-105 transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                          >
                            <Download className="w-4 h-4" />
                            PDF
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Node */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    {/* Ping Animation Base */}
                    <div className="absolute w-8 h-8 rounded-full bg-primary/60 animate-ping opacity-75"></div>
                    {/* Pulse Glow Layer */}
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-md animate-pulse"></div>
                    {/* Main Node */}
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
              <div className="absolute left-0 top-4 -translate-x-1/2 flex items-center justify-center">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  {/* Ping Animation Base */}
                  <div className="absolute w-8 h-8 rounded-full bg-primary/60 animate-ping opacity-75"></div>
                  {/* Pulse Glow Layer */}
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-md animate-pulse"></div>
                  {/* Main Node */}
                  <div className="relative w-8 h-8 bg-slate-950 border-2 border-primary rounded-full flex items-center justify-center text-primary shadow-[0_0_10px_rgba(34,211,238,0.5)] z-10 [&>svg]:w-4 [&>svg]:h-4">
                    {item.icon}
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm flex flex-col items-start">
                <span className="text-primary font-bold text-xs tracking-widest mb-1 block uppercase">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-cyan-400/80 text-xs font-semibold mb-3">
                  {item.organization}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.skills.map(skill => (
                    <span key={skill} className="px-2 py-0.5 text-[8px] font-bold uppercase bg-slate-800/80 text-slate-400 rounded-md border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium mb-6">
                  {item.description}
                </p>

                {/* Buttons Mobile */}
                <div className="flex items-center gap-2">
                  {item.certificate && (
                    <>
                      <button
                        onClick={() => setViewingCert(item.certificate)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-white text-xs font-bold rounded-full border border-slate-700"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        LIHAT
                      </button>
                      <a
                        href={item.certificate}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-full"
                      >
                        <Download className="w-3.5 h-3.5" />
                        PDF
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL VIEW PDF */}
      {viewingCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-6xl h-full bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-800 bg-slate-900/50">
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold text-white">Pratinjau Sertifikat</h3>
                <p className="text-xs text-muted-foreground truncate max-w-[200px] md:max-w-md">{viewingCert.split('/').pop()}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={viewingCert}
                  download
                  className="p-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full transition-all"
                  title="Unduh"
                >
                  <Download className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setViewingCert(null)}
                  className="p-2.5 hover:bg-slate-800 rounded-full transition-colors text-muted-foreground hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-slate-950 overflow-hidden relative">
              <iframe
                src={`${viewingCert}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full border-none"
                title="Sertifikat PDF"
              />
              {/* Overlay for aesthetic */}
              <div className="absolute inset-0 pointer-events-none border-t border-slate-800"></div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


