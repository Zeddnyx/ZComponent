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
    <div className="flex flex-col gap-5">
      <Input
        labelSide="left"
        label="Solid"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        variant="solid"
      />
      <Input
        labelSide="left"
        label="Outline"
        name="name"
        value={form.name}
        onChange={handleChange}
        logo={<IoPersonSharp />}
        placeholder="Name"
        variant="outline"
      />
      <Input
        labelSide="left"
        label="Underline"
        name="name"
        value={form.name}
        onChange={handleChange}
        logo={<IoPersonSharp />}
        placeholder="Name"
        variant="underline"
      />
      <Input
        labelSide="left"
        label="None"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        logo={<MdEmail />}
        placeholder="Email"
        variant="none"
      />
    </div>
  );
}
