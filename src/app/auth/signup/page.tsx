import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
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
          Crie sua conta
        </h1>

        <fieldset className="grid space-y-1.5">
          <Label htmlFor="name">Nome</Label>
          <Input type="text" id="name" name="name" placeholder="Alan Turing" />
        </fieldset>

        <fieldset className="grid space-y-1.5">
          <Label htmlFor="cpf">CPF</Label>
          <Input type="text" id="cpf" name="cpf" placeholder="011.400.289-22" />
        </fieldset>

        <fieldset className="grid space-y-1.5">
          <Label htmlFor="birthDate">Data de nascimento</Label>
          <Input
            type="date"
            id="birthDate"
            name="birthDate"
            placeholder="__/__/____"
          />
        </fieldset>

        <fieldset className="grid space-y-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="alan.turing@email.com"
          />
        </fieldset>

        <fieldset className="grid space-y-1.5">
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
          />
        </fieldset>

        <div className="grid gap-2 mt-4">
          <Button>Cadastrar</Button>
          <Button variant="outline" asChild>
            <Link href="/auth/signin">Já possui login?</Link>
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
