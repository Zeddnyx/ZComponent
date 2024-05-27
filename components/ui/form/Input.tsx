"use client";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import styles from "@/styles/component/form.module.css";

const variantInput = {
  solid: styles.inputSolid,
  outline: styles.inputOutline,
  underline: styles.inputUnderline,
  none: styles.inputNone,
};

const Input = forwardRef<HTMLInputElement, IInput>(
  ({
    label,
    labelSide = "top",
    error,
    type = "text",
    className,
    isLoading = false,
    isRequired = false,
    onChange,
    inputClassName,
    logo,
    disabled,
    variant = "solid",
    ...props
  }) => {
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
            <span className={cn(styles.inputLogo, { "!text-red-500": error })}>
              {logo && logo}
            </span>
            <input
              type={type}
              {...props}
              onChange={onChange}
              className={cn(`${variantInput[variant]} ${styles.inputDefault} ${inputClassName}`, {
                "opacity-50 cursor-not-allowed": disabled,
                "!pl-8": logo,
                "border !border-red-500": error,
              })}
              disabled={disabled}
            />
            {isLoading && (
              <span className={styles.inputLoading}>
                <AiOutlineLoading3Quarters />
              </span>
            )}
          </span>
        </label>
        {error && (
          <span role="alert" className={styles.inputError}>
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
