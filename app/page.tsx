import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SocialSection } from "@/components/sections/social-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Navigation } from "@/components/navigation/navigation"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SocialSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
