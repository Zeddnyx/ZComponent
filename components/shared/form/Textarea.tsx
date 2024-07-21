"use client";
import { cn, variantInput } from "@/lib/utils";
import styles from "@/styles/component/form.module.css";

export default function Textarea({
  value,
  label,
  labelSide = "top",
  error,
  className,
  isLoading = false,
  isRequired = false,
  onChange,
  inputClassName,
  logo,
  disabled,
  variant = "solid",
  ...props
}: IInput) {
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
          <span className={cn(styles.inputLogoTextarea, { "!text-red-500": error })}>
            {logo && logo}
          </span>
          <textarea
            {...props}
            defaultValue={value}
            className={cn(
              `${variantInput[variant]} ${styles.inputDefault} ${inputClassName}`,
              {
                "opacity-50 cursor-not-allowed": disabled,
                "!pl-8": logo,
                "border !border-red-500 !bg-red-500/10": error,
              },
            )}
            disabled={disabled}
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
