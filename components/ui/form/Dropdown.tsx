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
      className={`${className} input-parent-dropdown relative w-full`}
      ref={dropdownRef}
    >
      {label && (
        <p className="!font-medium ">
          {label}
          {isRequired && "*"}
        </p>
      )}
      <button
        type="button"
        className={`
         flexBetween gap-2 truncate
        ${inputClassName}
        ${variantInput[variant]}
        ${!value && "!text-light-900"}
          `}
        disabled={isDisabled}
        onClick={() => setIsOpen(!isOpen)}
        style={{ border: error && "1px solid #E11D48" }}
      >
        {value || placeholder}
        <IoIosArrowDown className={`animation ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <p className="error-field">{error && error}</p>

      {isOpen && (
        <div className="dropdown-content">
          {isLoading && <div className="dropdown-loading" />}
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options?.map((option, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => handleSelect(option.value, option.label)}
                role="menuitem"
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
