import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { VideosSection } from "@/components/videos-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="relative isolate min-h-svh">
      {/* Foto de fundo fixa cobrindo o site inteiro */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/lucas-drums-bg.jpg')",
          backgroundPosition: "center 32%",
          filter: "brightness(1.2) contrast(1.02)",
        }}
      />
      {/* Sobreposição escura para legibilidade */}
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-background/55"
      />

      <SiteHeader />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <VideosSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
