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
  Text
} from "@react-email/components";
import * as React from "react";

interface EventRecommendationsEmailProps {
  userName?: string;
}

const websiteUrl = "https://geniusxp.tech";

export function EventRecommendationsEmail({
  userName,
}: EventRecommendationsEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Recomendações do GeniusXP para o FIAP NEXT 2024!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${websiteUrl}/logo-background.svg`}
            width={64}
            height={64}
            alt="GeniusXP"
          />
          <Heading style={heading}>
            Suas recomendações para o FIAP NEXT 2024 estão disponíveis! 🤩
          </Heading>
          <Section style={body}>
            <Text style={paragraph}>
              Olá, <strong>{userName}</strong>!
            </Text>
            <Text style={paragraph}>
              Estamos super felizes por você estar participando do FIAP Next
              2024 com o apoio do{" "}
              <Link style={link} href={websiteUrl}>
                GeniusXP
              </Link>
              ! Com base nos seus interesses, aqui estão as recomendações
              personalizadas dos estandes e projetos que mais combinam com o que
              você está buscando:
            </Text>

            <Text style={heading2}>🔥 Destaques selecionados para você:</Text>
            <ul>
              <li style={listItem}>
                <strong>Projeto 1</strong> - Conheça o projeto de realidade
                aumentada que revoluciona a educação.
              </li>
              <li style={listItem}>
                <strong>Projeto 2</strong> - Descubra como a inteligência
                artificial está transformando a saúde.
              </li>
              <li style={listItem}>
                <strong>Projeto 3</strong> - Participe de uma experiência
                imersiva com tecnologias de ponta.
              </li>
              <li style={listItem}>
                <strong>Projeto 4</strong> - Conheça o projeto de
                sustentabilidade que está mudando o mundo.
              </li>
              <li style={listItem}>
                <strong>Projeto 5</strong> - Explore a nova plataforma de
                streaming que vai revolucionar o entretenimento.
              </li>
            </ul>
          </Section>
          <Section style={tip}>
            <Text style={paragraph}>
              <strong>💡 Dica GeniusXP</strong>: Aproveite ao máximo o evento
              visitando esses estandes e projetos, participe das atividades e
              fique atento às oportunidades de networking!
            </Text>
          </Section>
          <Text style={paragraph}>
            Estamos ansiosos para ver você explorando o FIAP NEXT 2024 com
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
            src={`${websiteUrl}/logo-background.svg`}
            width={32}
            height={32}
            style={{
              WebkitFilter: "grayscale(100%)",
              filter: "grayscale(100%)",
              margin: "20px 0",
            }}
          />
          <Text style={footer}>
            © 2024 GeniusXP. Todos os direitos reservados.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default EventRecommendationsEmail;

EventRecommendationsEmail.PreviewProps = {
  userName: "Erick Nathan",
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

const body = {
  margin: "24px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  opacity: 0.9,
};

const listItem = {
  fontSize: "16px",
  opacity: 0.9,
};

const link = {
  color: "#8B5CF6",
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
  backgroundColor: "#09090B44",
  padding: "0px 16px",
  borderRadius: "8px",
  marginTop: "24px",
  marginBottom: "24px",
};
