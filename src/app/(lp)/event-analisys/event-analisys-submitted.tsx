import { Confetti } from "@/components/animations/animated-confettis";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


interface EventAnalisysSubmittedProps {
  event: string;
}

export function EventAnalisysSubmitted({ event }: EventAnalisysSubmittedProps) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <Image
        src="/happy-gif.webp"
        width={300}
        height={200}
        alt=""
        className="aspect-[14/9] w-full rounded-lg object-cover"
      />

      <footer className="space-y-1.5">
        <h1 className="text-lg font-semibold leading-none tracking-tight">
          <span className="text-2xl">🤩</span>
          Fique de olho na sua caixa de entrada!
        </h1>
        <p className="text-sm text-muted-foreground">
          Nossa Inteligência Artificial está preparando algo muito especial para
          você! Em breve você receberá recomendações personalizadas para o {event}.
        </p>
      </footer>
      <Button
        type="button"
        className="w-full mt-auto"
        variant="secondary"
        asChild
      >
        <Link href="/">Voltar</Link>
      </Button>

      <Confetti
        manualstart={false}
        className="absolute inset-0 size-full pointer-events-none"
      />
    </div>
  );
}
