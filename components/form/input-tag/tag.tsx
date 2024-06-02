import { IoIosClose } from "react-icons/io";
import styles from "@/styles/component/form.module.css";

export default function Tag({
  data,
  setData,
}: {
  data: string[];
  setData: Function;
}) {
  const handleRemove = (item: string) => {
    setData(data.filter((i) => i !== item));
  };

  return (
    <div className={styles.tag}>
      {data?.map((item, id) => {
        return (
          <div key={id}>
            <p>{item}</p>
            <button type="button" onClick={() => handleRemove(item)}>
              <IoIosClose />
            </button>
          </div>
        );
      })}
    </div>
  );
}
