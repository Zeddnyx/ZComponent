import { TbTableMinus } from "react-icons/tb";
import Checkbox from "../form/Checkbox";
import { shortText } from "@/lib/utils";

export default function Table({ select, setSelect, columns, data }: ITable) {
  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const id = e.target.name;

    if (id === "select-all") {
      if (isChecked) {
        const allIds = data.map((_, index) => String(index));
        setSelect(allIds);
      } else {
        setSelect([]);
      }
    } else {
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
    <div className="border border-dark-800 rounded-t-lg overflow-x-auto custom-scrollbar w-[98vh]">
      <table className="table w-full">
        <thead>
          <tr className="[&>th]:text-left bg-dark-200 rounded-t-lg bg-light *:font-semibold [&>th]:py-5">
            <th className="flex justify-center">
              <Checkbox
                name="select-all"
                checked={select.length === data?.length}
                onChange={handleCheckboxClick}
                className="checkbox"
              />
            </th>
            {columns.map((column) => (
              <th
                style={{ width: column.width }}
                key={column.item}
                className="text-sm text-light-500"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&>tr]:border-t [&>tr]:border-dark-800 [&>tr>td]:py-4 bg-dark-300">
          {data?.map((item, id) => (
            <tr
              key={id}
              className="hover:bg-dark-200 [&>td:last-child]:!rounded-b-lg"
            >
              <td className="w-1 *:flex *:items-center *:!justify-center px-4">
                <Checkbox
                  name={String(id)}
                  className="checkbox"
                  checked={select.includes(String(id))}
                  onChange={handleCheckboxClick}
                />
              </td>
              {columns.map((column) => (
                <td
                  key={column.item}
                  style={{ width: column.width }}
                  className={` ${
                    column.sortable ? "w-20 truncate !pr-10" : ""
                  } text-[13px] sm:text-sm`}
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
