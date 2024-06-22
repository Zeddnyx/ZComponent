import { convertSizeBytes } from "@/lib/utils";
import { FaFile } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export default function PreviewFile({
  file,
  handleDelete,
}: {
  file: File;
  handleDelete: () => void;
}) {
  return (
    <div className="flex justify-between h-16 w-full items-center rounded-lg !p-0 bg-dark-400">
      <div className="p-1 px-2 flex justify-start items-center gap-4">
        <FaFile size={35} />
        <div>
          <p>{file?.name}</p>
          <p className="text-xs">{convertSizeBytes(file?.size)}</p>
        </div>
      </div>
      <MdClose
        size={20}
        className="cursor-pointer h-full w-14 px-5 transition-colors hover:bg-red-500 rounded-tr-lg"
        onClick={handleDelete}
      />
    </div>
  );
}
