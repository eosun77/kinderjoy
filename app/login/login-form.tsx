"use client";

import React from "react";
import { useFormState } from "react-dom";

import { login } from "./action";

import SubmitButton from "@/components/SubmitButton";

const initialState = {
  message: "",
};

function LoginForm() {
  const [state, formAction] = useFormState(login, initialState);

  return (
    <form action={formAction}>
      <input type="text" name="name" />
      <div>{state?.message}</div>
      <SubmitButton />
    </form>
  );
}

export default LoginForm;
