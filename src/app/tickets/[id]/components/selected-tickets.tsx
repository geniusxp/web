import { TicketPercentIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface SelectedTicketsProps {
  showDiscount?: boolean;
  nextStep?: string;
}

export function SelectedTickets({
  showDiscount = false,
  nextStep,
}: SelectedTicketsProps) {
  return (
    <aside className="bg-card border rounded-lg overflow-hidden h-fit">
      <h1 className="bg-primary text-white w-full text-center py-2 font-bold text-lg">
        Ingressos selecionados
      </h1>
      <div className="py-3 px-6">
        <div className="grid divide-y divide-border">
          <div className="py-3 flex items-center justify-between">
            <div>
              <h2 className="font-semibold">Ingresso Meia-entrada</h2>
              <small className="text-xs text-muted-foreground">
                1 unidade x R$ 40,00
              </small>
            </div>
            <h3 className="font-semibold">R$ 40,00</h3>
          </div>
          <div className="py-3 flex items-center justify-between">
            <div>
              <h2 className="font-semibold">Ingresso Inteira</h2>
              <small className="text-xs text-muted-foreground">
                2 unidades x R$ 80,00
              </small>
            </div>
            <h3 className="font-semibold">R$ 160,00</h3>
          </div>
        </div>
        {showDiscount ? (
          <div className="flex gap-2">
            <Input
              placeholder="Insira um cupom de desconto"
              className="flex-1"
            />
            <Button size="icon">
              <TicketPercentIcon className="size-4" />
            </Button>
          </div>
        ) : null}
      </div>
      <footer className="flex items-center justify-between bg-accent py-4 px-6">
        {nextStep ? (
          <Button>
            <Link href={nextStep}>Comprar</Link>
          </Button>
        ) : null}
        <div className="flex flex-col ml-auto">
          <span className="uppercase text-xs text-muted-foreground">
            Valor total
          </span>
          <span className="font-semibold">R$ 200,00</span>
        </div>
      </footer>
    </aside>
  );
}
