"use client";

import { useTickets } from "@/stores/tickets.store";
import { AmountSelector } from "./amount-selector";

interface TicketTypeProps {
  id: number;
  title: string;
  type: string;
  description: string;
  price: string;
}

export function TicketType({
  id,
  title,
  type,
  description,
  price,
}: TicketTypeProps) {
  const { updateTicket } = useTickets();

  function handleChangeAmount(amount: number) {
    console.log("UPDATING")
    updateTicket({
      id,
      title,
      price: parseFloat(price.replace("R$ ", "").replace(",", ".")),
      amount,
    });
  }

  return (
    <div className="bg-card border rounded-lg flex justify-between items-center p-6 gap-1">
      <div>
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-lg">{title}</h2>
          <span className="text-primary border border-primary rounded-full bg-primary/5 font-medium text-xs px-2 py-0.5">
            {type}
          </span>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <h3 className="text-xl font-semibold">{price}</h3>
      </div>
      <AmountSelector onChange={handleChangeAmount} />
    </div>
  );
}
