import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import styles from "@/styles/component/form.module.css";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLastPath(path: string) {
  return path.split("/").pop();
}
export function convertSizeBytes(size: number) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (size == 0) return "n/a";
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return parseFloat((size / Math.pow(1024, i)).toFixed(2)) + " " + sizes[i];
}

export const sizes = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-7 h-7",
};
export const variantCheckbox = {
  solid: "bg-dark-200",
  outline: "border-[0.5px] border-primary",
  none: "!border-none",
};

export const variantInput = {
  solid: styles.inputSolid,
  outline: styles.inputOutline,
  underline: styles.inputUnderline,
  none: styles.inputNone,
};
