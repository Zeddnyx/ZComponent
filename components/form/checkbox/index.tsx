"use client";
import Checkbox from "@/components/shared/form/Checkbox";
import { useState } from "react";

export default function Index() {
  const [form, setForm] = useState({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  });

  const checboxData = [
    {
      value: form.xs,
      size: "xs",
      label: "xs",
      name: "xs",
    },
    {
      value: form.sm,
      size: "sm",
      label: "sm",
      name: "sm",
    },
    {
      value: form.md,
      size: "md",
      label: "md",
      name: "md",
    },
    {
      value: form.md,
      size: "md",
      label: "disable",
      name: "disable",
    },
    {
      value: form.lg,
      size: "lg",
      label: "lg",
      name: "lg",
    },
    {
      value: form.xl,
      size: "xl",
      label: "xl",
      name: "xl",
    },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setForm({ ...form, [name]: checked });
  };

  return (
    <div className="w-1/6 flex flex-row flex-wrap gap-10">
      {checboxData.map(({ value, size, label, name }) => (
        <Checkbox
          key={name}
          value={value}
          checked={value}
          onChange={handleChange}
          isDisabled={name === "disable"}
          label={label}
          name={name}
          size={size as any}
        />
      ))}
    </div>
  );
}
