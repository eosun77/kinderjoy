import React from 'react';
import { fetchStudents } from '@/services/student';
import StudentLottery from '@/components/organisms/StudentLottery';

async function Lottery() {
  const students = await fetchStudents();
  return <StudentLottery students={students} />;
}

export default Lottery;
