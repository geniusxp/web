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
import type { ComponentProps } from "react";

export function PollsSection(props: ComponentProps<typeof Card>) {
  function generateRandomNumber() {
    return Math.floor(Math.random() * (500 - 100 + 1) + 100);
  }

  return (
    <Card {...props}>
      <CardHeader className="lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <CardTitle className="text-sm font-medium">Enquetes</CardTitle>
          <CardDescription className="text-xs text-muted-foreground mt-1.5">
            Resultados das enquetes realizadas
          </CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <PlusIcon className="size-4 mr-2" />
          Nova enquete
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <PollChart
            title="Qual  framework você acha melhor?"
            data={[
              { option: "React", amount: generateRandomNumber() },
              { option: "Svelte", amount: generateRandomNumber() },
              { option: "Vue", amount: generateRandomNumber() },
            ]}
          />
          <PollChart
            title="Qual speaker você mais gostou hoje?"
            data={[
              { option: "Lucas Santos", amount: generateRandomNumber() },
              { option: "Rafaella Ballerini", amount: generateRandomNumber() },
              { option: "The Primeagen", amount: generateRandomNumber() },
            ]}
          />
          <PollChart
            title="Você prefere qual tipo de estilização?"
            data={[
              { option: "Tailwind", amount: generateRandomNumber() },
              { option: "Inline CSS", amount: generateRandomNumber() },
              { option: "CSS-in-JS", amount: generateRandomNumber() },
            ]}
          />
        </div>
      </CardContent>
    </Card>
  );
}
