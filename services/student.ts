import prisma from "@/prisma";

export const fetchStudents = () => {
  return prisma.student.findMany();
};
