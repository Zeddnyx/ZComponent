import { cn } from "@/lib/utils";
import styles from "@/styles/component/form.module.css";
import highlightText from "./highlightText";

interface ISuggest {
  data: string[];
  isOpen: boolean;
  onClick: (value: string) => void;
  searchValue: string;
  className?: string;
  highlightSelected: (value: string) => string;
}

export default function SuggestList({
  data,
  isOpen,
  onClick,
  searchValue,
  className,
  highlightSelected,
}: ISuggest) {
  return (
    <div
      className={cn(`${styles.inputSuggest} ${className} custom-scrollbar `, {
        "!flex flex-col items-start": isOpen,
      })}
    >
      {data?.map((item, id) => {
        return (
          <button
            className={`${styles.inputItemSuggest} ${highlightSelected(item)}`}
            type="button"
            onClick={() => onClick(item)}
            key={id}
          >
            {highlightText(item, searchValue)}
          </button>
        );
      })}
    </div>
  );
}
