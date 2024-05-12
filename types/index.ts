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
  error?: string;
  isLoading?: boolean;
  className?: string;
  inputClassName?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  logo?: React.ReactNode;
  disabled?: boolean;
}
