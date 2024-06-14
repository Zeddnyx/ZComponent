"use client";
import FileInput from "@/components/ui/form/File";
import { useState } from "react";

export default function File() {
  const [file, setFile] = useState<File[]>([]);
  return (
    <FileInput
      file={file}
      setFile={setFile}
      name="file"
      preview="file"
      isMultiple
    >
      <p className="hover:underline">Click here</p>
      <p>or drag and drop</p>
    </FileInput>
  );
}
