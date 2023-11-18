import React from 'react';

import { Student } from '@prisma/client';

interface Props {
  students: Student[];
}
function StudentList({ students }: Props) {
  return (
    <div>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </div>
  );
}

export default StudentList;
