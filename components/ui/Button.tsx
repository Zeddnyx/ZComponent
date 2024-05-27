import { forwardRef } from "react";
import { ImSpinner2 } from "react-icons/im";
import Link from "next/link";
import styles from "@/styles/component/button.module.css";

const variantClasses = {
  solid: `${styles.btn} !bg-dark-400`,
  outline: styles.btnOutline,
  none: styles.btnNone,
  danger: styles.btnDanger,
  text: "",
};
const sizeClasses = {
  xs: "!h-9",
  sm: "!h-10",
  md: "!h-11",
  lg: "!h-12",
  xl: "!h-14",
};

const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      className,
      isLoading,
      disabled,
      children,
      text,
      variant = "solid",
      size = "md",
      href,
      ...props
    },
    ref,
  ) =>
    href ? (
      <Link
        href={href}
        className={`
        ${isLoading || disabled
            ? "pointer-events-none cursor-not-allowed"
            : "pointer-events-auto cursor-pointer"
          }
        ${disabled ? "opacity-70" : "opacity-80"}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${styles.btnDefault} 
        ${className}
      `}
      >
        {isLoading && <ImSpinner2 className="h-auto w-4 animate-spin" />}
        {text}
      </Link>
    ) : (
      <button
        ref={ref}
        className={`btn-global
        ${isLoading || disabled
            ? "pointer-events-none cursor-not-allowed"
            : "pointer-events-auto cursor-pointer"
          }
        ${disabled ? "opacity-70" : "opacity-80"}
        ${variantClasses[variant]}
        ${styles.btnDefault} 
        ${sizeClasses[size]}
        ${className}
      `}
        {...props}
      >
        {isLoading && <ImSpinner2 className="h-auto w-4 animate-spin" />}
        {text}
      </button>
    ),
);

Button.displayName = "Button";
export default Button;
