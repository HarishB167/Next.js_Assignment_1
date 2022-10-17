import styles from "../styles/SparePartsList.module.css";

const SparePartsListItem = ({ spareParts }) => {
  return (
    <li className={styles.sparePartsListItem}>
      <div>
        <div className={styles.sparePartsListItem__title}>
          {spareParts.title}
        </div>
        <ul>
          {spareParts.spareParts.map((item, idx) => (
            <li key={idx}>
              <span className={styles.sparePartsListItem__partName}>
                {item.partName}
              </span>
              <span className={styles.sparePartsListItem__price}>
                {item.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default SparePartsListItem;
