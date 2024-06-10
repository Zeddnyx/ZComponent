import { TbTableMinus } from "react-icons/tb";

export default function Table({ select, setSelect, columns, data }: ITable) {
  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const id = e.target.id;

    if (id === "select-all") {
      if (isChecked) {
        const allIds = Array.from(document.querySelectorAll(".checkbox"))
          .filter((checkbox) => checkbox !== e.target)
          .map((checkbox) => checkbox.id);
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
    <div className="border border-dark-800 rounded-t-lg overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr className="[&>th]:text-left bg-dark-350 rounded-t-lg bg-light *:font-semibold [&>th]:py-5">
            <th className="flex justify-center">
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={handleCheckboxClick}
                  id="select-all"
                  style={{ width: 18, height: 18 }}
                />
              </label>
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
        <tbody className="[&>tr]:border-t [&>tr]:border-dark-800 [&>tr>th]:py-4 [&>tr>td]:p-2">
          {data?.length === 0 &&
            columns.map((column) => (
              <th
                style={{ width: column.width }}
                key={column.item}
                className={`${column.sortable ? "max-w-20 truncate pr-10" : ""
                  }`}
              ></th>
            ))}
          {data?.map((item, id) => (
            <tr
              key={id}
              className="hover:bg-dark-300 [&>td:last-child]:!rounded-b-lg"
            >
              <th className="min-w-20 md:min-w-10 w-10">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    id={String(id)}
                    checked={select.includes(String(id))}
                    onChange={handleCheckboxClick}
                    style={{ width: 18, height: 18 }}
                  />
                </label>
              </th>
              {columns.map((column) => (
                <td
                  key={column.item}
                  className={`${column.sortable ? "max-w-20 truncate pr-10" : ""
                    } text-[13px] sm:text-sm`}
                >
                  {column.render ? column.render(item) : item[column.item]}
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
