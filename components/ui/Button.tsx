import { forwardRef } from "react";
import { ImSpinner2 } from "react-icons/im";
import styles from "@/styles/component/form.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  variant?: "text" | "outline" | "solid" | "danger";
  text?: string | React.ReactNode;
}

const variantClasses = {
  solid: `${styles.input} !bg-dark-400`,
  outline: styles.inputOutline,
  none: styles.inpurNone,
  danger: "bg-red-500 hover:bg-red-600 text-white !px-3 border border-dark-900",
  text: "",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      isLoading,
      disabled,
      children,
      text,
      variant = "solid",
      ...props
    },
    ref,
  ) => (
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
