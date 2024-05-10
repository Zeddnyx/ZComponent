"use client";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./sheet";
import { usePathname } from "next/navigation";

import { sidebarItems } from "@/constants";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const path = usePathname();
  return (
    <section className="w-full max-w-[164px]">
      <Sheet>
        <SheetTrigger>
          <p className="">Menu</p>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-light flex items-start gap-5 p-5"
        >
          <div className="moobilenav-sheet w-full">
            <SheetClose className="flex h-full flex-col w-full">
              <nav className="w-full flex items-end flex-col gap-5 pt-20">
                {sidebarItems.map((item) => {
                  const isActive =
                    path === item.href || path.startsWith(`${item.href}/`);
                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "sidebar-link !rounded-[10px] p-4 hover:bg-primary group",
                          {
                            "bg-primary": isActive,
                          },
                        )}
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
                          className={cn("group-hover:!text-light font-medium", {
                            "!text-light": isActive,
                          })}
                        >
                          {item.title}
                        </p>
                      </Link>
                    </SheetClose>
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
