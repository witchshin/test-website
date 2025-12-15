import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ValuesSection } from "@/components/values-section"
import { StorySection } from "@/components/story-section"
import { ApproachSection } from "@/components/approach-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ValuesSection />
      <StorySection />
      <ApproachSection />
      <Footer />
    </main>
  )
}
