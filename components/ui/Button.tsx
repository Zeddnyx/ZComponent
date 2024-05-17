import { forwardRef } from "react";
import { ImSpinner2 } from "react-icons/im";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  variant?: "text" | "outline" | "solid" | "icon" | "solidDanger" ;
  text?: string | React.ReactNode;
}

const variantClasses = {
  text: "text-dark dark:text-light",
  outline:
    "bg-transparent border border-dark-200/50 text-dark dark:text-light dark:border-light-200 hover:opacity-70",
  solid:
    "bg-primary text-light hover:bg-dark-300 focus:bg-dark-300 dark:bg-primary_dark",
  icon: "transition-colors duration-200 text-dark-800 hover:text-dark-900 dark:hover:text-light-600",
  solidDanger: "bg-red-500 text-light hover:bg-red-600 focus:bg-red-600",
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
        ${
          isLoading || disabled
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
