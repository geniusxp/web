"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface HeatmapTableProps {
  data: {
    name: string;
    location: {
      top: string;
      left: string;
    };
    users: number;
  }[];
}

export function HeatmapTable({ data }: HeatmapTableProps) {
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);
  const [hoveredTableRow, setHoveredTableRow] = useState<number | null>(null);

  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    if (hoveredLocation !== null && tableRef.current) {
      const table = tableRef.current;
      const row = table.querySelector(`#heatmap-${hoveredLocation}`);
      if (row) {
        row.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    }
  }, [hoveredLocation]);

  console.log({ data });

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className=" relative border rounded overflow-hidden font-semibold text-center text-xs">
        <Image
          src="/event-map.png"
          width={800}
          height={600}
          alt=""
          className="opacity-50 h-full w-auto"
        />
        {data.map(({ location }, index) => (
          <span
            key={index}
            className={cn(
              "absolute rounded-full size-6 bg-primary flex items-center justify-center outline outline-8 outline-primary/25 border border-transparent transition-all hover:border-primary-foreground/25",
              (hoveredTableRow !== null && index !== hoveredTableRow) ||
                (hoveredLocation !== null && index !== hoveredLocation)
                ? "opacity-40"
                : ""
            )}
            style={{ top: location.top, left: location.left }}
            onMouseEnter={() => setHoveredLocation(index)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            {index + 1}
          </span>
        ))}
      </div>
      <Table className="max-h-[21rem] overflow-x-scroll rounded border bg-card" ref={tableRef}>
        <TableHeader className="sticky top-0 bg-background">
          <TableRow>
            <TableHead>Posição</TableHead>
            <TableHead>Local</TableHead>
            <TableHead>Usuários</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map(({ name, users }, index) => (
            <TableRow
              key={index}
              className={index === hoveredLocation ? "bg-muted/50" : ""}
              id={`heatmap-${index}`}
              onMouseEnter={() => setHoveredTableRow(index)}
              onMouseLeave={() => setHoveredTableRow(null)}
            >
              <TableCell>{index + 1}°</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{users}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
