import { useState, DragEvent } from "react";
import Card, { DropIndicator } from "./card";

const KanbanBoard = ({ initialData }: any) => {
  const [data, setData] = useState(initialData);
  const [draggedCard, setDraggedCard] = useState(null);

  const getTouchPosition = (e: TouchEvent): number => {
    return e.touches[0].clientY;
  };

  const isDragEvent = (e: DragEvent | TouchEvent): e is DragEvent => {
    return (e as DragEvent).dataTransfer !== undefined;
  };

  const dragStart = (e: any, card: any) => {
    const { position } = card;
    if (isDragEvent(e)) e?.dataTransfer?.setData("cardID", position);
    setDraggedCard(position);
  };

  const highlightIndicator = (e: DragEvent | TouchEvent, column: string) => {
    const indicator = getIndicator(column);
    clearHighlight(indicator, column);
    const el = getNearestElement(e, indicator);
    el?.el?.classList.add("opacity-100");
  };

  const clearHighlight = (els?: any, column?: string) => {
    const indicator = els || getIndicator(column || "");
    indicator?.forEach((el: any) => {
      el.classList.remove("opacity-100");
    });
  };

  const getIndicator = (column: string) => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const getNearestElement = (e: any, indicator: any) => {
    const DISTANCE = 50;
    const clientY = (e as TouchEvent).touches
      ? (e as TouchEvent)?.touches[0]?.clientY
      : (e as DragEvent)?.clientY;

    const el = indicator?.reduce(
      (prev: any, curr: any) => {
        const box = curr?.getBoundingClientRect();
        const offset = clientY - (box.top + DISTANCE);

        if (offset < 0 && offset > prev.offset) {
          return { offset, el: curr };
        } else {
          return prev;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        el: indicator[indicator.length - 1],
      },
    );

    return el;
  };

  const dragOver = (e: DragEvent | TouchEvent, column: string) => {
    e.preventDefault();
    highlightIndicator(e, column);
  };

  const dragLeave = (column: string) => {
    clearHighlight("", column);
  };

  const handleDrop = (e: DragEvent | TouchEvent, column: string) => {
    clearHighlight("", column);

    const cardID =
      draggedCard || (isDragEvent(e) ? e.dataTransfer.getData("cardID") : null);
    const indicator = getIndicator(column);
    const { el } = getNearestElement(e, indicator);
    const prev = el?.dataset?.before || -1;

    if (prev !== cardID) {
      let copy = [...(data || [])];

      const cardToTransferIndex = copy.findIndex(
        (c: any) => c.position == cardID,
      );
      if (cardToTransferIndex === -1) return;

      const cardToTransfer = {
        ...copy[cardToTransferIndex],
        column,
      };

      copy.splice(cardToTransferIndex, 1);

      const insertAtIndex =
        prev == -1
          ? copy.length
          : copy.findIndex((c: any) => c.position == prev);

      copy.splice(insertAtIndex, 0, cardToTransfer);

      setData(copy);
      setDraggedCard(null);
    }
  };

  const col = ["todo", "in-progress", "done"];
  return (
    <div className="flex gap-5 p-4 w-full">
      {col.map((c) => (
        <div
          key={c}
          className="flex flex-col min-w-52 bg-dark-400 p-4 rounded-lg shadow-md"
          onDragOver={(e) => dragOver(e, c)}
          onDragLeave={() => dragLeave(c)}
          onDrop={(e) => handleDrop(e, c)}
          onTouchMove={(e) => dragOver(e as any, c)}
          onTouchEnd={(e) => handleDrop(e as any, c)}
        >
          <h2 className="text-lg font-bold mb-4">{c.replace(/-/g, " ").toUpperCase()}</h2>
          {data
            .filter((d: any) => d.column == c)
            .map((task: any) => (
              <Card
                key={task.position}
                position={task.position}
                title={task.title}
                column={task.column}
                handleDragStart={(e: DragEvent) => dragStart(e, task)}
              />
            ))}
          <DropIndicator column={c} before={-1} />
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
