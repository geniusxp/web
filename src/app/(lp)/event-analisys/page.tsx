"use client";

import { useFormState } from "react-dom";
import Image from "next/image";
import { useEffect } from "react";
import { toast } from "sonner";

import { EventAnalisysForm } from "./event-analisys-form";
import { sendAnalisysToEmail } from "./actions";
import { EventAnalisysSubmitted } from "./event-analisys-submitted";

export default function EventAnalisysPage() {
  const [{ isSubmitted, error }, onSubmit] = useFormState(sendAnalisysToEmail, {
    isSubmitted: false,
    error: undefined,
  });

  useEffect(() => {
    if (error) {
      toast.error(
        "Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde."
      );
    }
  }, [error]);

  return (
    <main className="flex-1 flex items-center justify-center flex-col gap-4">
      <Image
        src="/logo.svg"
        alt="GeniusXP"
        width={100}
        height={120}
        className="h-16 w-auto"
      />

      <div className="bg-[url(/home-background.png)] bg-cover h-screen w-screen absolute inset-0 -z-10 pointer-events-none">
        <div className="bg-gradient-to-t size-full from-background to-background/0 to-30%"></div>
      </div>

      <form
        action={onSubmit}
        className="shadow-lg sm:max-w-lg w-full min-h-[70vh] sm:border bg-background/50 backdrop-blur p-6 sm:rounded-lg flex flex-col gap-4 animate-in slide-in-from-bottom-8 fade-in duration-1000 relative"
      >
        {isSubmitted ? <EventAnalisysSubmitted /> : <EventAnalisysForm />}
      </form>
      <div className="h-16" />
    </main>
  );
}
