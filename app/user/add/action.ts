"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function createUser(name: string, email: string) {
  const res = await fetch("http://localhost:3000/api/user", {
    method: "POST",
    body: JSON.stringify({ name, email }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function submit(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  await createUser(name, email);
  revalidatePath("/user");
  redirect("/user");
}
