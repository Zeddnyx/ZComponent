"use client";
import { useState } from "react";

import FileInput from "@/components/shared/form/File";

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
      <div className="flex flex-col items-center justify-center p-2">
        <p>Click here</p>
        <p>or drag and drop here</p>
      </div>
    </FileInput>
  );
}
