declare interface ISidebar {
  icon?: any;
  title: string;
  color?: string;
  href: string;
  children?: ISidebar[];
}
declare interface IInput
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  labelSide?: "left" | "top";
  error?: string;
  isLoading?: boolean;
  isRequired?: boolean;
  className?: string;
  inputClassName?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  logo?: React.ReactNode;
  disabled?: boolean;
  variant?: "solid" | "outline" | "underline" | "none";
}

declare interface IDropDown {
  options: {
    value: string;
    label: string;
    name?: string;
    code?: string;
  }[];
  name: string;
  label?: string;
  labelSide?: "left" | "top";
  value: string;
  setValue: any;
  placeholder?: string;
  onChange: any;
  isRequired?: boolean;
  isDisabled?: boolean;
  error?: string;
  className?: string;
  inputClassName?: string;
  isLoading?: boolean;
  variant?: "solid" | "outline" | "underline" | "none";
}

declare interface ICheckbox {
  name: string;
  label?: string;
  labelSide?: "left" | "top" | "right";
  value: string;
  checked?: boolean;
  onChange: any;
  isRequired?: boolean;
  isDisabled?: boolean;
  error?: string;
  className?: string;
  variant?: "solid" | "outline" | "underline" | "none";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

declare interface IOtp {
  length?: number;
  onChange: (value: string) => void;
  divide?: boolean;
  className?: string;
  isError?: boolean;
  isCorrect?: boolean;
  disabled?: boolean;
}

declare interface IButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  variant?: "text" | "outline" | "solid" | "danger";
  text?: string | React.ReactNode;
  href?: string;
}

// Pagination
declare interface IPagination {
  prev: string;
  next: string;
}
declare interface IBtnAction {
  action: "prev" | "next";
  title: string;
}
