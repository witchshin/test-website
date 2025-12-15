export function ValuesSection() {
  const values = [
    {
      number: "01",
      title: "장인정신",
      description: "모든 제품에 담긴 세심한 손길과 완벽을 향한 집념이 ÉTOILE의 품질을 만듭니다.",
    },
    {
      number: "02",
      title: "지속가능성",
      description: "환경을 생각하는 소재 선택과 생산 과정으로 더 나은 미래를 만들어갑니다.",
    },
    {
      number: "03",
      title: "혁신적 디자인",
      description: "전통과 현대의 조화를 통해 시간이 지나도 가치있는 패션을 창조합니다.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Our Values</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light">{"우리가 지키는 가치"}</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value) => (
            <div key={value.number} className="text-center md:text-left">
              <div className="text-6xl md:text-7xl font-serif font-light text-muted-foreground/30 mb-4">
                {value.number}
              </div>
              <h4 className="text-xl md:text-2xl font-serif mb-4">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
