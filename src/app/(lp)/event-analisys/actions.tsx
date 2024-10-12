"use server";

import { render } from "@react-email/components";
import { EventRecommendationsEmail } from "@/components/emails/event-recommendations";
import { mailTransporter } from "@/lib/email";

export async function sendAnalisysToEmail(
  _: any,
  formData: FormData
): Promise<{
  isSubmitted: boolean;
  data?: any;
  error?: any;
}> {
  const userName = formData.get("name") as string;
  const email = formData.get("email") as string;

  const emailHtml = await render(
    EventRecommendationsEmail.bind(null, {
      userName,
    })()
  );

  try {
    await mailTransporter.sendMail({
      from: "GeniusXP <contato@geniusxp.tech>",
      to: email,
      subject: "Recomendações do GeniusXP para o FIAP NEXT 2024!",
      html: emailHtml
    });

    return {
      isSubmitted: true,
    };
  } catch (error) {
    console.error(error);

    return {
      error: (error as Error).message,
      isSubmitted: false,
    };
  }
}
