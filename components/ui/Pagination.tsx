"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

import { getLastPath } from "@/lib/utils";

//TODO make the pagination automate get the prev path and next path
export default function Pagination({ prev, next }: IPagination) {
  return (
    <div className="flex justify-between gap-5 my-5">
      <BtnAction action="prev" title={prev} />
      <BtnAction action="next" title={next} />
    </div>
  );
}

const BtnAction = ({ action, title }: IBtnAction) => {
  const { push } = useRouter();
  const handleAction = () => {
    push(title);
  };
  return (
    <button onClick={handleAction} className="pagination-action">
      {action === "next" ? (
        <span className="justify-end">
          <p>Next</p>
          <IoIosArrowBack className="rotate-180" />
        </span>
      ) : (
        <span>
          <IoIosArrowBack />
          <p>Previous</p>
        </span>
      )}
      <p>{getLastPath(title)!.replace(/-/g, " ")}</p>
    </button>
  );
};
