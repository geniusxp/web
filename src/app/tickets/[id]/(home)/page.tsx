import { Countdown } from "../components/countdown";
import { EventBanner } from "../components/event-banner";

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

        <Countdown targetDate={new Date("2024-10-20T19:00:00")} />
      </div>

      <aside className="bg-card border p-6 rounded-lg overflow-hidden h-fit">
        <h3>Obter ingressos</h3>
      </aside>
    </main>
  );
}
