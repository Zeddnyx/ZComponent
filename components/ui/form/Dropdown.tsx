import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const variantInput = {
  solid: "input",
  outline: "input-outline",
  underline: "input-underline",
  none: "input-none",
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

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          className={cn("input-label", {
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

        <p className="input-error">{error && error}</p>

        {isOpen && (
          <div className="dropdown-content">
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
