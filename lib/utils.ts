import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import styles from "@/styles/component/form.module.css";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLastPath(path: string) {
  return path.split("/").pop();
}
export function convertSizeBytes(size: number) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (size == 0) return "n/a";
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return parseFloat((size / Math.pow(1024, i)).toFixed(2)) + " " + sizes[i];
}

export const shortText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

export const sizes = {
  xs: "min-w-3 min-h-3",
  sm: "min-w-4 min-h-4",
  md: "min-w-5 min-h-5",
  lg: "min-w-6 min-h-6",
  xl: "min-w-7 min-h-7",
};
export const variantCheckbox = {
  solid: "bg-dark-200",
  outline: "border-[0.5px] border-primary",
  none: "!border-none",
};

export const variantInput = {
  solid: styles.inputSolid,
  outline: styles.inputOutline,
  underline: styles.inputUnderline,
  none: styles.inputNone,
};

export const findPath = (path: string, sidebarItems: ISidebar[]) => {
  let currentIndex = -1;
  let prevPath = "/";
  let nextPath = "/";

  const flatSidebar: (ISidebar & { isParent?: boolean })[] =
    sidebarItems.flatMap((item) =>
      item.children ? [...item.children] : [item],
    );

  currentIndex = flatSidebar.findIndex((item) => item.href === path);

  if (currentIndex > -1) {
    const currentItem = flatSidebar[currentIndex];

    // previous path
    if (currentIndex > 0) {
      const prevItem = flatSidebar[currentIndex - 1];
      if (
        currentItem.isParent &&
        currentItem.children &&
        currentItem.children.length > 0
      ) {
        prevPath = currentItem.children[currentItem.children.length - 1].href;
      } else if (prevItem.isParent) {
        prevPath = prevItem.href;
      } else {
        prevPath = prevItem.href;
      }
    } else {
      prevPath = "/";
    }

    // next path
    if (currentIndex < flatSidebar.length - 1) {
      const nextItem = flatSidebar[currentIndex + 1];
      if (
        currentItem.isParent &&
        currentItem.children &&
        currentItem.children.length > 0
      ) {
        nextPath = currentItem.children[0].href;
      } else if (nextItem.isParent) {
        nextPath = nextItem.href;
      } else {
        nextPath = nextItem.href;
      }
    } else {
      nextPath = "/";
    }
  }

  return { prevPath, nextPath };
};


export const getInitialMonth = (startMonth?: string) => {
  const DATE = new Date();

  const MONTH = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (startMonth) {
    const startMonthIndex = MONTH.indexOf(startMonth);
    return startMonthIndex !== -1 ? startMonthIndex : DATE.getMonth();
  }
  return DATE.getMonth();
};

export const handleGetAllDays = (year: number, month: number) => {
  const DAYS = [];
  const CURRENT_MONTH_DAYS = new Date(year, month + 1, 0).getDate();
  const FIRST_DAY_MONTH = new Date(year, month, 1).getDay();
  const PREV_MONTH_DAYS = new Date(year, month, 0).getDate();

  for (let i = FIRST_DAY_MONTH; i > 0; i--) {
    DAYS.push({
      fulldate: `${year}-${month < 9 ? "0" : ""}${month + 1}-${PREV_MONTH_DAYS - i + 1
        }`,
      day: i,
      isCurrentMonth: false,
      isNextMonth: false,
    });
  }

  for (let i = 1; i <= CURRENT_MONTH_DAYS; i++) {
    DAYS.push({
      fulldate: `${year}-${month < 9 ? "0" : ""}${month + 1}-${i}`,
      day: i,
      isCurrentMonth: true,
      isNextMonth: false,
    });
  }

  const NEXT_DAYS = 42 - DAYS.length; // Ensure 6 rows of 7 days each
  for (let i = 1; i <= NEXT_DAYS; i++) {
    DAYS.push({
      fulldate: `${year}-${month < 9 ? "0" : ""}${month + 2}-${i}`,
      day: i,
      isCurrentMonth: false,
      isNextMonth: true,
    });
  }

  return DAYS;
};
