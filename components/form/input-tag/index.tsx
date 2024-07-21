"use client";
import { useState } from "react";

import Input from "@/components/shared/form/Input";
import Tag from "@/components/form/input-tag/tag";
import styles from "@/styles/component/form.module.css";

export default function Index() {
  const [form, setForm] = useState({
    name: "",
  });
  const [stored, setStored] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      (event.key === "Enter" || event.key === " ") &&
      form.name.trim() !== ""
    ) {
      setStored([...stored, form.name.trim()]);
      setForm({ ...form, name: "" });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && form.name === "" && stored.length > 0) {
      const lastTag = stored[stored.length - 1];
      setForm({ ...form, name: lastTag });
      setStored(stored.slice(0, -1));
    }
  };

  return (
    <div className={styles.parentTag}>
      <Tag data={stored} setData={setStored} />
      <Input
        name="name"
        value={form.name}
        onChange={handleChange}
        variant="none"
        onKeyPress={handleKeyPress}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
