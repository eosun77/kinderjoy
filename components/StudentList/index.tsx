'use client';
import React, { useState } from 'react';

import style from './style.module.css';

import { Student } from '@prisma/client';

interface Props {
  students: Student[];
}
function StudentList({ students }: Props) {
  const [result, setResult] = useState<Student[]>([]);

  const addRandomStudent = () => {
    // Filter out students already in the list
    const availableStudents = students.filter(
      (student) => !result.some((s) => s.id === student.id)
    );

    // Check if there are any students left to add
    if (availableStudents.length === 0) {
      alert('모든 학생이 이미 목록에 있습니다.'); // Alert if no students left
      return;
    }

    // Select a random student from the remaining students
    const randomStudent =
      availableStudents[Math.floor(Math.random() * availableStudents.length)];

    // Update the list with the new random student
    setResult((prevResult) => [...prevResult, randomStudent]);
  };

  return (
    <div className={style.layout}>
      <button className={style.button} onClick={addRandomStudent}>
        뽑기
      </button>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
      <ul>
        {result.map((student, index) => (
          <li key={student.id}>{`${index}. ${student.name}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
