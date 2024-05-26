import { forwardRef } from "react";
import { ImSpinner2 } from "react-icons/im";
import Link from "next/link";
import styles from "@/styles/component/form.module.css";

const variantClasses = {
  solid: `${styles.input} !bg-dark-400`,
  outline: styles.inputOutline,
  none: styles.inputNone,
  danger: styles.btnDanger,
  text: "",
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
      href,
      ...props
    },
    ref,
  ) =>
    href ? (
      <Link
        href={href}
        className={`btn-global
        ${isLoading || disabled
            ? "pointer-events-none cursor-not-allowed"
            : "pointer-events-auto cursor-pointer"
          }
        ${disabled ? "opacity-70" : "opacity-80"}
        ${variantClasses[variant]}
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
