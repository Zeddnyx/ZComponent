import { cn } from "@/lib/utils";
import styles from "@/styles/component/form.module.css";

interface ISuggest {
  data: string[];
  isOpen: boolean;
  onClick: (value: string) => void;
}

export default function SuggestList({ data, isOpen, onClick }: ISuggest) {

  return (
    <div
      className={cn(`${styles.inputSuggest} custom-scrollbar `, {
        "!flex flex-col items-start": isOpen,
      })}
    >
      {data?.map((item, id) => {
        return (
          <button
            className={styles.inputItemSuggest}
            type="button"
            onClick={() => onClick(item)}
            key={id}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
