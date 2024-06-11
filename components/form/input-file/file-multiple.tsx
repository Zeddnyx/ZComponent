"use client";
import Button from "@/components/ui/component/Button";
import FileInput from "@/components/ui/form/File";
import { useState } from "react";

export default function File() {
  const [file, setFile] = useState();
  return (
    <FileInput file={file} setFile={setFile} name="file" preview="file">
      <Button text="Click here" />
      <p>or drag and drop</p>
    </FileInput>
  );
}
