import Link from "next/link";
import React from "react";

async function getUsers() {
  const res = await fetch("http://localhost:3000/api/user");

  return res.json();
}

const User = async () => {
  const res: User[] = await getUsers();

  return (
    <div>
      {res.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      <Link href={"user/add"}>add</Link>
    </div>
  );
};

export default User;
