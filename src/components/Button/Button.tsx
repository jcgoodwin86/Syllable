import styles from "./styles.module.css";

function Button({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const buttonClassName = `${styles.button} ${className}`;

  return <button className={buttonClassName}>{children}</button>;
}

export default Button;
