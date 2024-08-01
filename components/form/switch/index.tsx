"use client";
import Switch from "@/components/shared/form/Switch";
import { useState } from "react";

export default function Index() {
  const [form, setForm] = useState({
    switch: false,
    always_active: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setForm({ ...form, [name]: checked });
  };

  return (
    <div className="">
      <Switch name="switch" onChange={handleChange} checked={form.switch} />
      <Switch
        name="always_active"
        onChange={handleChange}
        checked={form.always_active}
        awlaysOn
      />
    </div>
  );
}
