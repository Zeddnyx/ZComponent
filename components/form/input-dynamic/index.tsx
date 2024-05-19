"use client";

import { useState } from "react";
import { MdDelete, MdOutlineAdd } from "react-icons/md";

import Input from "@/components/ui/form/Input";
import Button from "@/components/ui/Button";

export default function Index() {
  const [form, setForm] = useState([
    {
      name: "",
    },
  ]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    const { name, value } = event.target;
    const updatedForm = [...form] as any;
    updatedForm[id][name] = value;
    setForm(updatedForm);
  };

  const handleAction = (index: number, action: "add" | "delete") => {
    if (action === "delete") {
      const updatedForm = form.filter((_, id) => id !== index);
      setForm(updatedForm);
    } else {
      setForm([...form, { name: "" }]);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {form.map((item, id) => (
        <div key={id} className="flex items-center gap-2">
          <Input
            name="name"
            value={item.name}
            onChange={(e) => handleChange(e, id)}
            placeholder="type something here..."
          />
          {id > 0 && (
            <Button
              onClick={() => handleAction(id, "delete")}
              text={<MdDelete size={20} />}
              variant="danger"
            />
          )}
          {id === form.length - 1 && item.name && (
            <Button
              onClick={() => handleAction(id, "add")}
              text={<MdOutlineAdd size={20} />}
              className="!px-3"
            />
          )}
        </div>
      ))}
    </div>
  );
}
