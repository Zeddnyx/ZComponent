import { useRef } from "react";

import PreviewFile from "@/components/form/input-file/preview-file";
import PreviewImg from "@/components/form/input-file/preview-img";

export default function File({
  file,
  name,
  label,
  setFile,
  children,
  className,
  isLoading,
  setIsLoading,
  preview = "img",
  isMultiple = false,
  accept = "image/*,.pdf",
  maxSize = 10 * 1024 * 1024, // 10MB
}: IUploadFile) {
  const refFile = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (file: File) => {
    const acceptedTypes = ["image/jpeg", "image/png", "application/pdf"];

    if (file.size > maxSize) {
      alert("File is too large");
      return;
    }

    if (!acceptedTypes.includes(file.type)) {
      alert("Invalid file type");
      return;
    }

    try {
      setIsLoading && setIsLoading(true);
      isMultiple ? setFile([...(file as any)]) : setFile([file]);
    } catch (error) {
      alert(`Error occurred while uploading Error: ${error}`);
    } finally {
      setIsLoading && setIsLoading(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer?.files?.[0];
    file && (await handleFileUpload(file));
  };

  const handleClick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    file && (await handleFileUpload(file));
  };

  const handleDelete = async () => {
    const files = file.split("/").pop();
    // pass a func delete here
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={() => refFile.current?.click()}
      className="w-fit"
    >
      <input
        type="file"
        className="hidden"
        onChange={handleClick}
        accept={accept}
        name={name}
        ref={refFile}
      />

      {isMultiple && preview === "img" && file?.length > 0 && (
        <div className="flex gap-2">
          {file?.map((item, id) => {
            return <PreviewImg key={id} file={item} />;
          })}
        </div>
      )}
      {isMultiple && preview === "file" && file?.length > 0 && (
        <div className="flex gap-2">
          {file?.map((item, id) => {
            return <PreviewFile key={id} file={item} />;
          })}
        </div>
      )}
      {!isMultiple && preview === "img" && (
        <PreviewImg file={file && file[0]} />
      )}
      {!isMultiple && preview === "file" && (
        <PreviewFile file={file && file[0]} />
      )}
      {file?.length === 0 && children}
    </div>
  );
}
