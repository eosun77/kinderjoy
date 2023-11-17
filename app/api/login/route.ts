import prisma from "@/prisma";

export async function POST(req: Request) {
  const data = await req.json();
  const name = data.name;

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return Response.json(
      { message: "Invalid name provided." },
      { status: 400 }
    );
  }

  try {
    const user = await prisma.user.findUnique({ where: { name } });
    if (!user)
      return Response.json({ message: "User not found." }, { status: 404 });
    return Response.json({ data: user }, { status: 200 });
  } catch {
    return Response.json({ message: "Database error." }, { status: 500 });
  }
}
