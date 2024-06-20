"use client";

import { useEffect, useRef } from "react";

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

export function useScrollableSlider() {
  const sliderEl = useRef<HTMLDivElement>(null!);
  const sliderPrevBtn = useRef<HTMLButtonElement>(null!);
  const sliderNextBtn = useRef<HTMLButtonElement>(null!);
  function scrollToTheRight() {
    let offsetWidth = sliderEl.current.offsetWidth;
    sliderEl.current.scrollLeft += offsetWidth / 2;
    sliderPrevBtn.current.classList.remove("opacity-0", "invisible");
  }
  function scrollToTheLeft() {
    let offsetWidth = sliderEl.current.offsetWidth;
    sliderEl.current.scrollLeft -= offsetWidth / 2;
    sliderNextBtn.current.classList.remove("opacity-0", "invisible");
  }
  useEffect(() => {
    const filterBarEl = sliderEl.current;
    const prevBtn = sliderPrevBtn.current;
    const nextBtn = sliderNextBtn.current;
    initNextBtnVisibility();
    // @ts-ignore
    function initNextBtnVisibility() {
      let offsetWidth = filterBarEl.offsetWidth;
      let scrollWidth = filterBarEl.scrollWidth;
      // show next btn when scrollWidth is gather than offsetWidth
      if (scrollWidth > offsetWidth) {
        nextBtn?.classList.remove("opacity-0", "invisible");
      } else {
        nextBtn?.classList.add("opacity-0", "invisible");
      }
    }
    function visibleNextAndPrevBtnOnScroll() {
      let newScrollLeft = filterBarEl.scrollLeft,
        offsetWidth = filterBarEl.offsetWidth,
        scrollWidth = filterBarEl.scrollWidth;
      // reach to the right end
      if (scrollWidth - newScrollLeft == offsetWidth) {
        nextBtn?.classList.add("opacity-0", "invisible");
        prevBtn?.classList.remove("opacity-0", "invisible");
      } else {
        nextBtn?.classList.remove("opacity-0", "invisible");
      }
      // reach to the left end
      if (newScrollLeft === 0) {
        prevBtn?.classList.add("opacity-0", "invisible");
        nextBtn?.classList.remove("opacity-0", "invisible");
      } else {
        prevBtn?.classList.remove("opacity-0", "invisible");
      }
    }
    window.addEventListener("resize", initNextBtnVisibility);
    filterBarEl.addEventListener("scroll", visibleNextAndPrevBtnOnScroll);
    // clear event
    return () => {
      window.removeEventListener("resize", initNextBtnVisibility);
      filterBarEl.removeEventListener("scroll", visibleNextAndPrevBtnOnScroll);
    };
  }, []);

  return {
    sliderEl,
    sliderPrevBtn,
    sliderNextBtn,
    scrollToTheRight,
    scrollToTheLeft,
  };
}
