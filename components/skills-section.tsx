export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Fullstack Dev',
      skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Backend & DB',
      skills: ['Node.js', 'PostgreSQL', 'Prisma', 'Supabase'],
    },
    {
      title: 'AI & Data',
      skills: ['Python', 'TensorFlow', 'OpenCV', 'Data Analysis'],
    },
    {
      title: 'IoT & Tools',
      skills: ['Arduino', 'ESP32', 'Git / GitHub', 'Docker'],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Keahlian <span className="text-primary">& Teknologi</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
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

              {/* Inner card content */}
              <div className="relative h-full w-full bg-slate-900 rounded-[14px] p-8 z-10 flex flex-col items-start gap-4 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  {category.title}
                </h3>
                <ul className="space-y-4 w-full">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
                      <span className="text-muted-foreground font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative background glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
      </div>
    </section>
  )
}

