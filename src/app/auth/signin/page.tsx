import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <form className="w-[350px] grid gap-4">
        <h1 className="text-2xl font-medium text-center mb-4">
          Entre em sua conta
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

        <fieldset className="grid space-y-1.5">
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
          />
        </fieldset>

        <div className="mt-4">
          <Link
            href="/auth/forgot-password"
            className="underline font-medium text-sm"
          >
            Esqueci minha senha
          </Link>
        </div>

        <div className="grid gap-2">
          <Button>Login</Button>
          <Button variant="outline" asChild>
            <Link href="/auth/signup">Criar nova conta</Link>
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
