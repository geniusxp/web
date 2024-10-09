import { MailIcon, VideoIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { DemoDialog } from "@/components/app/demo-dialog";
import { WaitlistDialog } from "@/components/app/waitlist-dialog";
import Link from "next/link";

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
          <Button variant="secondary" disabled>
            Registrar
          </Button>
          <Button asChild>
            <Link href="/auth/signin">Login</Link>
          </Button>
        </div>
      </header>
      <div className="grid lg:grid-cols-2 flex-1 relative">
        <div className="gap-6 flex flex-1 justify-center flex-col">
          <span className="rounded-full px-2.5 py-0.5 border border-amber-500 bg-amber-500/20 text-amber-400 text-sm w-fit animate-in slide-in-from-bottom-8 fade-in duration-300">
            🚧 Projeto em desenvolvimento...
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold max-w-[22ch] animate-in slide-in-from-bottom-8 fade-in duration-500">
            Ofereca uma experiência inesquecível e envolvente em seus eventos.
          </h1>
          <p className="pb-2 max-w-[54ch] text-lg font-light 2xl:max-w-[64ch] text-foreground/80 animate-in slide-in-from-bottom-8 fade-in duration-700">
            A inteligência artificial na GeniusXP personaliza interações,
            otimiza operações e garante segurança, elevando a gestão de eventos
            a um novo nível de eficiência e engajamento.
          </p>
          <div className="flex gap-2 flex-wrap animate-in slide-in-from-bottom-8 fade-in duration-1000">
            <DemoDialog>
              <Button variant="secondary" className="max-md:w-full">
                <VideoIcon className="size-4 mr-2" />
                Assistir a demo
              </Button>
            </DemoDialog>
            <WaitlistDialog>
              <Button className="max-md:w-full">
                <MailIcon className="size-4 mr-2" />
                Entrar na lista de espera
              </Button>
            </WaitlistDialog>
          </div>
        </div>
        <div className="flex items-center max-lg:flex-col animate-in slide-in-from-bottom-8 fade-in duration-700 max-lg:py-12">
          <div className="lg:absolute -right-64 aspect-video rounded-xl overflow-hidden lg:perspective border-8 opacity-90 lg:max-w-[60vw]">
            <Image
              src="/lp-image.png"
              alt=""
              width={1080}
              height={720}
              className="w-full h-auto relative animate-scroll-screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
