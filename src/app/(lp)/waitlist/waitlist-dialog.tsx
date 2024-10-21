"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Confetti } from "@/components/animations/animated-confettis";

import { addToNewsletter } from "./actions";
import { cn } from "@/lib/utils";

interface DialogProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function WaitlistDialog({ children, open, onOpenChange }: DialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [{ isSubmitted }, onSubmit] = useFormState(addToNewsletter, {
    isSubmitted: false,
  });

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        {children ? <DialogTrigger asChild>{children}</DialogTrigger> : null}

        <DialogContent className="w-[90vw] outline-none">
          {isSubmitted ? (
            <>
              <Image
                src={`/gifs/happy/${Math.floor(Math.random() * 9) + 1}.webp`}
                width={300}
                height={200}
                alt=""
                className="aspect-[14/9] w-full rounded-lg object-cover"
              />

              <DialogHeader>
                <DialogTitle>Obrigado!</DialogTitle>
                <DialogDescription>
                  Você foi adicionado à lista de espera. Entraremos em contato
                  assim que a GeniusXP estiver disponível.
                </DialogDescription>
              </DialogHeader>

              <Confetti
                manualstart={false}
                className="absolute inset-0 size-full pointer-events-none"
              />
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Entrar na lista de espera</DialogTitle>
                <DialogDescription>
                  Preencha o formulário abaixo para receber novidades e ser
                  notificado quando a GeniusXP estiver disponível.
                </DialogDescription>
              </DialogHeader>
              <form action={onSubmit} className="grid gap-4 w-full">
                <fieldset className="space-y-1.5">
                  <Label>Nome</Label>
                  <Input
                    name="name"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    minLength={3}
                    required
                  />
                </fieldset>

                <fieldset className="space-y-1.5">
                  <Label>Email</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </fieldset>

                <Button
                  className={cn("relative overflow-visible")}
                  disabled={
                    !name ||
                    !email ||
                    name.length < 3 ||
                    !email.includes("@") ||
                    !email.includes(".") ||
                    email.length < 5
                  }
                  type="submit"
                >
                  Entrar na lista de espera
                  <ArrowRightIcon className="size-4 absolute right-4 top-1/2 -translate-y-1/2" />
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
