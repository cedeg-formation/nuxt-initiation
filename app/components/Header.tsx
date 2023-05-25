"use client";
import { useState } from "react";

export default function Header() {
  const [age, setAge] = useState(28);
  return (
    <header>
      <h1>Je suis le header {age}</h1>
    </header>
  );
}
