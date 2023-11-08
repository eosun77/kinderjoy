"use client";

import React from "react";
import { useFormStatus } from "react-dom";

import style from "./button.module.css";

function SubmitButton() {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <button className={style.button} type="submit" aria-disabled={pending}>
      Add
    </button>
  );
}

export default SubmitButton;
