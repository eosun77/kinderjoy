import { fetchStudents } from "@/services/student";
import React from "react";

async function StudentList() {
  const students = await fetchStudents();
  return (
    <div>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </div>
  );
}

export default StudentList;
