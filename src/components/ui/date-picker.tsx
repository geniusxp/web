"use client";

import { format, subDays } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";
import { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  from?: Date;
  to?: Date;
}

export function DatePicker({
  className,
  from = subDays(new Date(), 30),
  to = new Date(),
}: DatePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from,
    to,
  });

  return (
    <div className="grid">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full max-w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
              className
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd/MM/yyyy")} -{" "}
                  {format(date.to, "dd/MM/yyyy")}
                </>
              ) : (
                format(date.from, "dd/MM/yyyy")
              )
            ) : (
              <span>Selecione uma data</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
            hidden={{ after: new Date() }}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
