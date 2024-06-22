import { useRef, useState } from "react";

import PreviewFile from "@/components/form/input-file/preview-file";
import PreviewImg from "@/components/form/input-file/preview-img";
import { cn } from "@/lib/utils";

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
  maxSize = 10 * 1024 * 1024, //10MB
  ...props
}: IUploadFile) {
  const refFile = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState(false);

  const handleFileUpload = async (files: File) => {
    const acceptedTypes = ["image/jpeg", "image/png", "application/pdf"];

    if (files.size > maxSize) {
      alert("File is too large");
      return;
    }

    if (!acceptedTypes.includes(files.type)) {
      alert("Invalid file type");
      return;
    }

    try {
      setIsLoading && setIsLoading(true);
      isMultiple ? setFile((prev) => [...prev, files]) : setFile([files]);
    } catch (error) {
      alert(`Error occurred while uploading Error: ${error}`);
    } finally {
      setIsLoading && setIsLoading(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsActive(false);
    const file = e.dataTransfer?.files?.[0];
    file && (await handleFileUpload(file));
  };

  const handleClick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    file && (await handleFileUpload(file));
  };

  const handleOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsActive(true);
  };

  const handleDelete = (id: number) => {
    setFile((file) => file.filter((_, index) => index !== id));
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleOver}
      onDragLeave={() => setIsActive(false)}
      className={cn(
        `h-fit w-full flex items-center flex-col justify-center p-2`,
        {
          "border-2 border-dashed": isActive,
        },
      )}
      {...props}
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
        <div className="flex flex-col gap-5 w-full">
          <div onClick={() => refFile.current?.click()}>{children}</div>
          <div className="flex gap-2 flex-wrap justify-between gap-y-4">
            {file?.map((item, id) => {
              return <PreviewImg key={id} file={item} handleDelete={() => handleDelete(id)} />;
            })}
          </div>
        </div>
      )}
      {isMultiple && preview === "file" && file?.length > 0 && (
        <div className="flex flex-col gap-5 w-full">
          <div onClick={() => refFile.current?.click()}>{children}</div>
          <div className="flex gap-2 flex-col items-center w-full">
            {file?.map((item, id) => {
              return (
                <PreviewFile
                  key={id}
                  file={item}
                  handleDelete={() => handleDelete(id)}
                />
              );
            })}
          </div>
        </div>
      )}
      {!isMultiple && preview === "img" && file?.length > 0 && (
        <PreviewImg file={file && file[0]} handleDelete={() => handleDelete(0)} />
      )}
      {!isMultiple && preview === "file" && file?.length > 0 && (
        <PreviewFile
          file={file && file[0]}
          handleDelete={() => handleDelete(0)}
        />
      )}
      {file?.length === 0 && (
        <div onClick={() => refFile.current?.click()}>{children}</div>
      )}
    </div>
  );
}
