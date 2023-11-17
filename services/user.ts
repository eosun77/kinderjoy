import prisma from "@/prisma";

export function isValidName(name: unknown) {
  return name && typeof name === "string" && name.trim().length > 0;
}

export async function findUserByName(name: string) {
  return await prisma.user.findUnique({ where: { name } });
}
