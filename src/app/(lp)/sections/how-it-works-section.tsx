"use client";

import { SparklesIcon, UploadIcon, ZapIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: UploadIcon,
    title: "1. Upload Your Data",
    description:
      "Simply upload your data to our secure platform. We support various file formats and data types to ensure a seamless integration with your existing systems.",
    image: "/prints/metrics.png",
  },
  {
    icon: ZapIcon,
    title: "2. Click Start",
    description:
      "Our advanced AI algorithms automatically process and analyze your data, extracting valuable insights and patterns that would be difficult to identify manually.",
    image: "/prints/speakers.png",
  },
  {
    icon: SparklesIcon,
    title: "3. Get actionable insights",
    description:
      "Receive clear, actionable insights and recommendations based on the AI analysis. Use these insights to make data-driven decisions and improve your business strategies.",
    image: "/prints/schedule.png",
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

      <div className="grid grid-cols-2 gap-10">
        <div className="grid gap-8">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <button
              className="flex items-center relative text-start"
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
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            </button>
          ))}
        </div>
        {steps.map(({ image }, index) =>
          activeStep !== index ? null : (
            <motion.img
              src={steps[activeStep].image}
              alt=""
              className="w-full aspect-video rounded-lg border object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          )
        )}
      </div>
    </section>
  );
}
