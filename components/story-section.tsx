import Image from "next/image"

export function StorySection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/fashion-atelier-designer-workspace-elegant-minimal-ts5RjpCTLs4BNthEr1dxcyAApsbIhy.jpg" 
                alt="Our Story" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Our Story</p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-6 text-balance">
              {"혁신과 전통이 만나"}
              <br />
              {"새로운 패션을 창조하다"}
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                ÉTOILE는 2015년 서울에서 시작된 프리미엄 패션 브랜드입니다. 우리는 시대를 초월하는 디자인과 최상의
                소재로 현대인의 라이프스타일을 정의합니다.
              </p>
              <p>
                전통적인 장인 정신과 현대적인 감각을 결합하여, 단순히 옷을 만드는 것이 아닌 당신만의 개성과 이야기를
                표현할 수 있는 작품을 선보입니다.
              </p>
              <p>
                지속 가능한 패션을 위한 책임감 있는 선택과 윤리적 생산 과정을 통해, 우리는 패션 산업의 긍정적인 변화를
                이끌어가고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
