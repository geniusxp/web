import { type ComponentProps } from "react";

import { HeatmapTable } from "@/components/app/heatmap-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { heatmapData } from "@/lib/mocks";

export function HeatmapSection(props: ComponentProps<typeof Card>) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="text-sm font-medium">Mapa de calor</CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          Lugares onde as pessoas mais passaram tempo
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <HeatmapTable data={heatmapData} />
      </CardContent>
    </Card>
  );
}
