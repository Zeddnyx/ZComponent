"use client";
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
      <div className={`${className} red-900 relative`}>
        <label className="block text-13px">
          {label && <span className="input-label">{label}</span>}
          <span className="flex relative">
            <span className="input-logo">{logo && logo}</span>
            <input
              type={type}
              ref={ref}
              {...props}
              onChange={onChange}
              className={cn(`input  ${inputClassName}`, {
                "opacity-50 cursor-not-allowed": disabled,
                "!pl-7": logo,
              })}
              style={{ border: error && "1px solid #E11D48" }}
              disabled={disabled}
            />
          </span>
        </label>
        {isLoading && (
          <span className="block pt-2 text-xs text-tertiary">loading...</span>
        )}
        {error && (
          <span role="alert" className="block pt-2 text-xs text-danger">
            {error}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
