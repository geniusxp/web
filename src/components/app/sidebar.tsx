import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  BoltIcon,
  ChartSplineIcon,
  ClockIcon,
  LogOutIcon,
  MapIcon,
  MicVocalIcon,
} from "lucide-react";
import Image from "next/image";

export function Sidebar() {
  return (
    <aside className="flex flex-col h-screen sticky top-0 w-64 border-r max-md:hidden">
      <div className="h-16 border-b px-5 flex items-center">
        <Image src="/logo.svg" alt="Fiap Next 2024" width={51} height={42} className="invert dark:invert-0 mix-blend-difference" />
      </div>
      <nav className="flex-1">
        <div className="grid p-2 gap-1 *:justify-start">
          <Button variant="secondary">
            <ChartSplineIcon className="size-4 mr-2" /> Métricas
          </Button>
          <Button variant="ghost">
            <MicVocalIcon className="size-4 mr-2" /> Speakers
          </Button>
          <Button variant="ghost">
            <ClockIcon className="size-4 mr-2" /> Cronograma
          </Button>
          <Button variant="ghost">
            <MapIcon className="size-4 mr-2" /> Mapa do evento
          </Button>
          <Button variant="ghost">
            <BoltIcon className="size-4 mr-2" /> Configurações
          </Button>
        </div>
      </nav>
      <div className="h-16 border-t flex items-center gap-3 px-5">
        <Avatar className="size-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="grid">
          <span className="text-sm">John Doe</span>
          <span className="text-[11px] text-muted-foreground">
            john@geniusxp
          </span>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="ml-auto border border-input"
        >
          <LogOutIcon className="size-4" />
        </Button>
      </div>
    </aside>
  );
}
