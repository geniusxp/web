import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="flex items-center justify-center h-full relative">
      <Button
        className="absolute top-0 left-0 bg-secondary"
        size="icon"
        variant="secondary"
        asChild
      >
        <Link href="/auth/signin">
          <ChevronLeftIcon className="size-4" />
        </Link>
      </Button>

      <form className="w-[350px] grid gap-4">
        <h1 className="text-2xl font-medium text-center mb-4">
          Recuperar senha
        </h1>

        <fieldset className="grid space-y-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="alan.turing@email.com"
          />
        </fieldset>

        <div className="grid gap-2 mt-4">
          <Button>Enviar e-mail de recuperação</Button>
          <Button variant="outline" asChild>
            <Link href="/auth/signin">Lembra da sua senha?</Link>
          </Button>
        </div>

        <p className="text-muted-foreground text-xs text-center text-balance mt-4">
          Ao continuar você aceita os <Link href="">Termos de Uso</Link> e{" "}
          <Link href="">Política de Privacidade</Link> definidos pela GeniusXP.
        </p>
      </form>
    </div>
  );
}
