"use client";

import { BotIcon, SparklesIcon, ZapIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: ZapIcon,
    title: "1. Avalie métricas e gere insights",
    description:
      "Monitore dados importantes do evento, como vendas, interações e emoções. Obtenha insights valiosos que ajudam a entender melhor o comportamento dos participantes e a identificar tendências.",
    image: "/prints/metrics.png",
    className: "border",
  },
  {
    icon: BotIcon,
    title: "2. Gerencie os dados com IA",
    description:
      "Utilize inteligência artificial para processar e organizar os dados automaticamente. A IA identifica padrões e gera relatórios que facilitam a tomada de decisões estratégicas.",
    image: "/prints/speakers.png",
    className: "border",
  },
  {
    icon: SparklesIcon,
    title: "3. Ofereça melhores experiências",
    description:
      "Personalize a experiência dos participantes com base nos insights gerados. Faça ajustes em tempo real e ofereça recomendações que tornam o evento mais interativo e envolvente.",
    image: "/prints/experience.png",
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="how-it-works"
      className="container flex items-center flex-col space-y-2 py-8"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Como funciona
      </h2>
      <p className="text-muted-foreground max-w-xl text-center pb-8">
        A GeniusXP é uma plataforma de gestão de eventos que permite que você
        crie, gerencie e promova eventos de forma simples e eficiente. Conheça
        nossos principais recursos:
      </p>

      <div className="grid lg:grid-cols-2 gap-14">
        <div className="grid gap-8">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <button
              className={cn(
                "items-center relative text-start md:flex",
                activeStep === index ? 'flex' : 'hidden'
               )}
              key={index}
              onClick={() => setActiveStep(index)}
            >
              <div className="absolute bottom-0 top-0 h-full w-0.5 overflow-hidden rounded-lg bg-card left-0">
                {activeStep === index && (
                  <motion.div
                    className="absolute left-0 top-0 w-full h-0 origin-top bg-primary "
                    animate={{ height: activeStep === index ? "100%" : 0 }}
                    transition={{
                      duration: 7,
                      ease: "linear",
                    }}
                    onAnimationComplete={() => {
                      if (activeStep === index) {
                        setActiveStep((prev) => (prev + 1) % steps.length);
                      }
                    }}
                  />
                )}
              </div>

              <div className="size-12 text-primary bg-primary/10 rounded-full sm:mx-6 mx-2 flex items-center justify-center">
                <Icon className="size-6" />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-md md:text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  {description}
                </p>
              </div>

              {activeStep === index && (
                <motion.div
                  className="absolute rounded-lg bg-primary/5 h-[calc(100%_+_2rem)] w-full"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{ scale: 1.05, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-center">
          {steps.map(({ image, className }, index) =>
            activeStep !== index ? null : (
              <motion.img
                src={image}
                alt=""
                className={cn(
                  "w-full aspect-video rounded-lg object-cover",
                  className
                )}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                key={index}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
