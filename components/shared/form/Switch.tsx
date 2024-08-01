import styles from "@/styles/component/switch.module.css";

const Switch = ({
  name,
  checked,
  onChange,
  awlaysOn = false,
}: {
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  awlaysOn?: boolean;
}) => {
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleToggle}
        className={`${styles.checkbox} ${awlaysOn && styles.always_on}`}
      />
      <span className={`${styles.slider} ${checked ? styles.on : ""}`} />
    </label>
  );
};

export default Switch;
