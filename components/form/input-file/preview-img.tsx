import Image from "next/image";

export default function PreviewImg({ file }: { file: File|null }) {
  if(!file) return null

  return (
    <div>
      <Image
        src={URL?.createObjectURL(file)}
        alt={file?.name}
        className="size-40 rounded-lg object-cover"
        width={40}
        height={40}
      />
    </div>
  );
}
