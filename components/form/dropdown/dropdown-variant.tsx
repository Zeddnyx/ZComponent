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
    <div className="grid gap-5">
      <DropDown
        label="Solid"
        labelSide="left"
        options={OPTOONS}
        name="name"
        onChange={handleChange}
      />
      <DropDown
        label="Outline"
        labelSide="left"
        variant="outline"
        options={OPTOONS}
        name="name"
        onChange={handleChange}
      />
      <DropDown
        label="Underline"
        labelSide="left"
        variant="underline"
        options={OPTOONS}
        name="name"
        onChange={handleChange}
      />
      <DropDown
        label="None"
        labelSide="left"
        variant="none"
        options={OPTOONS}
        name="name"
        onChange={handleChange}
      />
    </div>
  );
}
