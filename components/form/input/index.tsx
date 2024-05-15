"use client";

import { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import Input from "@/components/ui/form/Input";

export default function Index() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="flex flex-col gap-3">
      <Input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <Input
        name="name"
        value={form.name}
        onChange={handleChange}
        label="Name"
        logo={<IoPersonSharp />}
        isLoading
        placeholder="Name"
      />
      <Input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        label="Email"
        logo={<MdEmail />}
        error="error"
        placeholder="Email"
      />
    </div>
  );
}
