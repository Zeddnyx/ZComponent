"use client";
import Checkbox from "@/components/shared/form/Checkbox";
import { useState } from "react";

export default function Index() {
  const [form, setForm] = useState({
    solid: false,
    outline: false,
    none: false,
  });

  const checboxData = [
    {
      value: form.solid,
      label: "solid",
      name: "solid",
    },
    {
      value: form.solid,
      label: "disable",
      name: "disable",
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setForm({ ...form, [name]: checked });
  };

  return (
    <div className="w-1/6 flex flex-row flex-wrap gap-10">
      {checboxData.map(({ value, label, name }) => (
        <Checkbox
          key={name}
          value={value}
          checked={value}
          onChange={handleChange}
          isDisabled={name === "disable"}
          label={label}
          variant={name as any}
          name={name}
          size={"md"}
        />
      ))}
    </div>
  );
}
