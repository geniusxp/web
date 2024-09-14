import { SellChart } from "@/components/app/sell-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import { Label } from "@/components/ui/label";
import type { ComponentProps } from "react";

export function ReceiptSection(props: ComponentProps<typeof Card>) {
  return (
    <Card {...props}>
      <CardHeader className="lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <CardTitle className="text-sm font-medium">
            Receita do evento
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground mt-1.5">
            Receita diária no período de vendas
          </CardDescription>
        </div>
        <fieldset className="flex items-center gap-2">
          <Label className="font-normal text-sm">Período</Label>
          <DatePicker  />
        </fieldset>
      </CardHeader>
      <CardContent>
        <SellChart />
      </CardContent>
    </Card>
  );
}
