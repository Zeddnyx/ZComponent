"use client";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const variantInput = {
  solid: "input",
  outline: "input-outline",
  underline: "input-underline",
  none: "input-none",
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
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
    },
    ref,
  ) => {
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
              className={cn("input-label", {
                "!text-red-500": error,
                "w-[80px]": labelSide === "left",
              })}
            >
              {label} {isRequired && <span className="text-red-500">*</span>}
            </span>
          )}
          <span className="flex relative w-full">
            <span className={cn("input-logo", { "!text-red-500": error })}>
              {logo && logo}
            </span>
            <input
              type={type}
              ref={ref}
              {...props}
              onChange={onChange}
              className={cn(`${variantInput[variant]} ${inputClassName}`, {
                "opacity-50 cursor-not-allowed": disabled,
                "!pl-8": logo,
                "border !border-red-500": error,
              })}
              disabled={disabled}
            />
            {isLoading && (
              <span className="input-loading">
                <AiOutlineLoading3Quarters />
              </span>
            )}
          </span>
        </label>
        {error && (
          <span role="alert" className="input-error">
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
