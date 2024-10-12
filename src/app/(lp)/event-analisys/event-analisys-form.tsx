import { eventSegments } from "@/lib/mocks";

import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";

export function EventAnalisysForm() {
  return (
    <div className="grid gap-4">
      <header className="space-y-1.5">
        <h1 className="text-lg font-semibold leading-none tracking-tight">
          <span className="text-2xl">🤩</span> Que bom ter você aqui!
        </h1>
        <p className="text-sm text-muted-foreground">
          Preencha o formulário abaixo para receber recomendações personalizadas
          diretamente da nossa IA para o FIAP NEXT 2024!
        </p>
      </header>

      <fieldset className="grid space-y-1.5">
        <Label htmlFor="name">Nome</Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Alan Turing"
          required
          minLength={3}
        />
      </fieldset>

      <fieldset className="grid space-y-1.5">
        <Label htmlFor="email">E-mail</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="alan.turing@email.com"
          required
        />
      </fieldset>

      <fieldset className="grid space-y-1.5 -mx-2">
        <Label htmlFor="interests">Segmentos de interesse</Label>
        <div className="flex flex-wrap gap-3 justify-center">
          {eventSegments.map((segment) => (
            <label key={segment.id}>
              <input
                type="checkbox"
                className="sr-only peer"
                name="interests"
                value={segment.id}
              />
              <Badge
                variant="secondary"
                className="peer-checked:bg-primary cursor-pointer font-medium tracking-wide peer-focus-visible:ring-2 peer-focus-visible:ring-primary/75"
              >
                {segment.label}
              </Badge>
            </label>
          ))}
        </div>
      </fieldset>

      <Button type="submit" className="w-full">
        Enviar
      </Button>
    </div>
  );
}
