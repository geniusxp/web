"use server";

import { render } from "@react-email/components";
import { cookies } from "next/headers";

import { EventRecommendationsEmail } from "@/components/emails/event-recommendations";
import { mailTransporter } from "@/lib/email";
import { addUserToNewsletter } from "@/data/newsletter";
import { getEventRecommendations } from "@/lib/ia/event-recommendations";

export async function sendAnalisysToEmail(
  defaultData: { event: string },
  formData: FormData
) {
  const event = defaultData.event;
  const userName = formData.get("name") as string;
  const email = formData.get("email") as string;
  const interests = formData.getAll("interests") as string[];

  const COOKIE_NAME = `geniusxp@recommendations/${event
    .toLowerCase()
    .replace(" ", "-")}/${email}`;

  if (interests.length > 5) {
    return {
      error: "Selecione até 5 segmentos de interesse.",
      isSubmitted: false,
      event,
    };
  }

  if (cookies().get(COOKIE_NAME)) {
    return {
      error:
        "Você já obteve recomendações para este evento recentemente, confira sua caixa de entrada...",
      isSubmitted: false,
      event,
    };
  }

  const recommendations = getEventRecommendations(event, interests);
  const emailHtml = await render(
    EventRecommendationsEmail.bind(null, {
      userName,
      event,
      recommendations,
    })()
  );

  try {
    await Promise.all([
      mailTransporter.sendMail({
        from: "GeniusXP <contato@geniusxp.tech>",
        to: email,
        subject: `Recomendações do GeniusXP para o ${event}!`,
        html: emailHtml,
      }),
      addUserToNewsletter({ name: userName, email }),
    ]);

    cookies().set(COOKIE_NAME, "true", {
      maxAge: 60 * 5, // 5 minutes
    });

    return {
      isSubmitted: true,
      event,
    };
  } catch (error) {
    console.error(error);

    return {
      error:
        "Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.",
      isSubmitted: false,
      event,
    };
  }
}
