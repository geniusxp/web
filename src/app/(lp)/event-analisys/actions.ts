"use server";

import { EventRecommendationsEmail } from "@/components/emails/event-recommendations";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendAnalisysToEmail(
  prevState: any,
  formData: FormData
): Promise<{
  isSubmitted: boolean;
  data?: any;
  error?: any;
}> {
  const userName = formData.get("name") as string;
  const email = formData.get("email") as string;

  try {
    const { error } = await resend.emails.send({
      from: "GeniusXP <contato@geniusxp.tech>",
      to: [email],
      subject: "Recomendações do GeniusXP para o FIAP NEXT 2024!",
      react: EventRecommendationsEmail({ userName }),
    });

    if (error) {
      return {
        error,
        isSubmitted: false,
      };
    }

    return {
      isSubmitted: true,
    };
  } catch (error) {
    console.error(error);

    return {
      error,
      isSubmitted: false,
    };
  }
}
