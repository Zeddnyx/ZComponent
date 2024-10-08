declare interface ISidebar {
  icon?: any;
  title: string;
  color?: string;
  href: string;
  isMaintenance: boolean;
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
  logo?: React.ReactNode;
  disabled?: boolean;
  variant?: "solid" | "outline" | "underline" | "none";
  isAutoResize?: boolean;
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
  placeholder?: string;
  value?: string | number;
  onChange: any;
  isRequired?: boolean;
  isDisabled?: boolean;
  error?: string;
  className?: string;
  inputClassName?: string;
  isLoading?: boolean;
  variant?: "solid" | "outline" | "underline" | "none";
  isArrow?: boolean;
}

declare interface ICheckbox {
  name?: string;
  label?: string;
  labelSide?: "left" | "right";
  value?: string | number | boolean;
  checked?: boolean;
  onChange: any;
  isRequired?: boolean;
  isDisabled?: boolean;
  error?: string;
  className?: string;
  id?: string;
  variant?: "solid" | "outline" | "none";
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

interface IUploadFile
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  accept?: string;
  isLoading?: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  file: File[];
  setFile: React.Dispatch<React.SetStateAction<File[]>>;
  placeholder?: string;
  error?: string;
  name: string;
  label?: string;
  preview: "img" | "file";
  maxSize?: number;
  className?: string;
  isMultiple?: boolean;
  children: React.ReactNode;
}

declare interface IButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  variant?: "text" | "outline" | "solid" | "danger";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  text: string | React.ReactNode;
  href?: string;
}

declare interface IAcordion {
  title: string | React.ReactNode;
  children: React.ReactNode;
  variant?: "solid" | "underline" | "none";
}
declare interface IAcordionImage {
  image: string | any;
  logo?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

// Pagination
declare interface IPagination {
  prev: string | null;
  next: string | null;
}
declare interface IBtnAction {
  action: "prev" | "next";
  title: string;
}

declare interface IPaginationComponent {
  total_page: number;
  current_page: number;
}

interface IModal {
  children: React.ReactNode;
  text: React.ReactNode | string;
  title?: React.ReactNode | string;
  outsideClickable?: boolean;
  autoOpen?: boolean;
  classNameDrawer?: string;
  classNameHeader?: string;
  className?: string;
}
interface IModalItem {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  classNameDrawer?: string;
  classNameHeader?: string;
  className?: string;
  title: React.ReactNode | string;
  outsideClickable?: boolean;
  autoOpen?: boolean;
}

// canban
declare interface ICanban {
  position: string | number;
  title: string;
  column: string;
}
declare interface ICanbanCard extends ICanban {
  handleDragStart: any;
}

// table
interface ITableColumn {
  item: string;
  title: string;
  sortable?: boolean;
  width?: number;
  render?: (rowData: any) => React.ReactNode;
}
interface ITable {
  columns: ITableColumn[];
  data: any[];
  select?: string[];
  setSelect?: React.Dispatch<React.SetStateAction<string[]>>;
  className?: string;
}

// switch
declare interface ISwitch extends React.ComponentProps<"input"> {
  label?: string;
  classNameWrap?: string;
  isAlwaysOn?: boolean;
  isInline?: boolean;
}
