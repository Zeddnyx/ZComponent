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
    <div className="flex flex-col gap-10">
      <Input name="name" label="default" value={form.name} onChange={handleChange} placeholder="Name" />
      <Input name="name" label="Required" isRequired value={form.name} onChange={handleChange} placeholder="Name" />
      <Input
        name="name"
        value={form.name}
        onChange={handleChange}
        label="Loading"
        logo={<IoPersonSharp />}
        isLoading
        placeholder="Name"
      />
      <Input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        label="Error"
        logo={<MdEmail />}
        error="Email not valid"
        placeholder="Email"
      />
    </div>
  );
}
