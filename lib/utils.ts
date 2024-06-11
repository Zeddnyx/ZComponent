import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
