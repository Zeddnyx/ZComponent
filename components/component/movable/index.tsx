"use client";

import { useState } from "react";

export default function Index() {
  const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number,
  ) => {
    setDraggingIndex(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (
    e: React.DragEvent<HTMLDivElement>,
    index: number,
  ) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setOverIndex(index);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    const fromIndex = draggingIndex;
    const toIndex = index;

    if (fromIndex !== null && fromIndex !== toIndex) {
      const updatedItems = [...items];
      const [movedItem] = updatedItems.splice(fromIndex, 1);
      updatedItems.splice(toIndex, 0, movedItem);
      setItems(updatedItems);
    }

    setDraggingIndex(null);
    setOverIndex(null);
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              className={`${draggingIndex === index ? "bg-dark-400" : ""
                } transition-all duration-500 ease-in-out`}
            >
              <div className="bg-dark-300 rounded p-2 hover:bg-dark-400 ">
                {item}
              </div>
              {overIndex === index && <div className="h-10" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
