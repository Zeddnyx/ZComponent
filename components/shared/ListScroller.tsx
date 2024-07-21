import styles from "@/styles/component/list-scrolling.module.css";
import { SIDEBAR_ITEMS } from "@/constants";
import Link from "next/link";

export default function ListScroller() {
  const allChildren: ISidebar[] = SIDEBAR_ITEMS.reduce((acc, item) => {
    if (item?.children) {
      acc = acc.concat(item?.children);
    }
    return acc;
  }, [] as ISidebar[]);

  const duplicatedChildren = [...allChildren, ...allChildren, ...allChildren];
  return (
    <div className={styles.container}>
      <div className={styles.scroller}>
        {duplicatedChildren.map((item, id) => {
          return (
            <Link href={item.href} key={id}>
              <p key={id}>{item.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
