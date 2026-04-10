import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'
import { AchievementSection } from '@/components/achievement-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
export default function Home() {
  return (
    <main className="text-foreground relative min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
