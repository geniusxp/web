import { redirect } from "next/navigation";

export default function DefaultApp() {
  return redirect("/events");
}
