"use server";

import { addUserToNewsletter } from "@/data/newsletter";

export async function addToNewsletter(
  _: any,
  formData: FormData
) {
  const userName = formData.get("name") as string;
  const email = formData.get("email") as string;

  try {
    await addUserToNewsletter({ name: userName, email });

    return {
      isSubmitted: true,
    };
  } catch (error) {
    console.error(error);

    return {
      isSubmitted: false,
    };
  }
}
