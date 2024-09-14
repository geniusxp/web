import { PollChart } from "@/components/app/poll-chart";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusIcon } from "lucide-react";

export function PollsSection() {
  return (
    <Card>
      <CardHeader className="lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <CardTitle className="text-sm font-medium">Enquetes</CardTitle>
          <CardDescription className="text-xs text-muted-foreground mt-1.5">
            Resultados das enquetes realizadas
          </CardDescription>
        </div>
        <Button variant="ghost" className="border bg-background" size="sm">
          <PlusIcon className="size-4 mr-2" />
          Nova enquete
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <PollChart
            title="Qual  framework você acha melhor?"
            data={[
              { option: "React", amount: 186 },
              { option: "Svelte", amount: 305 },
              { option: "Vue", amount: 237 },
            ]}
          />
          <PollChart
            title="Qual speaker você mais gostou hoje?"
            data={[
              { option: "Lucas Santos", amount: 186 },
              { option: "Rafaella Ballerini", amount: 305 },
              { option: "The Primeagen", amount: 237 },
            ]}
          />
          <PollChart
            title="Você prefere qual tipo de estilização?"
            data={[
              { option: "Tailwind", amount: 186 },
              { option: "Inline CSS", amount: 305 },
              { option: "CSS-in-JS", amount: 237 },
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
