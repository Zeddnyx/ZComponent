"use client";

import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

import { SIDEBAR_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import styles from "@/styles/component/nav.module.css";

export default function MobileNav() {
  const path = usePathname();
  const refOutside = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedParent, setSelectedParent] = useState<
    string[] | string | null
  >(SIDEBAR_ITEMS.map((item) => item.href));

  const handleParentClick = (href: string) => {
    setSelectedParent(selectedParent === href ? null : href);
  };

  return (
    <section className={styles.nav}>
      <IoMdMenu
        onClick={() => setIsOpen(!isOpen)}
        className="text-light text-24"
      />

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed z-40 top-0 bottom-0 bg-dark/50 h-svh w-full"
        ></div>
      )}
      <div
        className={`${styles.navContent} ${isOpen ? "right-0 " : "translate-x-0 right-[-100%]"
          } 
           `}
        ref={refOutside}
      >
        <div className="flex justify-end w-full">
          <IoClose
            className="text-light text-24 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div
          className={`${styles.navContentSidebar} custom-scrollbar !min-w-[300px]`}
        >
          <nav className="grid  gap-1 pr-4">
            {SIDEBAR_ITEMS.map((item) => {
              const isParentSelected = selectedParent?.includes(item.href);

              return (
                <div key={item.href}>
                  <div
                    className={cn(styles.navMenu, {})}
                    onClick={() => handleParentClick(item.href)}
                  >
                    <item.icon className={cn("text-light text-20")} />
                    <p className={cn("sidebar-title !flex !text-light")}>
                      {item.title}
                    </p>
                  </div>
                  <div
                    className={cn("flex flex-col gap-1", {
                      "my-2 ml-3 pl-5 border-l border-dark-900":
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
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "hover:bg-primary rounded-md p-3 text-light-200 text-sm",
                              {
                                "bg-primary": isChildActive,
                              },
                            )}
                          >
                            <p className="capitalize text-start ">
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
        </div>
      </div>
    </section>
  );
}
