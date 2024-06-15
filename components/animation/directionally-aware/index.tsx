import styles from "@/styles/modules/directionally-aware.module.css";

export default function Index() {
  return (
    <div className={styles.container}>
      <button type="button" className={`${styles.directionally} ${styles.btn}`}>
        <span></span>
        Click me
        <span></span>
      </button>
    </div>
  );
}
