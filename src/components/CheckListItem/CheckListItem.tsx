import Checkbox from "../Checkbox";
import styles from "./styles.module.css";

function CheckListItem({
  title,
  totalContent,
  totalTime,
}: {
  title: string;
  totalContent?: string;
  totalTime: number;
}) {
  return (
    <div className={styles.container}>
      <Checkbox />
      <div className="cluster" style={{ columnGap: "var(--s2)" }}>
        <h2>{title}</h2>
        <span>{totalContent}</span>
        <span>Total Time: {totalTime} minutes</span>
      </div>
    </div>
  );
}

export default CheckListItem;
