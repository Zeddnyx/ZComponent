"use client";

import { useEffect, useRef, useState } from "react";

import { KEYBOARD } from "@/configs/keyboard";
import { RANDOM_NAME } from "@/constants";

import Input from "@/components/ui/form/Input";
import SuggestList from "./SuggestList";
import useClickOutside from "@/hooks/useClickOutside";

export default function Index() {
  const inputRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState<string[] | any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    asyncName: "",
  });

  const filterData = RANDOM_NAME.filter((item) => {
    return item.toLowerCase().includes(form.name.toLowerCase());
  });
  const filterDataAsync = datas.filter((item: string) => {
    return item.toLowerCase().includes(form.asyncName.toLowerCase());
  });

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      event.key === KEYBOARD.ESCAPE && setIsOpen(false);
      if (event.key === KEYBOARD.ENTER) {
        const firstItem = filterData[0];
        setForm({ ...form, name: firstItem, asyncName: firstItem });
        setIsOpen(false);
        setDatas([]);
      }
    });
  }, [KEYBOARD.ESCAPE, KEYBOARD.ENTER, filterData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleClick = (value: string) => {
    setIsOpen(!isOpen);
    setForm({ ...form, name: value });
  };

  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(RANDOM_NAME);
      }, 2000);
    });
  };

  const displayData = async () => {
    try {
      setIsLoading(true);
      const result = await fetchData();
      setDatas(result);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useClickOutside(setIsOpen, inputRef);

  return (
    <div className="flex flex-col gap-4 " ref={inputRef}>
      <div className="relative">
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
          searchValue={form.name}
        />
      </div>

      <div className="relative">
        <Input
          name="asyncName"
          value={form.asyncName}
          onChange={handleChange}
          placeholder="Search Name Here..."
          onKeyDown={() => displayData()}
          isLoading={isLoading}
        />
        <SuggestList
          data={filterDataAsync}
          isOpen={datas.length > 0 && !isLoading}
          onClick={(value) => handleClick(value)}
          searchValue={form.name}
        />
      </div>
    </div>
  );
}
