import { connectToDatabase } from "@/lib/mongodb";

export async function addUserToNewsletter({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  try {
    const { db } = await connectToDatabase();

    const userAlreadyExists = await db
      .collection("newsletter")
      .findOne({ email });

    if (!userAlreadyExists) {
      await db.collection("newsletter").insertOne({
        name,
        email,
        createdAt: new Date(),
      });
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
