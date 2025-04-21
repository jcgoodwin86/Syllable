import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-929630d3c2/icons";
import { Checkbox as RadixCheckbox } from "radix-ui";
import styles from "./styles.module.css";

function Checkbox() {
  return (
    <div className={styles.container}>
      <RadixCheckbox.Root className={`${styles.Root} ${styles.outer}`}>
        <RadixCheckbox.Indicator className={styles.inner}>
          <FontAwesomeIcon icon={byPrefixAndName.fasr.check} />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    </div>
  );
}

export default Checkbox;
