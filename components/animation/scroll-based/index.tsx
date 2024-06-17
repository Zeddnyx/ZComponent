import Image from "next/image";

import { aurora } from "@/lib/image";
import styles from "@/styles/modules/scrollBased.module.css";

export default function Index() {
  return (
    <div className={`${styles.container} no-scrollbar`}>
      <div className={styles.headerContent}>
        <Image
          src={aurora}
          alt="random image"
          width={100}
          height={100}
          className={styles.headerImage}
        />
        <div>
          <h2>Lorem ipsum dolor sit amet </h2>
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit
          </p>
        </div>
      </div>
      <article>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        </p>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        </p>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        </p>
      </article>
    </div>
  );
}
