import React from 'react';
import StudentList from '@/components/StudentList';
import { fetchStudents } from '@/services/student';

async function Lottery() {
  const students = await fetchStudents();
  return (
    <div>
      Lottery
      <StudentList students={students} />
    </div>
  );
}

export default Lottery;
