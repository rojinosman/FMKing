import { Navigation } from "@/components/navigation"
import { HeroAbout } from "@/components/hero-about"
import { WorkPortfolio } from "@/components/work-portfolio"
import { ContactSection } from "@/components/contact-section-formspree"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroAbout />
      <WorkPortfolio />
      <ContactSection />
      <Footer />
    </main>
  )
}
