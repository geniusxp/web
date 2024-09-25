import { Button } from "@/components/ui/button";
import { BoltIcon, ChartSplineIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function EventCard() {
  return (
    <div className="grid gap-2 bg-card border rounded-lg p-4 relative overflow-hidden">
      <header className="mb-8 flex items-center gap-2">
        <Image
          width={32}
          height={32}
          className="size-8 rounded"
          src="/fiap-logo.png"
          alt="FIAP"
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
      <Image
        fill
        src="/fiap-banner.png"
        alt=""
        className="absolute inset-0 object-cover -z-10 opacity-30 size-full"
      />
    </div>
  );
}
