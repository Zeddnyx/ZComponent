"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { sidebarItems } from "@/constants";

export default function Sidebar() {
  const path = usePathname();
  const [selectedParent, setSelectedParent] = useState<
    string[] | string | null
  >(sidebarItems.map((item) => item.href));

  const handleParentClick = (href: string) => {
    setSelectedParent(selectedParent === href ? null : href);
  };

  return (
    <div className="h-screen w-96 2xl:w-[355px] bg-dark-300 max-lg:hidden ">
      <Link href="/">
        <div className="p-5">
          <h1 className="font-bold text-30">ZComponent</h1>
        </div>
      </Link>
      <div className="sidebar">
        <nav className="flex flex-col gap-5">
          {sidebarItems.map((item) => {
            const isParentSelected = selectedParent?.includes(item.href);

            return (
              <div key={item.href}>
                <div
                  className="sidebar-link hover:bg-primary group cursor-pointer"
                  onClick={() => handleParentClick(item.href)}
                >
                  <item.icon
                    className={cn("group-hover:!text-light text-20", {
                      "!text-primary": isParentSelected,
                    })}
                  />
                  <p className="sidebar-title group-hover:!text-light">
                    {item.title}
                  </p>
                </div>
                <div
                  className={cn("flex flex-col gap-1 hidden", {
                    "my-2 ml-4 px-4 border-l border-dark-900 !flex":
                      isParentSelected,
                  })}
                >
                  {item.children &&
                    item.children.length > 0 &&
                    item.children.map((child) => {
                      const isChildActive = path === child.href;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "hover:bg-primary rounded-md p-3 text-light-200 text-sm",
                            {
                              "bg-primary": isChildActive,
                            },
                          )}
                        >
                          <p className="capitalize">{child.title}</p>
                        </Link>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
