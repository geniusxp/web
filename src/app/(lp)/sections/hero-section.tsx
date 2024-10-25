import { MailIcon, SparklesIcon, VideoIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { DemoDialog } from "@/components/app/demo-dialog";
import { AnimatedGradientText } from "@/components/animations/animated-gradient-text";
import { WaitlistDialog } from "@/app/(lp)/waitlist/waitlist-dialog";

interface HeroSectionProps {
  event?: string;
}

export function HeroSection({ event }: HeroSectionProps) {
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
            Ofereca uma experiência{" "}
            <span className="relative">
              inesquecível
              <svg
                className="absolute -bottom-2 right-1 w-full"
                width="550"
                height="26"
                viewBox="0 0 550 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M260.906 0.0659103C226.728 0.609775 161.104 5.60933 99.3742 12.3721C94.3963 12.9175 87.8384 13.6364 84.801 13.9697C43.8438 18.4647 21.8165 21.2994 6.39811 24.0596C0.380778 25.1369 -0.136185 25.2674 0.0230456 25.67C0.255602 26.2573 1.23461 26.1666 12.4001 24.523C23.954 22.8223 34.3098 21.5875 62.7112 18.5237C157.635 8.28395 201.971 4.53006 251.702 2.5222C261.447 2.12869 277.013 2.19722 277.013 2.63356C277.013 3.21641 267.25 5.20418 244.645 9.22364C216.837 14.1686 199.907 17.4488 198.408 18.1828C195.846 19.4369 198.664 20.3419 204.761 20.2233C208.245 20.1555 209.036 20.1042 225.01 18.9109C270.873 15.4845 300.184 13.7455 339.908 12.094C400.402 9.57893 438.946 8.65112 511.411 7.96535C537.449 7.71901 538.796 7.68463 543.602 7.14527C545.454 6.93737 547.667 6.73419 548.519 6.69366C550.516 6.59888 550.491 6.47763 548.457 6.38823C547.571 6.34924 545.535 6.1632 543.932 5.97473C539.979 5.51005 537.359 5.48578 514.786 5.70456C439.111 6.43787 399.293 7.37569 341.595 9.78354C311.25 11.0499 297.729 11.7379 275.633 13.1402C260.527 14.0988 220.655 16.8895 215.07 17.379C212.023 17.6461 225.251 15.1264 248.486 11.0142C277.878 5.81229 283.729 4.39948 283.756 2.49892C283.787 0.355746 278.445 -0.213051 260.906 0.0659103Z"
                  fill="#8B5CF6"
                />
              </svg>
            </span>{" "}
            e envolvente em seus eventos.
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
            {event ? (
              <Button className="max-md:w-full" asChild>
                <Link href={`/event-analisys?event=${event}+2024`}>
                  <SparklesIcon className="size-4 mr-2" />
                  Obter experiência no {event}
                </Link>
              </Button>
            ) : (
              <WaitlistDialog>
                <Button className="max-md:w-full">
                  <MailIcon className="size-4 mr-2" />
                  Entrar na lista de espera
                </Button>
              </WaitlistDialog>
            )}
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
