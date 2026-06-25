import { Church, PartyPopper, MicVocal } from "lucide-react"

const services = [
  {
    icon: Church,
    title: "Worship em Igrejas",
    description:
      "Condução musical para cultos e celebrações, com repertório preparado e sensibilidade para cada momento de adoração.",
  },
  {
    icon: PartyPopper,
    title: "Eventos e Casamentos",
    description:
      "Música ao vivo para cerimônias, recepções e eventos especiais, criando uma atmosfera marcante e elegante.",
  },
  {
    icon: MicVocal,
    title: "Sessões de Gravação",
    description:
      "Participação e produção em estúdio para projetos musicais, com qualidade técnica e entrega cuidadosa.",
  },
]

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="border-y border-border bg-card/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">
            Serviços
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-balance text-foreground md:text-5xl">
            Como posso servir o seu projeto
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-medium text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
