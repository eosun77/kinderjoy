import prisma from "@/prisma";

export async function POST(req: Request) {
  const data = await req.json();
  const name = data.name;

  try {
    const user = await prisma.user.findUnique({ where: { name } });
    if (!user)
      return Response.json(
        { message: "일치하는 사용자가 없습니다." },
        { status: 404 }
      );
    return Response.json({ data: user }, { status: 200 });
  } catch {
    return Response.json({ message: "데이터베이스 오류" }, { status: 500 });
  }
}
