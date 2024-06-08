const statusTask = (status: string) => {
  switch (status) {
    case "todo":
      return "bg-dark-600/10 border-dark-600";
    case "in-progress":
      return "bg-blue-700/10 border-blue-700";
    case "done":
      return "bg-green-500/10 border-green-500";
    default:
      return "bg-dark-600/10 border-dark-400";
  }
};

export default function Card({
  position,
  title,
  column,
  handleDragStart,
}: ICanbanCard) {
  return (
    <div className="w-full">
      <DropIndicator before={position} column={column} opacity={1} />
      <div
        key={position}
        className={`p-2 rounded-lg shadow cursor-pointer border
          ${statusTask(column)}
      `}
        draggable
        onDragStart={(e) => handleDragStart(e, position)}
        onTouchStart={(e) => handleDragStart(e, position)}
      >
        {title}
      </div>
    </div>
  );
}

export const DropIndicator = ({ before, column, opacity }: any) => {
  return (
    <div
      data-before={before || "-1"}
      data-column={column}
      className={`h-0.5 my-0.5 bg-light dark:bg-light-100 rounded-md opacity-0 ${opacity}`}
    />
  );
};
