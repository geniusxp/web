import { Header } from "@/components/app/header";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function SchedulePage() {
  return (
    <main className="flex-1">
      <Header eventName="FIAP Next 2024" pageName="Cronograma" />

      <div className="p-4 grid gap-4"></div>
    </main>
  );
}
