declare interface ISidebar {
  icon?: any;
  title: string;
  color?: string;
  href: string;
  children?: ISidebar[];
}
declare interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
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
  label: string;
  labelSide?: "left" | "top";
  value: string;
  setValue?: any;
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

// Pagination
declare interface IPagination {
  prev: string;
  next: string;
}
declare interface IBtnAction {
  action: "prev" | "next";
  title: string;
}
