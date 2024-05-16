"use client";

import { useState } from "react";

import Input from "@/components/ui/form/Input";
import SuggestList from "./SuggestList";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = (value: string) => {
    setIsOpen(!isOpen);
    setForm({ ...form, name: value });
  };

  const filterData = data.filter((item) => {
    return item.toLowerCase().includes(form.name.toLowerCase());
  })

  return (
    <div>
      <div className="relative h-80">
        <Input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Search Name Here..."
          onKeyDown={() => setIsOpen(true)}
        />
        <SuggestList
          data={filterData}
          isOpen={isOpen}
          onClick={(value) => handleClick(value)}
        />
      </div>
    </div>
  );
}

const data = ["Jhon", "Doe", "Em", "Lil Peep", "21 Savage", "Harry Mack"];
