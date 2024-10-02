import { Label } from "@/components/ui/label";
import { Countdown } from "../components/countdown";
import { EventBanner } from "../components/event-banner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TicketPage({ params }: { params: { id: string } }) {
  return (
    <main className="grid grid-cols-[1fr_25rem] gap-6">
      <div className="flex flex-col gap-2.5 space-y-6">
        <EventBanner />

        <h2 className="text-4xl">
          O festival de{" "}
          <strong className="text-primary font-bold">
            Tecnologia e Inovação
          </strong>{" "}
          da FIAP.
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          NEXT é o festival da Graduação FIAP. Todos os anos, os alunos
          experimentam o futuro na prática, criando projetos originais e
          soluções inovadoras com a parceria de algumas das maiores empresas do
          Brasil e do mundo, utilizando os softwares, plataformas e tecnologias
          mais avançadas.{" "}
        </p>

        <div className="bg-card border rounded-lg text-card-foreground p-6 flex items-center gap-6">
          <div className="grid gap-2.5 flex-1">
            <div className="grid grid-cols-2 gap-[inherit]">
              <div>
                <h3 className="uppercase text-xs text-muted-foreground">
                  Modalidades
                </h3>
                <span className="font-semibold">Presencial e Online</span>
              </div>
              <div>
                <h3 className="uppercase text-xs text-muted-foreground">
                  Preços
                </h3>
                <span className="font-semibold">Entre R$ 15,00 e R$ 80,00</span>
              </div>
            </div>

            <div>
              <h3 className="uppercase text-xs text-muted-foreground">Data</h3>
              <span className="font-semibold">
                Segunda-feira, 25 de Outubro 2024
              </span>
            </div>

            <div className="grid grid-cols-3 gap-[inherit]">
              <div>
                <h3 className="uppercase text-xs text-muted-foreground">
                  Abertura
                </h3>
                <span className="font-semibold">09:00</span>
              </div>
              <div>
                <h3 className="uppercase text-xs text-muted-foreground">
                  Início
                </h3>
                <span className="font-semibold">10:00</span>
              </div>
              <div>
                <h3 className="uppercase text-xs text-muted-foreground">
                  Término
                </h3>
                <span className="font-semibold">21:00</span>
              </div>
            </div>
          </div>
          <div className="h-full w-px bg-border"></div>
          <div className="grid gap-2.5">
            <h4 className="font-semibold">Faltam exatamente:</h4>
            <Countdown targetDate={new Date("2024-10-20T19:00:00")} />
          </div>
        </div>
      </div>

      <aside className="bg-card border p-6 rounded-lg overflow-hidden h-fit grid gap-3">
        <h3 className="text-lg font-bold">Obter ingressos</h3>
        <fieldset className="space-y-1">
          <Label>Nome</Label>
          <Input placeholder="Seu nome completo" />
        </fieldset>
        <fieldset className="space-y-1">
          <Label>E-mail</Label>
          <Input placeholder="Seu melhor e-mail" />
        </fieldset>
        <Button asChild className="mt-3">
          <Link href={`/tickets/${params.id}/selection`}>
            Garantir minha vaga
          </Link>
        </Button>
      </aside>
    </main>
  );
}
