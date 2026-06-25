export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row md:px-8">
        <p className="font-serif text-base text-foreground">Lucas Tambosi</p>
        <p>
          © {new Date().getFullYear()} Lucas Tambosi. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}
