'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Inventaris Barang',
    category: 'Fullstack Web',
    description: 'Aplikasi manajemen inventaris barang dengan fitur pencatatan stok, laporan, dan manajemen pengguna.',
    image: '/Inventaris Barang.jpeg',
    link: 'https://inventarisbarang-project.vercel.app/',
  },
  {
    id: 2,
    title: 'AKA Laundry',
    category: 'Fullstack Web',
    description: 'Sistem operasional AKA Laundry dengan fitur cek resi, informasi layanan, dan portal transaksi khusus staf.',
    image: '/AKA%20Laundry.jpeg',
    link: 'https://laundrykuporject.great-site.net',
  },
  {
    id: 3,
    title: 'RemovedBG',
    category: 'Web Application',
    description: 'Aplikasi web berbasis AI untuk menghapus background gambar secara otomatis, cepat, dan dengan hasil transparan berkualitas tinggi.',
    image: '/RemovedBG.jpeg',
    link: 'https://project-removedbg.vercel.app/',
  },
  {
    id: 4,
    title: 'E-Commerce Dashboard',
    category: 'Fullstack Web',
    description: 'Responsive admin panel built with Next.js and Supabase, featuring inventory management and sales analytics.',
    image: 'bg-gradient-to-br from-teal-600 to-emerald-900',
    link: '#',
  },
]

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Proyek <span className="text-primary">Terpilih</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative h-full rounded-3xl"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Outer Glow (blur) */}
              <div className="absolute -inset-[2px] rounded-3xl blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-500 overflow-hidden translate-z-0">
                <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ff0055_0%,#8a2be2_33%,#00e5ff_66%,#ff0055_100%)]" />
              </div>

              {/* Crisp Border */}
              <div className="absolute -inset-[2px] rounded-3xl overflow-hidden translate-z-0">
                <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,#ff0055_0%,#8a2be2_33%,#00e5ff_66%,#ff0055_100%)]" />
              </div>

              {/* Inner Focus */}
              <div className="relative z-10 w-full h-full bg-slate-900 rounded-[22px] overflow-hidden shadow-2xl flex flex-col">
                {/* Project Image Area */}
                <div className={`aspect-video w-full relative transition-transform duration-700 group-hover:scale-105 ${project.image.startsWith('bg-') ? project.image : 'bg-slate-800'}`}>
                  {!project.image.startsWith('bg-') && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>

                  {/* Overlay with Actions */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-slate-900 transition-colors">
                      <Github className="w-6 h-6" />
                    </button>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-slate-900 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8 space-y-3 relative z-10 bg-slate-900 flex-1 flex flex-col">
                  <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-medium mb-4">
                    {project.description}
                  </p>

                  <div className="pt-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 mt-2 text-sm font-bold text-white bg-primary/10 border border-primary/50 justify-center rounded-full hover:bg-primary hover:text-slate-900 transition-all duration-300 w-full sm:w-max group/btn"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                      Lihat Website
                    </a>
                  </div>

                  {/* Glow bar */}
                  <div className={`mt-auto pt-6`}>
                    <div className={`h-1 flex-shrink-0 rounded-full transition-all duration-500 bg-primary/30 ${hoveredId === project.id ? 'w-full bg-primary shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'w-12'}`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary/10 border border-primary/50 text-primary font-bold rounded-full hover:bg-primary/20 transition-all duration-300"
          >
            Lihat Semua Proyek
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

