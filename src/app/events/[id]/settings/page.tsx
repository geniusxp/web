import { Header } from "@/components/app/header";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { subDays } from "date-fns";

export default function SettingsPage() {
  return (
    <main className="flex-1">
      <Header eventName="FIAP Next 2024" pageName="Configurações" />

      <div className="p-4 grid gap-4 animate-in slide-in-from-bottom-8 fade-in duration-1000">
        <div className="max-w-screen-sm w-full mx-auto grid gap-4">
          <fieldset className="grid space-y-1.5">
            <Label htmlFor="name">Nome do evento</Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Insira o nome do evento"
              value="FIAP Next 2024"
            />
          </fieldset>

          <fieldset className="grid space-y-1.5">
            <Label htmlFor="description">Descrição</Label>
            <Input
              type="text"
              id="description"
              name="description"
              placeholder="Insira a descrição do evento"
              value="O maior evento de tecnologia do Brasil"
            />
          </fieldset>

          <fieldset className="flex flex-col space-y-1.5">
            <Label>Datas</Label>
            <DatePicker
              from={subDays(new Date(), 2)}
              className="max-w-full w-full"
            />
          </fieldset>

          <fieldset className="grid space-y-1.5 max-w-96">
            <Label htmlFor="description">Logo do evento</Label>
            <div className="flex items-center gap-4">
              <img
                className="size-24 rounded"
                src="https://play-lh.googleusercontent.com/S70rI7VrwLic7_p-ax7iAOOopQhcPCzmqyLe5RLJmApTpkgTRaCwWsTNN1Uv1t_t3Pp5"
                alt="Fiap"
              />
              <div className="flex flex-col justify-between h-full">
                <p className="text-sm text-muted-foreground">
                  Atualize a imagem do evento para uma melhor identificação
                </p>
                <Input type="file" id="logo" name="logo" />
              </div>
            </div>
          </fieldset>

          <footer className="col-span-full mt-4">
            <Button>Salvar alterações</Button>
          </footer>
        </div>
      </div>
    </main>
  );
}
