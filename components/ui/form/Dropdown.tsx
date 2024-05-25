import { cn } from "@/lib/utils";
import {  useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "@/styles/component/form.module.css";
import useClickOutside from "@/hooks/useClickOutside";

const variantInput = {
  solid: styles.input,
  outline: styles.inputOutline,
  underline: styles.inputUnderline,
  none: styles.inputNone,
};

export default function DropDown({
  options,
  name,
  label,
  labelSide = "top",
  value,
  placeholder = "Select",
  variant = "solid",
  setValue,
  onChange,
  error,
  isRequired = false,
  isDisabled = false,
  inputClassName,
  className,
  isLoading,
}: IDropDown) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string, label: string) => {
    onChange({ target: { name, value } });
    setValue(label);
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
            "w-[80px]": labelSide === "left",
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
            `flex justify-between items-center gap-2 truncate ${inputClassName} ${variantInput[variant]}`,
            {
              "!text-light-900": !value,
              "border !border-red-500": error,
            },
          )}
          disabled={isDisabled}
          onClick={() => setIsOpen(!isOpen)}
        >
          {value || placeholder}
          <IoIosArrowDown
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <p className={styles.inputError}>{error && error}</p>

        {isOpen && (
          <div className={`${styles.dropdownContent} custom-scrollbar`}>
            {isLoading && <div className="dropdown-loading" />}
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
        )}
      </div>
    </div>
  );
}
