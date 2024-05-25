import { cn } from "@/lib/utils";
import styles from "@/styles/component/form.module.css";

interface ISuggest {
  data: string[];
  isOpen: boolean;
  onClick: (value: string) => void;
  searchValue: string;
}

export default function SuggestList({
  data,
  isOpen,
  onClick,
  searchValue,
}: ISuggest) {
  const highlightText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} style={{ fontWeight: "bold" }}>
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </>
    );
  };

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
            {highlightText(item, searchValue)}
          </button>
        );
      })}
    </div>
  );
}
