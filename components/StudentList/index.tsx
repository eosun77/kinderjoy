import prisma from "@/prisma";
import React from "react";

async function StudentList() {
  const students = await prisma.student.findMany();
  return (
    <div>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </div>
  );
}

export default StudentList;
