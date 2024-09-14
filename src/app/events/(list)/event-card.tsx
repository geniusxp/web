import { Button } from "@/components/ui/button";
import { BoltIcon, ChartSplineIcon } from "lucide-react";
import Link from "next/link";

export function EventCard() {
  return (
    <div className="grid gap-2 bg-card border rounded-lg p-4 relative overflow-hidden">
      <header className="mb-8 flex items-center gap-2">
        <img
          className="size-8 rounded"
          src="https://play-lh.googleusercontent.com/S70rI7VrwLic7_p-ax7iAOOopQhcPCzmqyLe5RLJmApTpkgTRaCwWsTNN1Uv1t_t3Pp5"
          alt="Fiap"
        />
        <h2 className="text-lg font-medium">FIAP Next 2024</h2>
      </header>
      <Button variant="secondary" asChild>
        <Link href="/events/1/settings">
          <BoltIcon className="size-4 mr-2" /> Configurações
        </Link>
      </Button>
      <Button asChild>
        <Link href="/events/1/metrics">
          <ChartSplineIcon className="size-4 mr-2" />
          Visualizar detalhes
        </Link>
      </Button>
      <img
        src="https://i.ytimg.com/vi/7Ggx_UsW17o/maxresdefault.jpg"
        alt=""
        className="absolute inset-0 object-cover -z-10 opacity-30 size-full"
      />
    </div>
  );
}
