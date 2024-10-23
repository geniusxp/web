"use client";

import { useFormState } from "react-dom";
import Image from "next/image";
import { useEffect } from "react";
import { toast } from "sonner";

import { EventAnalisysForm } from "./event-analisys-form";
import { sendAnalisysToEmail } from "./actions";
import { EventAnalisysSubmitted } from "./event-analisys-submitted";
import { redirect } from "next/navigation";
import { cn } from "@/lib/utils";

export default function EventAnalisysPage({
  searchParams,
}: {
  searchParams: { event?: string };
}) {
  if (!searchParams.event) {
    return redirect("/");
  }

  const [{ isSubmitted, error, html }, onSubmit] = useFormState(
    sendAnalisysToEmail,
    {
      isSubmitted: false,
      event: searchParams.event,
      html: undefined,
    }
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <main className="flex-1 flex items-center justify-center flex-col gap-4 py-4">
      {!html ? (
        <Image
          src="/logo.svg"
          alt="GeniusXP"
          width={100}
          height={120}
          className="h-16 w-auto"
        />
      ) : null}

      <div className="bg-[url(/home-background.png)] bg-cover h-screen w-screen absolute inset-0 -z-10 pointer-events-none">
        <div className="bg-gradient-to-t size-full from-background to-background/0 to-30%"></div>
      </div>

      <form
        action={onSubmit}
        className={cn(
          "shadow-lg sm:max-w-lg w-full sm:border bg-background/50 backdrop-blur p-6 sm:rounded-lg flex flex-col gap-4 transition-transform animate-in slide-in-from-bottom-8 fade-in duration-1000 relative",
          html && "!max-w-5xl [&_#tip_p]:px-4 transition-none"
        )}
      >
        {html ? (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        ) : isSubmitted ? (
          <EventAnalisysSubmitted event={searchParams.event} />
        ) : (
          <EventAnalisysForm event={searchParams.event} />
        )}
      </form>
      <div className="h-16" />
    </main>
  );
}
