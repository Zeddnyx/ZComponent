import { cn, handleGetAllDays } from "@/lib/utils";
import { Dispatch, SetStateAction, useState } from "react";

export default function ListDays({
  selectedDay,
  setSelectedDay,
  month,
  year,
  higlightDay,
}: {
  selectedDay: string[];
  setSelectedDay: Dispatch<SetStateAction<string[]>>;
  month: number;
  year: number;
  higlightDay?: boolean;
}) {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);
  const [clickedDay, setClickedDay] = useState<string | null>(null);

  const isHighlighted = (
    day: string,
    isCurrentMonth: boolean,
    isNextMonth: boolean,
  ) => {
    if (!higlightDay || selectedDay.length === 0 || hoveredDay === null)
      return false;

    const START_DAY = selectedDay[0];
    const END_DAY = hoveredDay;

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
    return selectedDay.length !== 0 && !isCurrentMonth && !isNextMonth;
  };

  return (
    <div className="grid grid-cols-7 gap-1 w-fit">
      {handleGetAllDays(month, year).map((item, id) => {
        return (
          <p
            key={id}
            onClick={() => {
              if (item.isCurrentMonth) {
                const index = selectedDay.indexOf(item.fulldate);
                if (index === -1) {
                  setSelectedDay([...selectedDay, item.fulldate]);
                } else {
                  setSelectedDay(selectedDay.filter((day) => day !== item.fulldate));
                }
              }
            }}
            onMouseEnter={() => {
              if (clickedDay !== null && item.isCurrentMonth) {
                setHoveredDay(item.fulldate);
              }
            }}
            onMouseLeave={() => setHoveredDay(null)}
            className={cn(
              `size-8 flex justify-center items-center hover:bg-dark-400`,
              {
                "opacity-50": !item.isCurrentMonth || item.isNextMonth,
                "bg-dark-400": isHighlighted(
                  item.fulldate,
                  item.isCurrentMonth,
                  item.isNextMonth,
                ) || (selectedDay.length === 1 && selectedDay[0] === item.fulldate),
                "hover:bg-dark-400": item.isCurrentMonth && clickedDay !== null,
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
