import Image from "next/image";
import { MdClose } from "react-icons/md";

export default function PreviewImg({
  file,
  handleDelete,
}: {
  file: File | null;
  handleDelete: () => void;
}) {
  if (!file) return null;

  return (
    <div className="relative size-40 bg-dark-400 rounded-lg">
      <Image
        src={URL?.createObjectURL(file)}
        alt={file?.name}
        className="size-40 object-cover"
        width={40}
        height={40}
      />
      <MdClose
        className="size-6 absolute top-0 right-0 cursor-pointer transition-colors bg-red-500 rounded-bl-lg rounded-tr-lg"
        size={15}
        onClick={handleDelete}
      />
    </div>
  );
}
