import { Button } from "@/components/ui/button";
import { MailIcon, VideoIcon } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="flex flex-col container min-h-screen">
      <header className="flex items-center justify-between py-4">
        <Image
          src="/logo.svg"
          alt="GeniusXP"
          width={100}
          height={120}
          className="h-16 w-auto"
        />
        <div className="space-x-2">
          <Button variant="secondary">Login</Button>
          <Button>Registrar</Button>
        </div>
      </header>
      <div className="grid grid-cols-2 flex-1 relative">
        <div className="gap-6 flex flex-1 justify-center flex-col">
          <span className="rounded-full px-2.5 py-0.5 border border-amber-500 bg-amber-500/20 text-amber-400 text-sm w-fit">
            🚧 Work in progress
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold max-w-[22ch]">
            Ofereca uma experiência inesquecível e envolvente em seus eventos.
          </h1>
          <p className="pb-2 max-w-[54ch] text-lg font-light 2xl:max-w-[64ch]">
            A inteligência artificial na GeniusXP personaliza interações,
            otimiza operações e garante segurança, elevando a gestão de eventos
            a um novo nível de eficiência e engajamento.
          </p>
          <div className="space-x-2">
            <Button variant="secondary">
              <VideoIcon className="size-4 mr-2" />
              Assistir a demo
            </Button>
            <Button>
              <MailIcon className="size-4 mr-2" />
              Entrar na lista de espera
            </Button>
          </div>
        </div>
        <div className="absolute -right-64 aspect-video rounded-xl overflow-hidden perspective border-8 opacity-90">
          <Image
            src="/lp-image.png"
            alt=""
            width={1080}
            height={720}
            className="w-full h-auto relative animate-scroll-screen"
          />
        </div>
      </div>
    </section>
  );
}
