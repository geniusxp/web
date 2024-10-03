"use client";

import { Header } from "@/components/app/header";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import ptLocale from "@fullcalendar/core/locales/pt-br";
import { events } from "@/lib/mocks";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Mic2Icon, MicIcon } from "lucide-react";

export default function SchedulePage() {
  return (
    <main className="flex-1 flex flex-col">
      <Header eventName="FIAP Next 2024" pageName="Cronograma" />

      <div className="p-4 flex flex-col gap-4 flex-1">
        <div className="flex max-sm:flex-col gap-4">
          <Button>
            <Mic2Icon className="size-4 mr-2" /> Adicionar nova palestra
          </Button>
          <Button variant="secondary">
            <CalendarIcon className="size-4 mr-2" /> Adicionar novo dia
          </Button>
        </div>

        <div className="h-full w-full overflow-auto">
          <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin]}
            initialView="customTimeGrid"
            viewClassNames="[&_table]:rounded-lg [&_table]:overflow-hidden flex-1 min-w-[1200px]"
            locale={ptLocale}
            views={{
              customTimeGrid: {
                type: "timeGrid",
                duration: { days: 2 },
                eventTimeFormat: {
                  hour: "numeric",
                  minute: "2-digit",
                  meridiem: false,
                },
              },
            }}
            initialDate={new Date("2024-10-26T08:00:00")}
            allDaySlot={false}
            events={events}
            height="100%"
            editable
            droppable
            scrollTime="08:00:00"
            slotMinTime="08:00:00"
            slotMaxTime="22:00:00"
            dayHeaderFormat={{ weekday: "long", day: "numeric", month: "long" }}
            eventTimeFormat={{
              hour: "numeric",
              minute: "2-digit",
              meridiem: false,
            }}
            eventClassNames="p-2"
            eventContent={(eventInfo) => {
              const event = events.find((e) => e.id === eventInfo.event.id)!;

              return (
                <div className="flex flex-col h-full">
                  <small className="text-xs font-normal">
                    {eventInfo.timeText}
                  </small>
                  <span
                    className="text-sm font-semibold line-clamp-2"
                    title={event.title}
                  >
                    {event.title}
                  </span>
                  <div className="flex items-center gap-2 mt-auto text-xs">
                    <img
                      src={event.speaker.avatar}
                      alt={event.speaker.name}
                      className="size-4 rounded-full"
                    />
                    <span>
                      {event.speaker.name} - {event.place}
                    </span>
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    </main>
  );
}
