import SparePartsListItem from "./SparePartsListItem";
import styles from "../styles/SparePartsList.module.css";

const SparePartsList = ({ sparePartsList }) => {
  return (
    <ul className={styles.sparePartsList}>
      {sparePartsList.map((spareParts, idx) => (
        <SparePartsListItem key={idx} spareParts={spareParts} />
      ))}
    </ul>
  );
};

export default SparePartsList;
