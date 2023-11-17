import prisma from "@/prisma";

export async function login(prevState: any, formData: FormData) {
  const name = formData.get("name");
  try {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    const data = await res.json();

    if (!res.ok) {
      return { message: data.message };
    }

    return { message: `Hello` };
  } catch (e) {
    return { message: "서버 오류" };
  }
}
