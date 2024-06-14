import { FaCheck } from "react-icons/fa6";

import { cn, sizes, variantCheckbox } from "@/lib/utils";
import styles from "@/styles/component/form.module.css";

export default function Checkbox({
  onChange,
  value,
  label,
  name,
  checked,
  isDisabled,
  labelSide = "left",
  variant = "solid",
  size = "md",
}: ICheckbox) {
  const handleAction = () => {
    if (isDisabled) return;

    const newChecked = !checked;
    onChange({ target: { name, value, checked: newChecked } });
  };

  return (
    <div
      className={cn(`${styles.checkbox}`, {
        "cursor-not-allowed": isDisabled,
      })}
      onClick={handleAction}
      role="button"
    >
      {label && labelSide === "left" && <label>{label}</label>}

      <div
        className={cn(`${sizes[size]} ${variantCheckbox[variant]}`, {
          "bg-primary": checked && variant === "solid",
          "!border-primary": checked && variant === "outline",
          "opacity-50": isDisabled,
        })}
      >
        <FaCheck
          className={cn(`transition-all`, {
            "scale-0": !checked,
            "text-white": checked && variant === "solid",
            "text-primary":
              (checked && variant === "outline") || variant === "none",
          })}
        />
      </div>

      {label && labelSide === "right" && <label>{label}</label>}
    </div>
  );
}
