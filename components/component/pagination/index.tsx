"use client";
import PaginationUi from "@/components/shared/component/Pagination";
import { Suspense } from "react";

export default function Index() {
  const pagination = {
    current_page: 1,
    total_page: 50,
  };
  return (
    <div>
      {/* Since we use useSearchParams, need to wrap with suspense */}
      <Suspense>
        <PaginationUi pagination={pagination} />
      </Suspense>
    </div>
  );
}
