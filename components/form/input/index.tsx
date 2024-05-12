"use client";

import Input from "@/components/ui/form/Input";
import { useState } from "react";

export default function Index() {
  const [form, setForm] = useState({
    name: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return <Input name="name" value={form.name} onChange={handleChange} />;
}
