import { cn } from "@/lib/utils";
import { FaCheck } from "react-icons/fa6";

const sizeVariant = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-7 h-7",
};

export default function Checkbox({
  onChange,
  value,
  size = "md",
}: ICheckbox) {
  return (
    <div>
      <input type="checkbox" value={value} onChange={onChange} className={cn(`${sizeVariant[size]} rounded bg-transparent`)} />
    </div>
  );
}
