"use client"
import PaginationUi from "@/components/ui/component/Pagination";

export default function Index() {
  const pagination = {
    current_page: 1,
    total_page: 50,
  };
  return (
    <div>
      <PaginationUi pagination={pagination} />
    </div>
  );
}
