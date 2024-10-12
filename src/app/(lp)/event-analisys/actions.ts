"use server";

export async function sendAnalisysToEmail(prevState: any, data: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log(data);

  return {
    isSubmitted: true,
  };
}
