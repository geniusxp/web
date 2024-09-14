"use client";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";
export const description = "A donut chart";
const chartData = [
  { moment: "15", interactions: 275, fill: "var(--color-15)" },
  { moment: "13", interactions: 200, fill: "var(--color-13)" },
  { moment: "12", interactions: 187, fill: "var(--color-12)" },
  { moment: "14", interactions: 173, fill: "var(--color-14)" },
  { moment: "other", interactions: 90, fill: "var(--color-other)" },
];
const chartConfig = {
  15: {
    label: "15h - 16h",
    color: "hsl(var(--chart-1))",
  },
  13: {
    label: "13h - 14h",
    color: "hsl(var(--chart-2))",
  },
  12: {
    label: "12h - 13h",
    color: "hsl(var(--chart-3))",
  },
  14: {
    label: "14h - 15h",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Outros",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function InteractionChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[300px] h-full"
    >
      <PieChart className="[&_svg]:overflow-visible">
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="interactions"
          nameKey="moment"
          innerRadius={70}
          outerRadius={100}
          paddingAngle={4}
        />
        <ChartLegend content={<ChartLegendContent className="flex-wrap" />} />
      </PieChart>
    </ChartContainer>
  );
}
