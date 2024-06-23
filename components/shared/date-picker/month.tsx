import { Dispatch, SetStateAction, useState } from "react";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

export default function Month({
  isYear,
  month,
  setMonth,
  year,
  setYear,
}: {
  isYear?: boolean;
  month: number;
  setMonth: Dispatch<SetStateAction<number>>;
  year: number;
  setYear: Dispatch<SetStateAction<number>>;
}) {
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

  const handleChangeMonth = (action: "prev" | "next") => {
    setMonth((prevIndex: number) => {
      if (action === "prev") {
        return prevIndex === 0 ? 11 : prevIndex - 1;
      } else {
        return prevIndex === 11 ? 0 : prevIndex + 1;
      }
    });
  };

  const handleChangeYear = (action: "prev" | "next") => {
    setYear((prevIndex) => {
      if (action === "prev") {
        return prevIndex === 0 ? 11 : prevIndex - 1;
      } else {
        return prevIndex === 11 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-1">
        <MdKeyboardArrowLeft onClick={() => handleChangeMonth("prev")} />
        {isYear && (
          <MdOutlineKeyboardDoubleArrowLeft
            onClick={() => handleChangeYear("prev")}
          />
        )}
      </div>
      <div className="flex items-center gap-1">
        <p>{year}</p>
        <p>{MONTH[month]}</p>
      </div>
      <div className="flex items-center gap-1">
        {isYear && (
          <MdOutlineKeyboardDoubleArrowLeft
            className="rotate-180"
            onClick={() => handleChangeYear("next")}
          />
        )}
        <MdKeyboardArrowLeft
          className="rotate-180"
          onClick={() => handleChangeMonth("next")}
        />
      </div>
    </div>
  );
}
