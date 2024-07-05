"use client";
import { useRef, useState } from "react";

import Input from "./Input";
import Month from "@/components/shared/date-picker/month";
import Weeks from "@/components/shared/date-picker/weeks";
import ListDays from "@/components/shared/date-picker/list-days";
import { useClickOutside, useCheckPosition } from "@/hooks";
import { cn, getInitialMonth } from "@/lib/utils";

export default function DatePicker() {
  const DATE = new Date();
  const REF = useRef<HTMLDivElement>(null);
  const CURRENT_DAY = DATE.getDate().toString();

  const [isActive, setIsActive] = useState(false);
  const [curretMonth, setCurretMonth] = useState<number>(getInitialMonth());
  const [curretYear, setCurretYear] = useState(DATE.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string[]>([]); // ['Jul 01 2024', 'Aug 02 2024']
  const [position, setPosition] = useState("top");

  useCheckPosition(setPosition, REF, isActive);
  useClickOutside(setIsActive, REF);
  return (
    <div ref={REF} className="relative">
      <div
        className={cn(
          `bg-dark-300 rounded-lg p-1 transition-all absolute -top-40 left-0 w-fit h-fit z-50`,
          {
            "scale-0": !isActive,
            "scale-100": isActive,
            "-top-40": position === "top",
            "top-full": position === "bottom",
          },
        )}
      >
        <Month
          isYear
          month={curretMonth}
          setMonth={setCurretMonth}
          year={curretYear}
          setYear={setCurretYear}
        />
        <Weeks />
        <ListDays
          month={curretMonth}
          year={curretYear}
          higlightDay
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <Input onClick={() => setIsActive(!isActive)} />
    </div>
  );
}
