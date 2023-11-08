import prisma from "@/prisma";
import { Prisma } from "@prisma/client";

export async function GET() {
  console.log("get!");
  const users = await prisma.user.findMany();
  return new Response(JSON.stringify(users), { status: 200 });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email } = body;

  if (!name || !email) {
    return new Response(
      JSON.stringify({ message: "Name and email are required." }),
      { status: 400 }
    );
  }
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error: unknown) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return new Response(
        JSON.stringify({ message: "중복된 이메일이 있습니다" }),
        {
          status: 501,
        }
      );
    }

    return new Response(JSON.stringify({ message: "서버 오류" }), {
      status: 500,
    });
  }
}
