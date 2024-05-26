"use client";
import { useState } from "react";

import Textarea from "@/components/ui/form/Textarea";

export default function Index() {
  const [form, setForm] = useState({
    description: "",
  });

  return (
    <div>
      <Textarea
        value={form.description}
        onChange={(event) => setForm({ ...form, description: event.target.value })}
        label="Description"
      />
    </div>
  );
}
