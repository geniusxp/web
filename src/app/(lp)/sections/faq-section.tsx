import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "O que é o GeniusXP?",
    answer:
      "O GeniusXP é uma plataforma de gerenciamento 360 de eventos, que utiliza inteligência artificial para otimizar a experiência dos participantes e organizadores. Oferecemos desde a preparação e compra até a análise pós-evento, gerando insights valiosos e ajudando na conversão de leads.",
  },
  {
    question: "Como utilizamos Inteligência Artificial?",
    answer:
      "A inteligência artificial é utilizada para analisar sentimentos dos participantes, gerar recomendações personalizadas de estandes e projetos, prever tendências de interação, e automatizar tarefas como o envio de e-mails personalizados e a análise de emoções.",
  },
  {
    question: "Quais tipos de eventos o GeniusXP pode gerenciar?",
    answer:
      "O GeniusXP é flexível e pode ser utilizado em diversos tipos de eventos, como conferências, feiras, workshops, hackathons, seminários e outros eventos corporativos ou acadêmicos.",
  },
  {
    question: "Que tipos de dados são coletados e analisados pelo GeniusXP?",
    answer:
      "Coletamos dados como interações dos participantes, locais mais frequentados, vendas, feedback em enquetes, análise de emoções, entre outros. Esses dados ajudam a gerar insights detalhados sobre o comportamento e preferências dos participantes.",
  },
  {
    question: "Quais são os benefícios para os organizadores de eventos?",
    answer:
      "Os organizadores podem otimizar a logística do evento, entender melhor o comportamento dos participantes, identificar os momentos de maior interação, e gerar relatórios automáticos com insights detalhados para aprimorar eventos futuros.",
  },
  {
    question:
      "Como o GeniusXP ajuda a aumentar o engajamento dos participantes?",
    answer:
      "Utilizamos gamificação, recomendações personalizadas e análise de sentimentos para oferecer experiências únicas e interativas. Isso ajuda a manter os participantes engajados durante todo o evento.",
  },
  {
    question:
      "Como posso integrar o GeniusXP com outras ferramentas que já utilizo?",
    answer:
      "Resposta: O GeniusXP possui APIs e opções de integração que permitem conectá-lo a diversas ferramentas de CRM, marketing e análise de dados. Entre em contato com o nosso suporte para mais informações sobre integrações específicas.",
  },
];

export function FaqSection() {
  return (
    <section
      id="how-it-works"
      className="container flex items-center flex-col space-y-2 py-8"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-center pb-8">
        Perguntas frequentes
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full max-w-screen-lg space-y-4"
      >
        {questions.map(({ question, answer }, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border rounded-lg px-8"
          >
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
