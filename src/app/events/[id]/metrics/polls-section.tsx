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
import { pollsData } from "@/lib/mocks";

export function PollsSection(props: ComponentProps<typeof Card>) {
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
          {pollsData.map((poll) => (
            <PollChart title={poll.title} data={poll.data} key={poll.title} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
