"use client";
import { useState } from "react";
import { FaAudioDescription } from "react-icons/fa6";

import Textarea from "@/components/ui/form/Textarea";

export default function Index() {
  const [form, setForm] = useState({
    description: "",
    logo: "",
    error: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="flex flex-col gap-4">
      <Textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        label="Description"
      />
      <Textarea
        name="logo"
        logo={<FaAudioDescription />}
        value={form.logo}
        onChange={handleChange}
        label="Logo"
      />
      <Textarea
        name="error"
        value={form.error}
        onChange={handleChange}
        label="Error"
        error="error"
      />
    </div>
  );
}
