import { useEffect, useRef, useState } from "react";
import styles from "@/styles/component/form.module.css";
import { cn } from "@/lib/utils";

let OTP_INDEX: number = 0;
export default function Otp({
  length = 4,
  onChange,
  divide,
  className,
  isError,
  isCorrect,
  disabled,
}: IOtp) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const [current, setCurrent] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const newOtp = [...otp];
    newOtp[OTP_INDEX] = value.substring(value.length - 1);

    if (!value) setCurrent(OTP_INDEX - 1);
    else setCurrent(OTP_INDEX + 1);

    setOtp(newOtp);
    onChange(value);
  };

  const handleKeyDown = ({ key }: { key: string }, id: number) => {
    OTP_INDEX = id;
    if (key === "Backspace") setCurrent(OTP_INDEX - 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [current]);

  return (
    <div className={styles.otp}>
      {otp.map((_, id) => {
        return (
          <div key={id}>
            {divide && id !== 0 && <div />}
            <input
              ref={id === current ? inputRef : null}
              type="number"
              value={otp[id]}
              disabled={disabled}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, id)}
              className={cn(`${styles.input} ${className}`, {
                "border-primary": id === current,
                "!border-danger": isError,
                "!border-primary": isCorrect,
                "opacity-50 cursor-not-allowed": disabled,
                "": divide && id == 0,
              })}
            />
          </div>
        );
      })}
    </div>
  );
}
