"use client";
import { useState } from "react";

import DropDown from "@/components/ui/form/DropdownCheckbox";
import { OPTOONS } from "@/constants/index";

export default function Index() {
  const [label, setLabel] = useState("");
  const [form, setForm] = useState({
    name: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="grid gap-4">
      <DropDown
        options={OPTOONS}
        value={label}
        setValue={setLabel}
        name="name"
        onChange={handleChange}
      />
    </div>
  );
}
