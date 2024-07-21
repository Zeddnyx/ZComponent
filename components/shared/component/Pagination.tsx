import { useSearchParams } from "next/navigation";
import styles from "@/styles/component/pagination.module.css";
import DropDown from "../form/Dropdown";

export default function PaginationUi({
  pagination,
}: {
  pagination: IPaginationComponent;
}) {
  const PARAMS = useSearchParams();
  const QUERY = new URLSearchParams(PARAMS.toString());
  const PAGE = Number(QUERY.get("page")) || 1;
  const LIMIT = Number(QUERY.get("limit")) || 10;

  const handlePage = (pages: number) => {
    console.log(pages);
    QUERY.set("page", pages.toString());
    window.history.pushState(null, "", `?${QUERY.toString()}`);
  };

  const DISABLE_PREV = PAGE === 1;
  const DISABLE_NEXT = PAGE === pagination?.total_page;

  const getPaginationRange = () => {
    const total_page = pagination?.total_page || 0;
    const range = [];
    const maxVisiblePages = 5;
    const sideWidth = 1;
    const ellipsisSymbol = "...";

    if (total_page <= maxVisiblePages) {
      for (let i = 1; i <= total_page; i++) {
        range.push(i);
      }
    } else {
      const leftSide = Math.max(PAGE - sideWidth, 1);
      const rightSide = Math.min(PAGE + sideWidth, total_page);

      if (leftSide > 2) {
        range.push(1);
        range.push(ellipsisSymbol);
      } else if (leftSide === 2) {
        range.push(1);
      }

      for (let i = leftSide; i <= rightSide; i++) {
        range.push(i);
      }

      if (rightSide < total_page - 1) {
        range.push(ellipsisSymbol);
        range.push(total_page);
      } else if (rightSide === total_page - 1) {
        range.push(total_page);
      }
    }

    return range;
  };

  const PAGINATION = getPaginationRange();

  return (
    <div className={styles.container}>
      <div className="flex items-center gap-1 *:text-light">
        <p>
          Showing {PAGE} to {pagination?.total_page} of{" "}
        </p>
        <div className="flex items-center gap-1">
          <DropDown
            isArrow={false}
            name="limit"
            value={LIMIT}
            options={options}
            onChange={(e: any) => {
              QUERY.set("limit", e.target.value);
              window.history.pushState(null, "", `?${QUERY.toString()}`);
            }}
          />
          <p>entries</p>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => handlePage(PAGE - 1)}
          disabled={DISABLE_PREV}
          className={`!rounded-l-md ${DISABLE_PREV && "!text-[#787a7d]"}`}
          type="button"
        >
          Previous
        </button>
        {PAGINATION.map((pageNum, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handlePage(Number(pageNum))}
            className={`${PAGE === pageNum ? styles.pageActive : ""} ${
              styles.page
            }`}
          >
            {pageNum}
          </button>
        ))}
        <button
          onClick={() => handlePage(PAGE + 1)}
          disabled={DISABLE_NEXT}
          type="button"
          className={`!rounded-r-md ${DISABLE_NEXT && "!text-[#787a7d]"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

const options = [
  { value: "10", label: "10" },
  { value: "25", label: "25" },
  { value: "50", label: "50" },
  { value: "100", label: "100" },
];
