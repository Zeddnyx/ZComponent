"use client";
import Button from "@/components/ui/component/Button";
import FileInput from "@/components/ui/form/File";
import { useState } from "react";

export default function Image() {
  const [file, setFile] = useState<File[]>([]);
  return (
    <FileInput file={file} setFile={setFile} name="file" preview="img" isMultiple>
      <Button text="Click here" />
      <p>or drag and drop</p>
    </FileInput>
  );
}
