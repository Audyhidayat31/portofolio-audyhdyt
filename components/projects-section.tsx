'use client'

import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'AI Image Classifier',
    category: 'Artificial Intelligence',
    description: 'A deep learning model to classify various image categories with 98% accuracy using TensorFlow and Python.',
    image: 'bg-gradient-to-br from-cyan-600 to-blue-900',
  },
  {
    id: 2,
    title: 'Smart Home IoT System',
    category: 'Internet of Things',
    description: 'Centralized dashboard for controlling home devices using ESP32 and MQTT protocol with real-time monitoring.',
    image: 'bg-gradient-to-br from-purple-600 to-indigo-900',
  },
  {
    id: 3,
    title: 'E-Commerce Dashboard',
    category: 'Fullstack Web',
    description: 'Responsive admin panel built with Next.js and Supabase, featuring inventory management and sales analytics.',
    image: 'bg-gradient-to-br from-teal-600 to-emerald-900',
  },
  {
    id: 4,
    title: 'Health Monitoring App',
    category: 'Mobile Development',
    description: 'Cross-platform mobile application for tracking daily fitness activities and vital signs integration.',
    image: 'bg-gradient-to-br from-blue-600 to-cyan-900',
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
              className="group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 transition-all duration-500 hover:border-primary/50 shadow-2xl"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image Area */}
              <div className={`h-64 md:h-80 w-full ${project.image} transition-transform duration-700 group-hover:scale-105 relative`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                
                {/* Overlay with Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors">
                    <Github className="w-6 h-6" />
                  </button>
                  <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 space-y-3 relative z-10 bg-slate-900">
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {project.description}
                </p>
                
                {/* Glow bar */}
                <div className={`mt-6 h-1 rounded-full transition-all duration-500 bg-primary/30 ${hoveredId === project.id ? 'w-full bg-primary shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'w-12'}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 border border-slate-800 text-white font-bold rounded-full hover:border-primary/50 transition-all duration-300"
          >
            Lihat Semua Proyek
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

