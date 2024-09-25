import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EventBanner } from "../components/event-banner";
import { PaymentType } from "../components/payment-type";
import { SelectedTickets } from "../components/selected-tickets";

export default function TicketPage() {
  return (
    <main className="space-y-6">
      <h1 className="font-bold text-2xl">Pagamento</h1>

      <div className="grid grid-cols-[1fr_25rem] gap-6">
        <div className="flex flex-col gap-2.5">
          <EventBanner />

          <form className="bg-card p-6 border rounded-lg grid grid-cols-2 gap-3">
            <div className="grid gap-4">
              <fieldset className="space-y-1">
                <Label>Meio de pagamento</Label>
                <PaymentType />
              </fieldset>
              <fieldset className="space-y-1">
                <Label>Informações de contato</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    placeholder="1234 5678 9012 3456"
                    className="col-span-full"
                  />
                  <Input placeholder="MM / AA" />
                  <Input placeholder="CVC" />
                </div>
              </fieldset>
            </div>

            <div className="grid gap-4">
              <fieldset className="space-y-1">
                <Label>Nome do comprador</Label>
                <Input placeholder="Nome completo" />
              </fieldset>
              <fieldset className="space-y-1">
                <Label>CPF do comprador</Label>
                <Input placeholder="011.400.289-22" />
              </fieldset>
              <fieldset className="space-y-1">
                <Label>Email para envio dos ingressos</Label>
                <Input placeholder="seuemail@aqui.com" />
              </fieldset>
            </div>

            <footer className="flex justify-end col-span-full">
              <Button className="px-10">Finalizar compra</Button>
            </footer>
          </form>
        </div>

        <SelectedTickets />
      </div>
    </main>
  );
}
