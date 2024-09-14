"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An area chart with a legend";

const chartData = [
  { month: "Abril", full: 186, half: 80 },
  { month: "Maio", full: 305, half: 200 },
  { month: "Junho", full: 237, half: 120 },
  { month: "Julho", full: 73, half: 190 },
  { month: "Agosto", full: 209, half: 130 },
  { month: "Setembro", full: 214, half: 140 },
];

const chartConfig = {
  full: {
    label: "Inteira",
    color: "hsl(var(--chart-1))",
  },
  half: {
    label: "Meia-entrada",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function SellChart() {
  return (
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Area
          dataKey="half"
          type="natural"
          fill="var(--color-half)"
          fillOpacity={0.4}
          stroke="var(--color-half)"
          stackId="a"
        />
        <Area
          dataKey="full"
          type="natural"
          fill="var(--color-full)"
          fillOpacity={0.4}
          stroke="var(--color-full)"
          stackId="a"
        />
        <ChartLegend content={<ChartLegendContent />} />
      </AreaChart>
    </ChartContainer>
  );
}
