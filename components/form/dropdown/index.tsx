"use client";
import { useState } from "react";

import DropDown from "@/components/ui/form/Dropdown";
import { OPTOONS } from "@/constants/index";

export default function Index() {
  const [form, setForm] = useState({
    name: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="grid gap-4">
      <DropDown options={OPTOONS} name="name" onChange={handleChange} />
      <DropDown
        options={OPTOONS}
        name="name"
        onChange={handleChange}
        error="Please select name!"
      />
    </div>
  );
}
