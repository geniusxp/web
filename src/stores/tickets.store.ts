import { create } from "zustand";

type Ticket = {
  id: number;
  title: string;
  price: number;
  amount: number;
};

interface TicketsStore {
  tickets: Ticket[];

  updateTicket: (ticket: Ticket) => void;
}

export const useTickets = create<TicketsStore>((set) => ({
  tickets: [],

  updateTicket: (ticket) =>
    set((state) => {
      if (ticket.amount === 0) {
        // TODO: remove ticket by id
        return {
          tickets: state.tickets.filter((t) => t.id !== ticket.id),
        };
      }

      if (state.tickets.some((t) => t.id === ticket.id)) {
        // TODO: update ticket by id
        return {
          tickets: state.tickets.map((t) => (t.id === ticket.id ? ticket : t)),
        };
      }

      // TODO: add ticket
      return { tickets: [...state.tickets, ticket] };
    }),
}));
