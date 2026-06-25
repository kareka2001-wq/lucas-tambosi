import Image from "next/image"

const stats = [
  { value: "10+", label: "Anos de música" },
  { value: "200+", label: "Eventos & cultos" },
  { value: "∞", label: "Dedicação" },
]

export function AboutSection() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="relative order-2 md:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/images/about-portrait.png"
              alt="Lucas Tambosi tocando violão em um palco com pouca luz"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">
            Sobre
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-balance text-foreground md:text-5xl">
            Adoração com propósito e excelência
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Sou músico atuando em worship, eventos e gravações. Trabalho com
              igrejas e projetos musicais em Tijucas — SC, levando excelência e
              dedicação através da música.
            </p>
            <p>
              Cada apresentação é construída com sensibilidade e preparo, do
              ensaio à execução, para criar momentos verdadeiros de conexão e
              adoração.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-3xl font-medium text-foreground">
                  {stat.value}
                </dd>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
