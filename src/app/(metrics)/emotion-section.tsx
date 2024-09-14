// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { EventEmotions } from "@/models/EventEmotions";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "date-fns";
import Image from "next/image";
import { useState, type ComponentProps } from "react";

const emotionsList = {
  empty: "Vazio",
  sadness: "Tristeza",
  enthusiasm: "Entusiasmo",
  neutral: "Neutro",
  worry: "Preocupação",
  surprise: "Surpresa",
  love: "Amor",
  fun: "Diversão",
  hate: "Ódio",
  happiness: "Felicidade",
  boredom: "Tédio",
  relief: "Alívio",
  anger: "Raiva",
};

export function EmotionSection({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  const [selectedDate, setSelectedDate] = useState<string | undefined>();
  const { data: eventEmotions, isLoading } = useQuery<EventEmotions[]>({
    queryKey: ["eventEmotions"],
    queryFn: () =>
      fetch("http://192.168.15.8:8000/event/4").then((res) => res.json()),
  });

  const eventDay = eventEmotions?.find(({ date }) => date === selectedDate) || eventEmotions?.[0];

  return (
    <Card className={cn("flex flex-col", className)} {...props}>
      <CardHeader className="lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <CardTitle className="text-sm font-medium">
            Análise de emoções
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground mt-1.5">
            Emoções analisadas de acordo com as mensagens enviadas no chat
          </CardDescription>
        </div>

        {!isLoading ? (
          <fieldset className="flex items-center gap-2">
            <Label className="font-normal text-sm">Dia do evento</Label>
            <Select onValueChange={setSelectedDate} value={selectedDate || eventDay?.date}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione um dia" />
              </SelectTrigger>
              <SelectContent>
                {eventEmotions?.map(({ date }) => (
                  <SelectItem key={date} value={date}>
                    {formatDate(date, "dd/MM/yyyy")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </fieldset>
        ) : null}
      </CardHeader>
      <CardContent className="flex-1">
        {eventDay ? (
          <div className="grid grid-cols-6 gap-4">
            {Object.entries(emotionsList).map(([emotion, label]) =>
              eventDay[emotion] > 0 ? (
                <div
                  key={emotion}
                  className="flex flex-col gap-1 items-center bg-card border border-card-foreground/5 rounded-lg p-4"
                >
                  <Image
                    src={`/emotions/${emotion}.svg`}
                    width={40}
                    height={40}
                    alt=""
                    className="mb-1"
                  />
                  <p className="text-xs text-center opacity-90">{label}</p>
                  <p className="text-lg font-medium leading-tight">
                    {eventDay[emotion]}
                  </p>
                </div>
              ) : null
            )}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-center mt-4">
            {isLoading
              ? "Carregando emoções..."
              : "Selecione um dia para visualizar as emoções"}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
