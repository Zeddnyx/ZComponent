import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import styles from "@/styles/component/form.module.css";
import { cn, variantInput } from "@/lib/utils";
import { useClickOutside } from "@/hooks";

export default function DropDown({
  options,
  name,
  label,
  labelSide = "top",
  placeholder = "Select",
  variant = "solid",
  value,
  onChange,
  error,
  isRequired = false,
  isDisabled = false,
  inputClassName,
  className,
  isLoading,
  isArrow = true,
}: IDropDown) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [getLabel, setGetLabel] = useState("");

  useEffect(() => {
    const initialOption = options?.find((option) => option.value === value);
    if (initialOption) {
      setGetLabel(initialOption.label);
    }
  }, [value, options]);

  const handleSelect = (value: string, label: string) => {
    onChange({ target: { name, value } });
    setGetLabel(label);
    setIsOpen(false);
  };

  useClickOutside(setIsOpen, dropdownRef);

  return (
    <div
      className={cn(`${className} flex w-full`, {
        "items-center gap-2": labelSide === "left",
        "flex-col": labelSide === "top",
      })}
      ref={dropdownRef}
    >
      {label && (
        <p
          className={cn(styles.inputLabel, {
            "w-[90px]": labelSide === "left",
          })}
        >
          {label}
          {isRequired && "*"}
        </p>
      )}
      <div className="relative w-full">
        <button
          type="button"
          className={cn(
            `flex justify-between items-center gap-2 truncate w-full ${styles.inputDefault} ${inputClassName} ${variantInput[variant]}`,
            {
              "!text-light-900": !getLabel,
              "border !border-red-500": error,
            },
          )}
          disabled={isDisabled}
          onClick={() => setIsOpen(!isOpen)}
        >
          {getLabel || placeholder}
          {isArrow && (
            <IoIosArrowDown
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                }`}
            />
          )}
        </button>

        <p className={styles.inputError}>{error && error}</p>

        <div
          className={cn(
            "transition-all duration-300 ease-in-out custom-scrollbar",
            {
              [styles.dropdownContent]: isOpen,
              [styles.dropdownInactive]: !isOpen,
            },
          )}
        >
          {isLoading && <div className={styles.dropdownLoading} />}
          {options?.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option.value, option.label)}
              role="menuitem"
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
