import React from "react";
import submit from "./action";
import Link from "next/link";
import SubmitButton from "@/components/SubmitButton";

function Add() {
  return (
    <>
      <form action={submit}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <SubmitButton />
      </form>
      <Link href={"/user"}>back</Link>
    </>
  );
}

export default Add;
