"use client";

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
import { ArrowRightIcon } from "lucide-react";
import { ConfettiButton } from "../animations/animated-confettis";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface DialogProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function WaitlistDialog({ children, open, onOpenChange }: DialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSubmitted(true);
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        {children ? <DialogTrigger asChild>{children}</DialogTrigger> : null}

        <DialogContent className="w-[90vw]">
          {isSubmitted ? (
            <>
              <Image
                src="/happy-gif.webp"
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
              <form onSubmit={handleSubmit} className="grid gap-4 w-full">
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

                <ConfettiButton
                  className={cn(
                    "relative overflow-visible",
                    isSubmitted && "pointer-events-none"
                  )}
                  disabled={!name || !email || name.length < 3 || !email.includes("@") || !email.includes(".") || email.length < 5}
                  type="submit"
                >
                  Entrar na lista de espera
                  <ArrowRightIcon className="size-4 absolute right-4 top-1/2 -translate-y-1/2" />
                </ConfettiButton>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
