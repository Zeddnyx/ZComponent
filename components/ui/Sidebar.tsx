"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { SIDEBAR_ITEMS } from "@/constants";
import styles from "@/styles/component/sidebar.module.css";

export default function Sidebar() {
  const path = usePathname();
  const [selectedParent, setSelectedParent] = useState<
    string[] | string | null
  >(SIDEBAR_ITEMS.map((item) => item.href));

  const handleParentClick = (href: string) => {
    setSelectedParent(selectedParent === href ? null : href);
  };

  return (
    <div className={styles.sidebarParent}>
      <Link href="/">
        <div>
          <h1>ZComponent</h1>
        </div>
      </Link>
      <div className="custom-scrollbar">
        <nav>
          {SIDEBAR_ITEMS.map((item) => {
            const isParentSelected = selectedParent?.includes(item.href);

            return (
              <div key={item.href}>
                <div
                  className="group"
                  onClick={() => handleParentClick(item.href)}
                >
                  <item.icon
                    className={cn("group-hover:!text-light", {
                      "!text-primary": isParentSelected,
                    })}
                  />
                  <p className="group-hover:!text-light">{item.title}</p>
                </div>
                <div
                  className={cn({
                    "my-2 ml-4 px-4 border-l border-dark-700 !flex":
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
                          className={cn("", {
                            "bg-primary": isChildActive,
                          })}
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
