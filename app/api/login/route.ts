import prisma from "@/prisma";
import { findUserByName, isValidName } from "@/services/user";

export async function POST(req: Request) {
  const data = await req.json();
  const name = data.name;

  if (!isValidName(name)) {
    return Response.json(
      { message: "Invalid name provided." },
      { status: 400 }
    );
  }

  try {
    const user = await findUserByName(name);
    if (!user)
      return Response.json({ message: "User not found." }, { status: 404 });
    return Response.json({ data: user }, { status: 200 });
  } catch {
    return Response.json({ message: "Database error." }, { status: 500 });
  }
}
