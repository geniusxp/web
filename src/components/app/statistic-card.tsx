import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type { ComponentProps } from "react";

interface StatisticCardProps extends ComponentProps<typeof Card> {
  title: string;
  value: string;
  percentage: number;
  icon: LucideIcon;
}

export function StatisticCard({
  title,
  value,
  percentage,
  icon: Icon,
  ...props
}: StatisticCardProps) {
  const isPositive = percentage > 0;
  return (
    <Card {...props}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          <span className={cn(isPositive ? "text-green-500" : "text-red-500")}>
            {isPositive ? "+" : "-"}
            {percentage}
          </span>{" "}
          comparado ao mês anterior
        </p>
      </CardContent>
    </Card>
  );
}
