"use client";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

import styles from "@/styles/component/acordion.module.css";

const variantClasses = {
  solid: styles.acordionSolid,
  underline: styles.acordionUnderline,
  none: styles.acordionNone,
};

function Acordion({ title, children, variant = "solid" }: IAcordion) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.acordion} ${variantClasses[variant]}`}>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <IoIosArrowUp size={20} className={isOpen ? "" : "rotate-180"} />
      </button>
      <div className={isOpen ? "max-h-fit py-5" : "max-h-0"}>{children}</div>
    </div>
  );
}

export default Acordion;
