"use client";
import Checkbox from "@/components/ui/form/Checkbox";
import { useState } from "react";

export default function Index() {
  const [checked, setChecked] = useState("");
  return (
    <div>
      <Checkbox
        value="test"
        checked={checked === "checked"}
        onChange={(e:any) => setChecked(e.target.checked ? "checked" : "")}
        label="test"
        name="test"
      />
    </div>
  );
}
