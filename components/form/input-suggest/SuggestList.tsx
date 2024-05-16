import { useEffect } from "react";

import { cn } from "@/lib/utils";

interface ISuggest {
  data: string[];
  isOpen: boolean;
  onClick: (value: string) => void;
}

export default function SuggestList({ data, isOpen, onClick }: ISuggest) {
  useEffect(() => {

    }, [data]);

  return (
    <div
      className={cn("input-parent-suggest", {
        "!flex flex-col items-start": isOpen,
      })}
    >
      {data?.map((item, id) => {
        return (
          <button
            className="input-item-suggest"
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
