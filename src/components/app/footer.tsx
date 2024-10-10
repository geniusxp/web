import Image from "next/image";

export function Footer() {
  return (
    <footer className="container">
      <div className="flex w-full flex-wrap justify-between gap-8 px-6 py-12 md:px-0 border-y">
        <Image src="/logo.svg" alt="GeniusXP" width={100} height={120} className="mb-auto" />
        <div className="grid grid-cols-3 gap-8">
          <div className="grid text-xs leading-relaxed text-muted-foreground">
            <p className="mb-1.5 text-base font-semibold text-foreground">Sobre</p>
            <a href="">Por que o GeniusXP?</a>
            <a href="">Equipe</a>
            <a href="">Blog</a>
            <a href="">Imprensa</a>
          </div>

          <div className="grid text-xs leading-relaxed text-muted-foreground">
            <p className="mb-1.5 text-base font-semibold text-foreground">
              Suporte
            </p>
            <a href="">Central de ajuda</a>
            <a href="">Fale conosco</a>
            <a href="">Reportar abuso</a>
          </div>

          <div className="grid text-xs leading-relaxed text-muted-foreground">
            <p className="mb-1.5 text-base font-semibold text-foreground">Legal</p>
            <a href="">Diretrizes</a>
            <a href="">Termos de Serviço</a>
            <a href="">Política de Privacidade</a>
          </div>
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
