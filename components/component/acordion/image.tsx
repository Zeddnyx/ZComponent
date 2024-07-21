import { GiSummits } from "react-icons/gi";

import AcordionImage from "@/components/shared/component/AcordionImage";
import { aurora } from "@/lib/image";
import styles from "@/styles/component/acordion.module.css";

export default function ImageAccordio() {
  return (
    <div className={`${styles.acordionImageContainer} no-scrollbar`}>
      {Array.from({ length: 3 }).map((_, id) => {
        return (
          <AcordionImage
            key={id}
            image={aurora}
            logo={<GiSummits />}
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderitofficia excepteur ex fugiat reprehenderit"
          />
        );
      })}
    </div>
  );
}
