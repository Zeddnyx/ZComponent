import { TbTableMinus } from "react-icons/tb";

import Checkbox from "../form/Checkbox";
import styles from "@/styles/component/table.module.css";
import { cn, shortText } from "@/lib/utils";

export default function Table({
  select,
  setSelect,
  columns,
  data,
  className,
}: ITable) {
  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const id = e.target.name;

    if (id === "select-all") {
      if (isChecked) {
        const allIds = data.map((_, index) => String(index));
        setSelect && setSelect(allIds);
      } else {
        setSelect && setSelect([]);
      }
    } else {
      setSelect &&
        setSelect((prev) => {
          if (isChecked) {
            return [...prev, id];
          } else {
            return prev.filter((item) => item !== id);
          }
        });
    }
  };

  return (
    <div
      className={`${styles.tableContainer} ${className} block w-full overflow-y-hidden overflow-x-auto custom-scrollbar`}
    >
      <table className="w-full">
        <thead>
          <tr>
            {select && (
              <th className="flex justify-center">
                <Checkbox
                  name="select-all"
                  checked={select && select.length === data?.length}
                  onChange={handleCheckboxClick}
                  className="checkbox"
                />
              </th>
            )}
            {columns?.map((column) => (
              <th
                className={cn("", {
                  "px-2": !select,
                })}
                style={{ width: column.width }}
                key={column.item}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, id) => (
            <tr key={id}>
              {select && (
                <td className="w-1 *:flex *:items-center *:!justify-center px-4">
                  <Checkbox
                    name={String(id)}
                    className="checkbox"
                    checked={select?.includes(String(id))}
                    onChange={handleCheckboxClick}
                  />
                </td>
              )}

              {columns?.map((column) => (
                <td
                  key={column.item}
                  style={{ width: column.width }}
                  className={cn("", {
                    "px-2": !select,
                    "w-20 truncate !pr-10": column.sortable,
                  })}
                >
                  {column.render
                    ? column.render(item)
                    : shortText(item[column.item], 30)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data?.length === 0 && (
        <div className="flex flex-col gap-4 items-center justify-center *:text-dark-900 py-16">
          <TbTableMinus className="text-5xl " />
          <p className="text-center font-semibold text-xl">
            {"Hmm, looks like there's no data to show."}
          </p>
        </div>
      )}
    </div>
  );
}
