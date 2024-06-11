import { convertSizeBytes } from "@/lib/utils";
import { FaFile } from "react-icons/fa";

export default function PreviewFile({ file }: { file: File }) {
  return (
    <div>
      <FaFile />
      <div>
        <p>{file?.name}</p>
        <p>{convertSizeBytes(file?.size)}</p>
      </div>
    </div>
  );
}
