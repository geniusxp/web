import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="size-full min-h-screen relative flex items-center justify-center">
      <div className="bg-[url(/home-background.png)] bg-cover h-screen w-screen absolute inset-0 -z-10 pointer-events-none">
        <div className="bg-gradient-to-t size-full from-background to-background/0 to-30%"></div>
      </div>

      <div className="flex items-center gap-8 max-md:flex-col">
        <Image
          src={`/gifs/not-found.webp`}
          width={400}
          height={300}
          alt=""
          className="w-80 h-48 rounded-lg object-cover"
        />
        <div className="flex flex-col items-start max-w-xs gap-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">Oops!</h1>
          <p className="text-muted-foreground text-balance text-lg">
            Não foi possível encontrar a página que você está procurando.
          </p>
          <Button asChild title="Voltar para a página inicial">
            <Link href="/">
              <ArrowLeftIcon className="size-4 mr-2" />
              Página inicial
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
