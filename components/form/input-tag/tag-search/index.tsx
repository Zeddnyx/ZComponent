"use client";
import { useEffect, useState } from "react";

import Input from "@/components/ui/form/Input";
import Tag from "@/components/form/input-tag/tag";
import SuggestList from "../../input-suggest/SuggestList";
import styles from "@/styles/component/form.module.css";
import { RANDOM_NAME } from "@/constants";

export default function Index() {
  const [form, setForm] = useState({
    name: "",
  });
  const [stored, setStored] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (form.name.trim().length > 1) {
      setIsOpen(true);
    }
    if (
      (key === "Enter" || key === " " || key === ",") &&
      form.name.trim() !== ""
    ) {
      setStored([...stored, form.name.trim()]);
      setForm({ ...form, name: "" });
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && form.name === "" && stored.length > 0) {
      const lastTag = stored[stored.length - 1];
      setForm({ ...form, name: lastTag });
      setStored(stored.slice(0, -1));
    }
  };

  const handleClick = (item: string) => {
    setStored([...stored, item]);
    setForm({ ...form, name: "" });
    setIsOpen(false);
  };

  useEffect(() => {
    !form.name && setIsOpen(false);
  }, [form.name]);

  return (
    <div className={styles.parentTag}>
      <Tag data={stored} setData={setStored} />
      <div>
        <Input
          name="name"
          value={form.name}
          onChange={handleChange}
          variant="none"
          onKeyPress={handleKeyPress}
          onKeyDown={handleKeyDown}
          placeholder="Type here..."
          className="w-fit"
        />
        <SuggestList
          data={RANDOM_NAME}
          isOpen={isOpen}
          searchValue={form.name}
          onClick={handleClick}
          highlightSelected={(item) =>
            stored.includes(item) ? styles.tagListActive : ""
          }
        />
      </div>
    </div>
  );
}
