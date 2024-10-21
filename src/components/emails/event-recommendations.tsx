import type { Project } from "@/models/Project";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EventRecommendationsEmailProps {
  userName: string;
  event: string;
  recommendations: Project[];
}

const websiteUrl = "https://www.geniusxp.tech";

export function EventRecommendationsEmail({
  userName,
  event,
  recommendations,
}: EventRecommendationsEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Olá, {userName}! Estamos super felizes por você estar participando do
        {event} com o apoio do GeniusXP!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${websiteUrl}/logo-background.png`}
            width={64}
            height={64}
            alt="GeniusXP"
          />
          <Heading style={heading}>
            Suas recomendações para o {event} estão disponíveis! 🤩
          </Heading>
          <Section style={body}>
            <Text style={paragraph}>
              Olá, <strong>{userName}</strong>!
            </Text>
            <Text style={paragraph}>
              Estamos super felizes por você estar participando do{" "}
              <strong>{event}</strong> com o apoio do{" "}
              <Link style={link} href={websiteUrl}>
                <strong>GeniusXP</strong>
              </Link>
              ! Com base nos seus interesses, aqui estão as recomendações
              personalizadas dos estandes e projetos que mais combinam com o que
              você está buscando:
            </Text>

            <Text style={heading2}>🔥 Destaques selecionados para você:</Text>
            {recommendations.map((project, index) => (
              <div key={project.nome}>
                <Text style={heading3}>
                  {index + 1}. {project.nome}
                </Text>
                <div style={{ marginLeft: "20px" }}>
                  <Text style={paragraph}>{project.descricao}</Text>
                  {project.local ? (
                    <Text style={paragraph}>
                      • Local: {Number.isInteger(project.local) ? "Ilha" : null}{" "}
                      {project.local}
                    </Text>
                  ) : null}
                  {project.horario ? (
                    <Text style={paragraph}>• Horário: {project.horario}</Text>
                  ) : null}
                  {project.url ? (
                    <Text style={paragraph}>
                      • Saiba mais sobre o projeto{" "}
                      <Link style={link} href={project.url}>
                        clicando aqui
                      </Link>
                    </Text>
                  ) : null}
                </div>
              </div>
            ))}
          </Section>
          <Section style={tip}>
            <Text style={paragraph}>
              <strong>💡 Dica GeniusXP</strong>: Aproveite ao máximo o evento
              visitando esses estandes e projetos, participe das atividades e
              fique atento às oportunidades de networking! Ah, e não se esqueça
              de visitar-nos na ilha 53 para saber mais sobre o GeniusXP.
            </Text>
          </Section>
          <Text style={paragraph}>
            Estamos ansiosos para ver você explorando o {event} com
            recomendações inteligentes que vão elevar sua experiência ao próximo
            nível!{" "}
            <Link style={link} href={websiteUrl}>
              Clique aqui
            </Link>{" "}
            para saber mais sobre o GeniusXP e como podemos impulsionar seu
            evento.
          </Text>
          <Text style={paragraph}>
            Abraços,
            <br />- Equipe GeniusXP
          </Text>
          <Hr style={hr} />
          <Img
            src={`${websiteUrl}/logo-background.png`}
            width={32}
            height={32}
            style={{
              WebkitFilter: "grayscale(100%)",
              filter: "grayscale(100%)",
              margin: "20px 0",
            }}
          />
          <Text style={footer}>
            © {new Date().getFullYear()} GeniusXP. Todos os direitos reservados.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default EventRecommendationsEmail;

EventRecommendationsEmail.PreviewProps = {
  userName: "Erick Nathan",
  event: "FIAP NEXT 2024",
  recommendations: [
    {
      nome: "Projeto 1",
      descricao:
        "Conheça o projeto de realidade aumentada que revoluciona a educação.",
      horario: "10:00 - 12:00",
      local: "Ilha 34",
    },
    {
      nome: "Projeto 2",
      descricao:
        "Descubra como a inteligência artificial está transformando a saúde.",
      horario: "14:00 - 16:00",
      local: "Ilha 21",
      url: "https://www.geniusxp.tech/projeto-2",
    },
    {
      nome: "Projeto 3",
      descricao:
        "Participe de uma experiência imersiva com tecnologias de ponta.",
    },
    {
      nome: "Projeto 4",
      descricao:
        "Conheça o projeto de sustentabilidade que está mudando o mundo.",
      horario: "16:00 - 18:00",
    },
    {
      nome: "Projeto 5",
      descricao:
        "Explore a nova plataforma de streaming que vai revolucionar o entretenimento.",
      local: "Ilha 53",
    },
  ],
} as EventRecommendationsEmailProps;

const main = {
  backgroundColor: "#09090B",
  color: "#FFFFFF",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
};

const heading2 = {
  fontSize: "24px",
  fontWeight: "bold",
  marginTop: "32px",
};

const heading3 = {
  fontSize: "18px",
  fontWeight: "bold",
};

const body = {
  margin: "24px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  opacity: 0.9,
  fontWeight: 400,
};

const link = {
  color: "#946bf2",
};

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
};

const tip = {
  backgroundColor: "#2F2F2F45",
  padding: "0px 16px",
  borderRadius: "8px",
  marginTop: "24px",
  marginBottom: "24px",
  border: "1px solid #444",
};
