import { randomItems } from "@/constants";
import styles from "@/styles/component/paralax.module.css";
import Image from "next/image";

export default function Index() {
  return (
    <div className={`${styles.paralax} custom-scrollbar`}>
      {randomItems.map((item, id) => {
        return (
          <div className={styles.paralaxWithContent} key={id}>
            <Image
              src={item.image}
              alt="image"
              width={800}
              height={500}
            />
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
