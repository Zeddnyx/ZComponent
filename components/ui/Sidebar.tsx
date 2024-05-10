"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { sidebarItems } from "@/constants";
import Image from "next/image";

export default function Sidebar() {
  const path = usePathname();
  return (
    <div className="sidebar">
      <nav className="flex flex-col gap-5">
        <Link href="/">
          <h1>Logo</h1>
        </Link>

        {sidebarItems.map((item) => {
          const isActive =
            path === item.href || path.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn("sidebar-link hover:bg-primary group", {
                "bg-primary": isActive,
              })}
            >
              <div>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                  className={cn({
                    "brightness-[3] invert-0": isActive,
                  })}
                />
              </div>
              <p
                className={cn("sidebar-title group-hover:!text-light", {
                  "!text-light": isActive,
                })}
              >
                {item.title}
              </p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
