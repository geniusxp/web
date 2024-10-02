import { EventBanner } from "../components/event-banner";
import { SelectedTickets } from "../components/selected-tickets";
import { TicketType } from "../components/ticket-type";

export default function TicketPage({ params }: { params: { id: string } }) {
  return (
    <main className="space-y-6">
      <h1 className="font-bold text-2xl">Seleção de ingressos</h1>

      <div className="grid grid-cols-[1fr_25rem] gap-6">
        <div className="flex flex-col gap-2.5">
          <EventBanner />

          <TicketType
            id={1}
            title="Ingresso Meia-entrada"
            type="Presencial"
            description="Ingresso destinados a estudantes, professores, idosos, Pessoas com Deficiências e outros enquadrantes na Lei Nº 12.933."
            price="R$ 40,00"
          />
          <TicketType
            id={2}
            title="Ingresso Inteira"
            type="Presencial"
            description="Ingresso destinados ao público geral, sem restrições e sem necessidade de comprovação de direito ao benefício."
            price="R$ 80,00"
          />
          <TicketType
            id={3}
            title="Ingresso Meia-entrada ON"
            type="Online"
            description="Ingresso destinados a estudantes, professores, idosos, Pessoas com Deficiências e outros enquadrantes na Lei Nº 12.933."
            price="R$ 20,00"
          />
          <TicketType
            id={4}
            title="Ingresso Inteira ON"
            type="Online"
            description="Ingresso destinados ao público geral, sem restrições e sem necessidade de comprovação de direito ao benefício."
            price="R$ 40,00"
          />
        </div>

        <SelectedTickets
          showDiscount
          nextStep={`/tickets/${params.id}/payment`}
        />
      </div>
    </main>
  );
}
