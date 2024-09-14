import { InteractionChart } from "@/components/app/interaction-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export function InteractionsSection({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-sm font-medium">
          Momentos de maior interação
        </CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          Horários com maiores interações
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex items-center justify-center h-full">
          <InteractionChart />
        </div>
      </CardContent>
    </Card>
  );
}
