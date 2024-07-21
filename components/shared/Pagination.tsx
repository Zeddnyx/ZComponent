"use client";

import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

import { getLastPath, findPath } from "@/lib/utils";
import { SIDEBAR_ITEMS } from "@/constants";

export default function Pagination() {
  const pathname = usePathname();
  const { prevPath, nextPath } = findPath(pathname, SIDEBAR_ITEMS);

  return (
    <div className="flex justify-between gap-5 my-5">
      <BtnAction action="prev" title={prevPath || ""} />
      <BtnAction action="next" title={nextPath || ""} />
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
          <p>Prev</p>
        </span>
      )}
      <p>{getLastPath(title)!.replace(/-/g, " ")}</p>
    </button>
  );
};
