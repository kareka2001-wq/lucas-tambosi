const channels = [
  {
    icon: "/images/whatsapp.svg",
    label: "WhatsApp",
    detail: "Fale diretamente comigo",
    href: "https://wa.me/5500000000000",
  },
  {
    icon: "/images/instagram.svg",
    label: "Instagram",
    detail: "@lucastambosi",
    href: "https://instagram.com",
  },
  {
    icon: "/images/youtube.svg",
    label: "YouTube",
    detail: "@lucastambosi",
    href: "https://youtube.com/@lucastambosi",
  },
]

export function ContactSection() {
  return (
    <section
      id="contato"
      className="border-t border-border bg-card/30 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">
          Contato
        </p>
        <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-balance text-foreground md:text-5xl">
          Vamos criar algo memorável juntos
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
          Para cultos, eventos, casamentos ou gravações, entre em contato pelo
          canal de sua preferência.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                <img
                  src={channel.icon || "/placeholder.svg"}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6 [filter:invert(78%)_sepia(38%)_saturate(640%)_hue-rotate(7deg)_brightness(92%)] group-hover:[filter:invert(8%)_sepia(8%)_saturate(600%)_hue-rotate(220deg)_brightness(95%)]"
                />
              </div>
              <span className="mt-5 font-medium text-foreground">
                {channel.label}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                {channel.detail}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
