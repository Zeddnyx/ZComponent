import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import styles from "@/styles/component/form.module.css";
import { cn, variantInput } from "@/lib/utils";
import { useClickOutside } from "@/hooks";
import Checkbox from "./Checkbox";

export default function DropDown({
  options,
  name,
  label,
  labelSide = "top",
  placeholder = "Select",
  variant = "solid",
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
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const handleSelect = (value: string, label: string) => {
    let NEW_VALUE;
    let NEW_LABEL;

    if (selectedValues.includes(value) || selectedLabels.includes(label)) {
      NEW_VALUE = selectedValues.filter((v) => v !== value);
      NEW_LABEL = selectedLabels.filter((v) => v !== label);
    } else {
      NEW_VALUE = [...selectedValues, value];
      NEW_LABEL = [...selectedLabels, label];
    }

    setSelectedValues(NEW_VALUE);
    setSelectedLabels(NEW_LABEL);
    onChange({ target: { name, value: NEW_VALUE?.join(",") } });
  };

  useClickOutside(setIsOpen, dropdownRef);

  return (
    <div
      className={cn(`${className}`, {
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
      <div className="w-full h-fit relative">
        <button
          type="button"
          className={cn(
            `w-full flex justify-between items-center gap-2 truncate ${styles.inputDefault} ${inputClassName} ${variantInput[variant]}`,
            {
              "!text-light-900": !selectedValues,
              "border !border-red-500": error,
            },
          )}
          disabled={isDisabled}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="text-left flex gap-1 flex-wrap">
            {!!selectedLabels.length ? (
              selectedLabels.map((item, id) => {
                return <p key={id}>{item},</p>;
              })
            ) : (
              <p> {placeholder}</p>
            )}
          </div>
          <IoIosArrowDown
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <p className={styles.inputError}>{error && error}</p>

        <div
          className={cn(`custom-scrollbar transition-all`, {
            [styles.dropdownCheckboxContent]: true,
            "scale-100 max-h-40 h-fit overflow-y-auto": isOpen,
            "scale-0 max-h-0": !isOpen,
          })}
        >
          {isLoading && <div className="dropdown-loading" />}
          {options?.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option.value, option.label)}
              role="menuitem"
            >
              <Checkbox
                label={option.label}
                value={option.value}
                name={name}
                labelSide={"right"}
                checked={selectedValues.includes(option.value)}
                onChange={() => handleSelect(option.value, option.label)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
