import { forwardRef } from "react";
import { ImSpinner2 } from "react-icons/im";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  variant?: "text" | "outline" | "solid" | "danger";
  text?: string | React.ReactNode;
}

const variantClasses = {
  solid: "input",
  outline: "input-outline",
  none: "input-none",
  danger: "bg-red-500 hover:bg-red-600 text-white",
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
      className={`
        transition-fill-colors flex items-center justify-center gap-2 font-medium duration-200
        min-h-[38px] sm:h-9 rounded-lg py-1 px-4 md:px-5 text-sm
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
