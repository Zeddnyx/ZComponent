import { RANDOM_ITEMS } from "@/constants";
import styles from "@/styles/component/paralax.module.css";
import Image from "next/image";

export default function Index() {
  return (
    <div className={`${styles.paralax} no-scrollbar`}>
      {RANDOM_ITEMS.map((item, id) => {
        return (
          <div key={id}>
            <Image
              src={item.image}
              alt="image"
              width={800}
              height={500}
            />
          </div>
        );
      })}
    </div>
  );
}
