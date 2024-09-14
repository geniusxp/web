"use client";

import { Button } from "@/components/ui/button";
import { SofaIcon } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import {
  BoltIcon,
  ChartSplineIcon,
  ClockIcon,
  MapIcon,
  MicVocalIcon,
} from "lucide-react";

export function SiderbarLinks() {
  const params = useParams();
  const pathname = usePathname();

  const eventId = params.id;
  const sidebarLinks = !!eventId
    ? [
        {
          icon: ChartSplineIcon,
          label: "Métricas",
          href: `/events/${eventId}/metrics`,
        },
        {
          icon: MicVocalIcon,
          label: "Speakers",
          href: `/events/${eventId}/speakers`,
        },
        // {
        //   icon: ClockIcon,
        //   label: "Cronograma",
        //   href: `/events/${eventId}/schedule`,
        // },
        {
          icon: MapIcon,
          label: "Mapa do evento",
          href: `/events/${eventId}/event-map`,
        },
        {
          icon: BoltIcon,
          label: "Configurações",
          href: `/events/${eventId}/settings`,
        },
      ]
    : [{ icon: SofaIcon, label: "Eventos", href: "/events" }];

  return (
    <div className="grid p-2 gap-1 *:justify-start">
      {sidebarLinks.map(({ label, href, icon: Icon }) => (
        <Button
          key={href}
          variant={pathname === href ? "secondary" : "ghost"}
          asChild
        >
          <Link href={href}>
            <Icon className="size-4 mr-2" /> {label}
          </Link>
        </Button>
      ))}
    </div>
  );
}
