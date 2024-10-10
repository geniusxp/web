import Image from "next/image";

import { EngagementAnimation } from "@/components/app/engagement-animation";
import { IntegrationsAnimation } from "@/components/app/integrations-animation";
import { BentoCard } from "@/components/ui/bento-card";
import { Calendar } from "@/components/ui/calendar";

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="container flex items-center flex-col space-y-2 py-8"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Conheça nossos benefícios
      </h2>
      <p className="text-foreground/80 max-w-xl text-center pb-8">
        Descubra como a GeniusXP pode transformar a gestão de eventos e
        proporcionar experiências inesquecíveis para seus participantes
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-4 w-full">
        <BentoCard
          title="Potencialize Experiências"
          description="Resumos de palestras, relatórios com insights e mais, tudo impulsionado por Inteligência Artificial."
          icon="/emotions/the-robot.png"
          className="md:row-span-2"
        />
        <BentoCard
          title="Integrações poderosas"
          description="Integração com redes sociais e outras ferramentas para potencializar a experiência do participante."
          icon="/emotions/crystal-ball.png"
          className="md:col-span-2"
        >
          <div className="flex items-center justify-center absolute inset-x-0 bottom-4 size-full">
            <IntegrationsAnimation />
          </div>
        </BentoCard>
        <BentoCard
          title="Engaje seus participantes"
          description="Facilite a interação dos participantes em tempo real tornando a experiência mais dinâmica."
          icon="/emotions/raising-hand.png"
          className="md:row-span-2"
        >
          <div className="absolute w-full [mask-image:linear-gradient(to_top,transparent_10%,#000_60%)] max-md:h-[280px]">
            <EngagementAnimation className="border-none bg-transparent" />
          </div>
        </BentoCard>
        <BentoCard
          title="Evento à moda do participante"
          description="Personalize a experiência do participante com base em suas preferências e comportamentos."
          icon="/emotions/sunglasses.png"
        >
          <Calendar
            mode="single"
            selected={new Date(2022, 4, 11, 0, 0, 0)}
            className="bg-muted/25 absolute scale-110 right-0 top-10 origin-top rounded-md border [mask-image:linear-gradient(to_top,transparent_50%,#000_80%)] pointer-events-none"
          />
        </BentoCard>
        <BentoCard
          title="Aumente sua produtividade"
          description="Automatize tarefas e processos, otimize a gestão de eventos e garanta a segurança dos dados."
          icon="/emotions/speech-bubble.png"
        >
          <Image
            src="/qrcode.png"
            height={410}
            width={557}
            alt=""
            className="w-72 mx-auto p-4 [mask-image:linear-gradient(to_top,transparent_10%,#000_70%)] pointer-events-none"
          />
        </BentoCard>
        <BentoCard
          title="Avalie e otimize"
          description="Acompanhe o desempenho do seu evento em tempo real e tome decisões mais assertivas."
          icon="/emotions/star.png"
        />
      </div>
    </section>
  );
}
