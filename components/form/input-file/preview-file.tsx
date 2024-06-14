import { convertSizeBytes } from "@/lib/utils";
import { FaFile } from "react-icons/fa";

export default function PreviewFile({ file }: { file: File }) {
  return (
    <div className="flex justify-start w-full items-center gap-4 p-1 px-2 rounded-lg bg-dark-400">
      <FaFile size={35} />
      <div>
        <p>{file?.name}</p>
        <p className="text-xs">{convertSizeBytes(file?.size)}</p>
      </div>
    </div>
  );
}
