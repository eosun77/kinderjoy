'use client';
import React, { useState } from 'react';

import style from './style.module.css';

import { Student } from '@prisma/client';

interface Props {
  students: Student[];
}
function StudentLottery({ students }: Props) {
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);

  const addRandomStudent = () => {
    const availableStudents = students.filter(
      (student) =>
        !selectedStudents.some((selected) => selected.id === student.id)
    );

    if (availableStudents.length === 0) {
      alert('모든 학생이 이미 목록에 있습니다.');
      return;
    }

    const randomStudent =
      availableStudents[Math.floor(Math.random() * availableStudents.length)];

    setSelectedStudents((prevSelectedStudents) => [
      ...prevSelectedStudents,
      randomStudent,
    ]);
  };

  const resetSelectedStudents = () => {
    setSelectedStudents([]);
  };

  return (
    <main className={style.layout}>
      <div className={style.header}>
        <h1>순서 뽑기</h1>
        <h2>차례차례 질서를 지켜요😍</h2>
      </div>
      <div className={style.contents}>
        <div className={style.left}></div>
        <div className={style.center}>
          <div className={style.action}>
            <button className={style.button} onClick={addRandomStudent}>
              뽑기
            </button>
            <button className={style.button} onClick={resetSelectedStudents}>
              초기화
            </button>
          </div>
        </div>
        <ul className={style.right}>
          {selectedStudents.map((student, index) => (
            <li key={student.id} className={style.listItem}>
              {`${index + 1}. ${student.name}`}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default StudentLottery;
