"use client";
import { cn, variantInput } from "@/lib/utils";
import styles from "@/styles/component/form.module.css";
import { useEffect, useRef } from "react";

export default function Textarea({
  value,
  label,
  labelSide = "top",
  error,
  className,
  inputClassName,
  logo,
  variant = "solid",
  isLoading = false,
  isRequired = false,
  isAutoResize = false,
  ...props
}: IInput) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current && isAutoResize) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className={`${className} relative`}>
      <label
        className={cn("flex ", {
          "items-center gap-2": labelSide === "left",
          "flex-col": labelSide === "top",
        })}
      >
        {label && (
          <span
            className={cn(styles.inputLabel, {
              "!text-red-500": error,
              "w-[80px]": labelSide === "left",
            })}
          >
            {label} {isRequired && <span className="text-red-500">*</span>}
          </span>
        )}
        <span className="flex relative w-full">
          <span
            className={cn(styles.inputLogoTextarea, { "!text-red-500": error })}
          >
            {logo && logo}
          </span>
          <textarea
            {...props}
            ref={textareaRef}
            className={cn(
              `${inputClassName} custom-scrollbar`,
              variantInput[variant],
              styles.inputDefault,
              {
                "!pl-8": logo,
                "border !border-red-500 !bg-red-500/10": error,
              },
            )}
          />
        </span>
      </label>
      {error && (
        <span role="alert" className={styles.inputError}>
          {error}
        </span>
      )}
    </div>
  );
}
