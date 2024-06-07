"use client";
import { useState } from "react";

const initialData = {
  tasks: [
    { id: 1, title: "slicing", status: "To Do" },
    { id: 2, title: "integrasi", status: "In Progress" },
    { id: 3, title: "testing", status: "Done" },
  ],
  columns: ["To Do", "In Progress", "Done"],
};

const statusTask = (status: string) => {
  switch (status) {
    case "To Do":
      return "bg-dark-600/10 border-dark-600";
    case "In Progress":
      return "bg-blue-700/10 border-blue-700";
    case "Done":
      return "bg-green-500/10 border-green-500";
    default:
      return "bg-dark-600/10 border-dark-400";
  }
};

const KanbanBoard = () => {
  const [data, setData] = useState(initialData);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const handleDragStart = (e: any, taskId: number) => {
    e.dataTransfer.setData("taskId", taskId);
  };

  const handleDragEnd = () => {
    setDragIndex(null);
  };

  const handleDrop = (e: any, column: string) => {
    const taskId = e.dataTransfer.getData("taskId");
    const updatedTasks = getUpdatedTasks(data.tasks, taskId, column, dragIndex);
    setData({ ...data, tasks: updatedTasks });
    handleDragEnd();
  };

  const handleDragOver = (e: any, index: number) => {
    e.preventDefault();
    setDragIndex(index);
  };

  const getUpdatedTasks = (
    tasks: any,
    taskId: any,
    column: any,
    targetIndex: any,
  ) => {
    const taskIndex = tasks.findIndex((t: any) => t.id === Number(taskId));
    const task = tasks[taskIndex];
    const filteredTasks = tasks.filter((t: any) => t.id !== Number(taskId));
    const columnTasks = filteredTasks.filter((t: any) => t.status === column);

    const newColumnTasks = [
      ...columnTasks.slice(0, targetIndex),
      { ...task, status: column },
      ...columnTasks.slice(targetIndex),
    ];

    return [
      ...filteredTasks.filter((t: any) => t.status !== column),
      ...newColumnTasks,
    ];
  };
  return (
    <div className="flex space-x-4 p-4">
      {data.columns.map((column) => (
        <div
          key={column}
          className="flex flex-col w-1/3 bg-dark-400 p-4 rounded-lg shadow-md"
          onDrop={(e) => handleDrop(e, column)}
          onDragOver={(e) => e.preventDefault()}
        >
          <h2 className="text-lg font-bold mb-4">{column}</h2>
          {data.tasks
            .filter((task) => task.status === column)
            .map((task, idx) => (
              <div
                key={task.id}
                className={`p-2 mb-2 rounded shadow cursor-pointer border
                  ${statusTask(task.status)}
                  `}
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => handleDragOver(e, idx)}
              >
                {task.title}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
