"use client";
import { useRef, useState } from "react";

import Input from "./Input";
import styles from "@/styles/component/form.module.css";
import { useClickOutside, useDisableScroll } from "@/hooks";
import { cn } from "@/lib/utils";

export default function TimePicker() {
  const date = new Date();
  const currentHours = date.getHours().toString();
  const currentMinutes = date.getMinutes().toString();
  const currentSeconds = date.getSeconds().toString();

  const REFS = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState(currentHours.padStart(2, "0"));
  const [minutes, setMinutes] = useState(currentMinutes.padStart(2, "0"));
  const [seconds, setSeconds] = useState(currentSeconds.padStart(2, "0"));
  const [value, setValue] = useState(`${hours}:${minutes}:${seconds}`);

  useClickOutside(setIsOpen, REFS);
  useDisableScroll(isOpen);
  return (
    <div ref={REFS} className="relative">
      <Input onClick={() => setIsOpen(true)} value={value} />
      <div
        className={cn(styles.timePicker, {
          "scale-0": !isOpen,
          "scale-100": isOpen,
        })}
      >
        <div className={`${styles.timePickerContent} no-scrollbar`}>
          <div className="no-scrollbar">
            {Array.from({ length: 24 }, (_, i) => (
              <p key={i} onClick={() => setHours(String(i).padStart(2, "0"))}>
                {String(i).padStart(2, "0")}
              </p>
            ))}
          </div>
          <span>:</span>
          <div className="no-scrollbar">
            {Array.from({ length: 60 }, (_, i) => (
              <p key={i} onClick={() => setHours(String(i).padStart(2, "0"))}>
                {String(i).padStart(2, "0")}
              </p>
            ))}
          </div>
          <span>:</span>
          <div className="no-scrollbar">
            {Array.from({ length: 60 }, (_, i) => (
              <p key={i} onClick={() => setHours(String(i).padStart(2, "0"))}>
                {String(i).padStart(2, "0")}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
