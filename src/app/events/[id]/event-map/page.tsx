import { Header } from "@/components/app/header";
import EventMapUpload from "./event-map-upload";

export default function EventMapPage() {
  return (
    <main className="flex-1">
      <Header eventName="FIAP Next 2024" pageName="Mapa do evento" />

      <div className="p-4 grid gap-4 animate-in slide-in-from-bottom-8 fade-in duration-1000">
        <div className="w-3/4 mx-auto">
          <EventMapUpload />
        </div>
      </div>
    </main>
  );
}
