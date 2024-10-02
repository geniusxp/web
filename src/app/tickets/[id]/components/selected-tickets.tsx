"use client";

import { TicketPercentIcon, TicketXIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useTickets } from "@/stores/tickets.store";
import { useMemo } from "react";

interface SelectedTicketsProps {
  showDiscount?: boolean;
  nextStep?: string;
}

export function SelectedTickets({
  showDiscount = false,
  nextStep,
}: SelectedTicketsProps) {
  const { tickets } = useTickets();
  const totalPrice = useMemo(() => {
    return tickets.reduce((acc, ticket) => {
      return acc + ticket.price * ticket.amount;
    }, 0);
  }, [tickets]);

  return (
    <aside className="bg-card border rounded-lg overflow-hidden h-fit">
      <h1 className="bg-primary text-white w-full text-center py-2 font-bold text-lg">
        Ingressos selecionados
      </h1>
      <div className="py-3 px-6">
        <div className="grid divide-y divide-border">
          {tickets.length ? (
            <>
              {tickets.map((ticket) => (
                <div className="py-3 flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold">{ticket.title}</h2>
                    <small className="text-xs text-muted-foreground">
                      {ticket.amount} unidade(s) x R$ {ticket.price}
                    </small>
                  </div>
                  <h3 className="font-semibold">
                    R$ {ticket.price * ticket.amount}
                  </h3>
                </div>
              ))}

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
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 py-6 text-muted-foreground">
              <TicketXIcon className="size-8" />
              <span className="text-sm">Nenhum ingresso selecionado</span>
            </div>
          )}
        </div>
      </div>
      <footer className="flex items-center justify-between bg-accent py-4 px-6">
        {nextStep ? (
          <Button disabled={!tickets.length}>
            <Link href={nextStep}>Comprar</Link>
          </Button>
        ) : null}
        {totalPrice ? (
          <div className="flex flex-col ml-auto">
            <span className="uppercase text-xs text-muted-foreground">
              Valor total
            </span>
            <span className="font-semibold">R$ {totalPrice}</span>
          </div>
        ) : null}
      </footer>
    </aside>
  );
}
