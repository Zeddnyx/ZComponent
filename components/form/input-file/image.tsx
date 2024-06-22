"use client";
import { useState } from "react";

import FileInput from "@/components/ui/form/File";
import { cn } from "@/lib/utils";

export default function Image() {
  const [file, setFile] = useState<File[]>([]);
  return (
    <FileInput file={file} setFile={setFile} name="file" preview="img" accept="file">
      <div
        className={cn(`h-20 flex items-center flex-col justify-center p-2`, {})}
      >
        <p>Click here</p>
        <p>or drag and drop here</p>
      </div>
    </FileInput>
  );
}
