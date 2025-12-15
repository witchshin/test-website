import Image from "next/image"

export function ApproachSection() {
  const approaches = [
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      title: "최고급 소재",
      description: "세계 각지에서 엄선된 프리미엄 원단과 소재",
    },
    {
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      title: "독창적 디자인",
      description: "트렌드를 넘어선 독보적인 스타일 창조",
    },
    {
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80",
      title: "완벽한 완성도",
      description: "세밀한 디테일까지 놓치지 않는 장인의 손길",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Our Approach</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light">{"완벽을 향한 여정"}</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <Image
                  src={approach.image}
                  alt={approach.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h4 className="text-xl md:text-2xl font-serif mb-3">{approach.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-block bg-accent text-accent-foreground px-8 py-4 hover:bg-accent/90 transition-colors cursor-pointer">
            <span className="text-sm tracking-wider uppercase">컬렉션 둘러보기</span>
          </div>
        </div>
      </div>
    </section>
  )
}
