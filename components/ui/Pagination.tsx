"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

import { getLastPath } from "@/lib/utils";

//TODO make the navigation for pagination automate get the prev path and next path
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
    <button onClick={handleAction} className="group p-2 rounded-lg hover:bg-dark-500 transition-colors">
      {action === "next" ? (
        <span className="flex items-center gap-2">
          <p>Next</p>
          <IoIosArrowBack className="rotate-180" />
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <IoIosArrowBack />
          <p>Previous</p>
        </span>
      )}
      <p className="text-left w-full font-semibold text-light-700 text-20 capitalize">
        {getLastPath(title)!.replace(/-/g, " ")}
      </p>
    </button>
  );
};
