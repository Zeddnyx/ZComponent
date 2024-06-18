"use client";
import Image from "next/image";
import { useState } from "react";

import styles from "@/styles/component/acordion.module.css";
import { cn } from "@/lib/utils";

export default function AcordionImage({
  title,
  image,
  description,
  className,
  logo,
}: IAcordionImage) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(`${styles.acordionImage} group hover:w-80`, {
        "!w-full !h-80": isOpen,
        className,
      })}
    >
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className={cn("group-hover:w-80", {
          "!w-full !h-80": isOpen,
        })}
      />
      <div role="button" onClick={() => setIsOpen(!isOpen)}>
        {logo && logo}
        <h3>{title}</h3>
      </div>
      <div
        className={cn(
          "group-hover:max-h-fit group-hover:py-5 group-hover:md:max-w-fit ",
          {
            "max-h-fit py-5 md:max-w-fit": isOpen,
            "max-h-0 md:max-w-0": !isOpen,
          },
        )}
      >
        <p>{description}</p>
      </div>
    </div>
  );
}
