import Image from "next/image";

import styles from "@/styles/component/gallery.module.css";
import { RANDOM_IMAGE } from "@/constants";

export default function Index2() {
  return (
    <div className={styles.gallery2}>
      {RANDOM_IMAGE.map((item, id) => {
        return (
          <Image key={id} src={"https://picsum.photos"} alt={"image"} width={200} height={200} />
        );
      })}
    </div>
  );
}
