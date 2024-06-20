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
      title: "Title",
      item: "title",
      width: 50,
      sortable: true,
    },
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
      width: 80,
      sortable: true,
      render: (row: any) => {
        return (
          <div className="flex justify-center w-20">
            <Image
              className="w-40"
              src={logo}
              alt={row.title}
              width={50}
              height={50}
            />
          </div>
        );
      },
    },
    {
      title: "Title",
      item: "title",
      width: 80,
      sortable: true,
      render: () => {
        return (
          <div className="rounded-full p-0.5 px-2 bg-red-500/50">title</div>
        );
      },
    },
  ];

  return (
    <Table
      select={select}
      setSelect={setSelect}
      columns={columns}
      data={RANDOM_ITEMS}
    />
  );
}
