import Image from "next/image";

const footerSections = [
  {
    title: "Sobre",
    links: [
      { label: "Por que o GeniusXP?", href: "#faq" },
      { label: "Equipe", href: "#our-team" },
      { label: "Blog", href: "#" },
      { label: "Imprensa", href: "#" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "Central de ajuda", href: "#" },
      { label: "Fale conosco", href: "#" },
      { label: "Reportar abuso", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Diretrizes", href: "#" },
      { label: "Termos de Serviço", href: "#" },
      { label: "Política de Privacidade", href: "#" },
    ],
  }
]

export function Footer() {
  return (
    <footer className="container">
      <div className="flex w-full flex-wrap justify-between gap-8 px-6 py-12 md:px-0 border-y">
        <Image
          src="/logo.svg"
          alt="GeniusXP"
          width={100}
          height={120}
          className="mb-auto"
        />
        <div className="grid sm:grid-cols-3 gap-8">
          {footerSections.map(({ title, links }) => (
            <div key={title} className="grid text-xs leading-relaxed text-muted-foreground">
              <p className="mb-1.5 text-base font-semibold text-foreground">
                {title}
              </p>
              {links.map(({ label, href }) => (
                <a key={label} href={href} className="hover:underline underline-offset-2 hover:text-foreground">{label}</a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col justify-between gap-6 px-6 py-8 md:px-0">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} GeniusXP. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
