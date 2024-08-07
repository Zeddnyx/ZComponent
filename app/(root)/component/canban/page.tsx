"use client";

import Canban from "@/components/component/canban";
import Title from "@/components/shared/Title";
import Wrapper from "@/components/shared/Wrapper";

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
      <Wrapper>
        <div className="pr-3 overflow-x-auto no-scrollbar canban-container">
          <Canban initialData={initialData} />
        </div>
      </Wrapper>
    </div>
  );
}
