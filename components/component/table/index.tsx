"use client";

import Table from "@/components/ui/component/Table";
import { RANDOM_ITEMS } from "@/constants";
import { logo } from "@/lib/image";
import Image from "next/image";
import { useState } from "react";

export default function Index() {
  const [select, setSelect] = useState<string[]>([]);

  const columns = [
    {
      title: "Title",
      item: "title",
      width: 50,
      sortable: true,
    },
    {
      title: "Description",
      item: "description",
      width: 100,
      sortable: true,
    },
    {
      title: "Image",
      item: "image",
      width: 50,
      sortable: true,
      render: (row: any) => {
        return (
          <Image
            src={logo}
            alt={row.title}
            width={50}
            height={50}
          />
        );
      },
    },
  ];

  return (
    <div>
      <Table
        select={select}
        setSelect={setSelect}
        columns={columns}
        data={RANDOM_ITEMS}
      />
    </div>
  );
}
