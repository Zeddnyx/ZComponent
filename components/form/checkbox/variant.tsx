"use client";
import Checkbox from "@/components/ui/form/Checkbox";
import { useState } from "react";

export default function Index() {
  const [form, setForm] = useState({
    solid: "",
    outline: "",
    none: "",
  });

  const checboxData = [
    {
      value: form.solid,
      label: "solid",
      name: "solid",
    },
    {
      value: form.outline,
      label: "outline",
      name: "outline",
    },
    {
      value: form.none,
      label: "none",
      name: "none",
    },
  ];

  return (
    <div className="w-1/6 flex gap-10">
      {checboxData.map(({ value, label, name }) => (
        <Checkbox
          key={name}
          value={value}
          checked={value === "on"}
          onChange={() => setForm({ ...form, [name]: "on" })}
          label={label}
          variant={name as any}
          name={name}
          size={"md"}
        />
      ))}
    </div>
  );
}
