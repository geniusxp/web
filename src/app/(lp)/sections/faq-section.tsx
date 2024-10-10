import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    question: "Pergunta 1?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sunt, quas recusandae exercitationem tempora dignissimos, veritatis laboriosam quos sit, tempore veniam iste quaerat sed nemo! Ipsam molestiae quo aut excepturi?",
  },
  {
    question: "Pergunta 2?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sunt, quas recusandae exercitationem tempora dignissimos, veritatis laboriosam quos sit, tempore veniam iste quaerat sed nemo! Ipsam molestiae quo aut excepturi?",
  },
  {
    question: "Pergunta 3?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sunt, quas recusandae exercitationem tempora dignissimos, veritatis laboriosam quos sit, tempore veniam iste quaerat sed nemo! Ipsam molestiae quo aut excepturi?",
  },
  {
    question: "Pergunta 4?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sunt, quas recusandae exercitationem tempora dignissimos, veritatis laboriosam quos sit, tempore veniam iste quaerat sed nemo! Ipsam molestiae quo aut excepturi?",
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
