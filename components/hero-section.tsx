import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
          alt="Fashion background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-balance mb-6 md:mb-8">
          {"시대를 초월한 우아함과"}
          <br />
          {"현대적 감각의 만남"}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
          ÉTOILE는 패션을 통해 당신만의 이야기를 전합니다.
          <br />
          세련된 디자인과 완벽한 품질로 특별한 순간을 만들어갑니다.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
            우리의 이야기
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            컬렉션 보기
          </Button>
        </div>
      </div>
    </section>
  )
}
