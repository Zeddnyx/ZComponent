import { cn } from "@/lib/utils";
import styles from "@/styles/component/switch.module.css";

export default function CSwitch({
  isAlwaysOn,
  isInline,
  className,
  label,
  classNameWrap,
  ...props
}: ISwitch) {
  return (
    <div
      className={cn("flex", classNameWrap, {
        "flex-col items-start gap-1": !isInline,
        "flex-row items-center gap-2": isInline,
      })}
    >
      {label && (
        <label htmlFor={props.name} className="text-sm capitalize">
          {label}
        </label>
      )}
      <Switch
        name={props.name}
        checked={props.checked}
        onChange={props.onChange}
        isAlwaysOn={isAlwaysOn}
      />
    </div>
  );
}

function Switch({ isAlwaysOn = false, className, ...props }: ISwitch) {
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(event);
  };

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        name={props.name && props.name}
        checked={props.checked}
        onChange={handleToggle}
        className={cn(
          `${isAlwaysOn && styles.isAways_on}`,
          className,
          styles.checkbox,
          {
            [styles.always_on]: isAlwaysOn,
          },
        )}
      />
      <span className={`${styles.slider} ${props.checked && styles.on}`} />
    </label>
  );
}
