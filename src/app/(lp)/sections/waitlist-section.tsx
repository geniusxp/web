import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "../waitlist/waitlist-dialog";
import { MailIcon } from "lucide-react";

export function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="container flex items-center flex-col space-y-2 pt-4 pb-24"
    >
      <h3 className="text-2xl md:text-3xl font-semibold text-center">
        Pronto para transformar seus eventos?
      </h3>
      <p className="text-muted-foreground max-w-xl text-center pb-4">
        Fique por dentro das novidades e receba dicas exclusivas para organizar
        eventos inesquecíveis.
      </p>
      <WaitlistDialog>
        <Button>
          <MailIcon className="size-4 mr-2" />
          Quero participar da lista de espera
        </Button>
      </WaitlistDialog>
    </section>
  );
}
