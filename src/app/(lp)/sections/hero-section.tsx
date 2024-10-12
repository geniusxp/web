import { ArrowRightIcon, SparklesIcon, VideoIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { DemoDialog } from "@/components/app/demo-dialog";
import Link from "next/link";
import { AnimatedGradientText } from "@/components/animations/animated-gradient-text";

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
        <div className="space-x-2 max-md:hidden">
          <Button variant="secondary" disabled>
            Registrar
          </Button>
          <Button asChild>
            <Link href="/auth/signin">Login</Link>
          </Button>
        </div>
      </header>
      <div className="grid lg:grid-cols-2 flex-1 relative">
        <div className="gap-6 flex flex-1 justify-center flex-col z-10">
          <AnimatedGradientText>🤩 Visite-nos na ilha 53!</AnimatedGradientText>
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
            <Button className="max-md:w-full" asChild>
              <Link href="/event-analisys">
                <SparklesIcon className="size-4 mr-2" />
                Obter experiência no FIAP NEXT
              </Link>
            </Button>
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
