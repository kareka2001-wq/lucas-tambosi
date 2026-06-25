const videos = [
  { id: "20Rg04hj_fI", title: "Jesus em Tua Presença — Morada (Drum Cover)" },
  { id: "QEUBIkvAKjw", title: "Apresentação ao vivo" },
  { id: "UaUp-FUTpPw", title: "Sessão de worship" },
  { id: "KdPdL1zOHBk", title: "Performance musical" },
]

export function VideosSection() {
  return (
    <section id="videos" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="max-w-2xl">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">
          Vídeos
        </p>
        <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-balance text-foreground md:text-5xl">
          Assista alguns momentos
        </h2>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {videos.map((video) => (
          <figure
            key={video.id}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-muted-foreground">
              {video.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
