import { Header } from "@/components/app/header";
import { EmotionSection } from "./emotion-section";
import { InteractionsSection } from "./interactions-section";
import { PollsSection } from "./polls-section";
import { ReceiptSection } from "./receipt-section";
import { StatisticsSection } from "./statistics-section";

export default function Home() {
  return (
    <main className="flex-1">
      <Header eventName="Fiap Next 2024" pageName="Métricas" />

      <div className="p-4 grid gap-4">
        <StatisticsSection />
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
          <ReceiptSection className="lg:col-span-2 animate-in slide-in-from-bottom-8 fade-in duration-1000" />
          <InteractionsSection className="animate-in slide-in-from-bottom-8 fade-in duration-700" />
        </div>
        <PollsSection />
        <EmotionSection />
      </div>
    </main>
  );
}
