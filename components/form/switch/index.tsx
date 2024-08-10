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
    <div className="flex flex-wrap items-center gap-10">
      <Switch
        label="Default"
        name="switch"
        onChange={handleChange}
        checked={form.switch}
      />
      <Switch
        label="Always On"
        name="always_active"
        onChange={handleChange}
        checked={form.always_active}
        isAlwaysOn
      />
      <Switch
        label="Default inline"
        name="switch"
        onChange={handleChange}
        checked={form.switch}
        isInline
      />
      <Switch
        label="Always On inline"
        name="always_active"
        onChange={handleChange}
        checked={form.always_active}
        isAlwaysOn
        isInline
      />
    </div>
  );
}
