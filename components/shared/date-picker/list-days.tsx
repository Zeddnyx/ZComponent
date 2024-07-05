import { cn, handleGetAllDays } from "@/lib/utils";
import { Dispatch, SetStateAction, useState } from "react";

export default function ListDays({
  selectedDate,
  setSelectedDate,
  month,
  year,
  higlightDay,
}: {
  selectedDate: string[]; // ['Jul 01 2024', 'Aug 02 2024']
  setSelectedDate: Dispatch<SetStateAction<string[]>>;
  month: number;
  year: number;
  higlightDay?: boolean;
}) {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  console.log(hoveredDay);
  const isHighlighted = (
    day: string,
    isCurrentMonth: boolean,
    isNextMonth: boolean,
  ) => {
    if (!higlightDay || !startDate || !endDate) return false;

    const START_DAY = startDate;
    const END_DAY = endDate;

    if (isCurrentMonth) {
      if (START_DAY <= END_DAY) {
        return day >= START_DAY && day <= END_DAY;
      } else {
        return day >= START_DAY || day <= END_DAY;
      }
    } else if (isNextMonth) {
      return day <= END_DAY;
    } else {
      return false;
    }
  };

  const isDisabled = (isCurrentMonth: boolean, isNextMonth: boolean) => {
    return selectedDate.length !== 0 && !isCurrentMonth && !isNextMonth;
  };

  const handleDayClick = (item: any) => {
    if (item.isCurrentMonth) {
      if (!startDate) {
        setStartDate(item.fulldate);
        setSelectedDate([item.fulldate]);
      } else if (!endDate) {
        setEndDate(item.fulldate);
        setSelectedDate([startDate, item.fulldate]);
      } else {
        // Reset and start a new range selection
        setStartDate(item.fulldate);
        setEndDate(null);
        setSelectedDate([item.fulldate]);
      }
    }
  };

  return (
    <div className="grid grid-cols-7 gap-1 w-fit">
      {handleGetAllDays(month, year).map((item, id) => {
        return (
          <p
            key={id}
            onClick={() => handleDayClick(item)}
            onMouseEnter={() => {
              if (startDate !== null && item.isCurrentMonth) {
                setHoveredDay(item.fulldate);
              }
            }}
            onMouseLeave={() => setHoveredDay(null)}
            className={cn(
              `size-8 flex justify-center items-center hover:bg-dark-400`,
              {
                "opacity-50": !item.isCurrentMonth || item.isNextMonth,
                "bg-dark-400":
                  isHighlighted(
                    item.fulldate,
                    item.isCurrentMonth,
                    item.isNextMonth,
                  ) ||
                  (selectedDate.length === 1 &&
                    selectedDate[0] === item.fulldate),
                "hover:bg-dark-400": item.isCurrentMonth && startDate !== null,
                "pointer-events-none": isDisabled(
                  item.isCurrentMonth,
                  item.isNextMonth,
                ),
              },
            )}
          >
            {item.day}
          </p>
        );
      })}
    </div>
  );
}
