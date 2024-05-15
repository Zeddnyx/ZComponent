"use client";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      type = "text",
      className,
      isLoading = false,
      onChange,
      inputClassName,
      logo,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={`${className} relative`}>
        <label className="block ">
          {label && (
            <span className={cn("input-label", { "!text-red-500": error })}>
              {label}
            </span>
          )}
          <span className="flex relative">
            <span className={cn("input-logo", { "!text-red-500": error })}>
              {logo && logo}
            </span>
            <input
              type={type}
              ref={ref}
              {...props}
              onChange={onChange}
              className={cn(`input  ${inputClassName}`, {
                "opacity-50 cursor-not-allowed": disabled,
                "!pl-8": logo,
                "border !border-red-500": error,
              })}
              disabled={disabled||isLoading}
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
