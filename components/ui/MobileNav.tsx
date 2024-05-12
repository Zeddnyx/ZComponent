"use client";

import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet";
import { IoMdMenu } from "react-icons/io";
import { usePathname } from "next/navigation";

import { sidebarItems } from "@/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function MobileNav() {
  const path = usePathname();
  const [selectedParent, setSelectedParent] = useState<
    string[] | string | null
  >(sidebarItems.map((item) => item.href));

  const handleParentClick = (href: string) => {
    setSelectedParent(selectedParent === href ? null : href);
  };

  return (
    <section className="w-full max-w-[164px] flex justify-end">
      <Sheet>
        <SheetTrigger>
          <IoMdMenu className="text-light text-24" />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-dark-300 flex flex-col items-start gap-5 p-5"
        >
          <Link href="/">
            <h1 className="font-bold text-24">ZComponent</h1>
          </Link>
          <div className="mobilenav-sheet w-full">
            <SheetClose className="flex h-full flex-col w-full">
              <nav className="flex flex-col gap-5 w-full pr-5">
                {sidebarItems.map((item) => {
                  const isParentSelected = selectedParent?.includes(item.href);

                  return (
                    <div key={item.href}>
                      <div
                        className={cn(
                          "sidebar-link hover:bg-primary group cursor-pointer transition-colors",
                        )}
                        onClick={() => handleParentClick(item.href)}
                      >
                        <item.icon className={cn("text-light text-20")} />
                        <p className={cn("sidebar-title !flex !text-light")}>
                          {item.title}
                        </p>
                      </div>
                      <div
                        className={cn("flex flex-col", {
                          "my-2 ml-4 px-4 border-l border-dark-900":
                            isParentSelected,
                        })}
                      >
                        {isParentSelected &&
                          item.children &&
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
                                <p className="capitalize text-start">
                                  {child.title}
                                </p>
                              </Link>
                            );
                          })}
                      </div>
                    </div>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
