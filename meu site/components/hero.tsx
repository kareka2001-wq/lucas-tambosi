import { MapPin } from "lucide-react"

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      {/* Gradiente sutil sobre a foto de fundo global para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/70" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm">
          <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          Tijucas — SC
        </p>

        <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-balance text-foreground sm:text-6xl md:text-7xl">
          Lucas Tambosi
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
          Música a serviço da adoração. Worship em igrejas, eventos, casamentos e
          sessões de gravação com excelência e dedicação.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contato"
            className="w-full rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            Entrar em contato
          </a>
          <a
            href="#videos"
            className="w-full rounded-full border border-border bg-background/30 px-7 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-background/60 sm:w-auto"
          >
            Ver vídeos
          </a>
        </div>
      </div>
    </section>
  )
}
