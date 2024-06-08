"use client";

import { useEffect } from "react";

export function useClickOutside(
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  ref: React.RefObject<any>,
) {
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);
  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
}

export function useEsc(callback: () => void) {
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        callback();
      }
    });
  }, []);
}

export function useScrollX() {
  const handleWheel = (e: WheelEvent) => {
    if (e.altKey) {
      e.preventDefault();
      const container = e.currentTarget as HTMLElement;
      container.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const container = document.querySelector(".canban-container");
    if (container) {
      const wheelHandler = (e: any) => handleWheel(e);
      container?.addEventListener("wheel", wheelHandler);
      return () => {
        container?.removeEventListener("wheel", wheelHandler);
      };
    }
  }, []);
}
