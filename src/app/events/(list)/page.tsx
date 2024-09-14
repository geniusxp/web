import { Header } from "@/components/app/header";
import { EventCard } from "./event-card";

export default function EventsListPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header eventName="Eventos" />
      <div className="p-4 grid grid-cols-3">
        <EventCard />
      </div>
    </div>
  );
}
