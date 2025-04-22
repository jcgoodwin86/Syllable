import styles from "./styles.module.css";

function NumberInput({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input type="number" {...rest} className={styles.numberInput} />;
}

export default NumberInput;
