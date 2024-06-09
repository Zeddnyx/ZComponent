"use client";

import Canban from "@/components/component/canban";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";

import { ROUTES } from "@/configs/routes";
import { useScrollX } from "@/hooks";

export default function Page() {
  const initialData = [
    { position: 1, title: "slicing", column: "todo" },
    { position: 2, title: "integrasi", column: "in-progress" },
    { position: 3, title: "testing", column: "done" },
    { position: 4, title: "fix error", column: "done" },
    { position: 5, title: "deploy", column: "done" },
  ];

  useScrollX();

  return (
    <div>
      <Title title="Canban" subtitle="canban" />
      <Wrapper className="overflow-x-auto no-scrollbar canban-container">
        <Canban initialData={initialData} />
      </Wrapper>
      <Pagination prev={ROUTES.componentUrl("gallery")} next={ROUTES.componentUrl("/")} />
    </div>
  );
}
