import { TicketHeader } from "./components/ticket-header";

export default function TicketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col">
      <TicketHeader eventName="FIAP Next 2024" />
      <main className="container py-6">{children}</main>
    </div>
  );
}
