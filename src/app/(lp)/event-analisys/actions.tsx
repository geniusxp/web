"use server";

import { render } from "@react-email/components";
import { EventRecommendationsEmail } from "@/components/emails/event-recommendations";
import { mailTransporter } from "@/lib/email";
import { addUserToNewsletter } from "@/data/newsletter";

export async function sendAnalisysToEmail(
  defaultData: { event: string },
  formData: FormData
) {
  const event = defaultData.event;
  const userName = formData.get("name") as string;
  const email = formData.get("email") as string;

  const emailHtml = await render(
    EventRecommendationsEmail.bind(null, {
      userName,
      event,
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

    return {
      isSubmitted: true,
      event,
    };
  } catch (error) {
    console.error(error);

    return {
      error: (error as Error).message,
      isSubmitted: false,
      event,
    };
  }
}
