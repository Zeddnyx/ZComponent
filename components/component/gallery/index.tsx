import Image from "next/image";
import { RANDOM_IMAGE } from "@/constants";
import styles from "@/styles/component/gallery.module.css";

export default function Index() {
  const columns = 4; // Number of columns you want to create
  const imagesPerColumn = Math.ceil(RANDOM_IMAGE.length / columns);

  return (
    <div className={styles.container}>
      {Array.from({ length: columns }).map((_, columnIndex) => (
        <div key={columnIndex} className={styles.column}>
          {RANDOM_IMAGE.slice(
            columnIndex * imagesPerColumn,
            (columnIndex + 1) * imagesPerColumn,
          ).map((item, id) => (
            <div key={id}>
              <Image src={item} alt="image" width={800} height={500} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

