import styles from "../styles/PlansList.module.css";

const PlansListItem = ({ plan }) => {
  const greenTickImagePath = "/images/green_tick.svg";
  const redCrossImagePath = "/images/red_cross.svg";

  return (
    <li className={styles.plansListItem}>
      <div>
        <img
          className={styles.plansListItem__cardBanner}
          src={plan.cardBanner}
        />
        <div className={styles.plansListItem__title}>{plan.title}</div>
        <ul>
          {plan.covers.map((item, idx) => (
            <li key={idx}>
              <span className={styles.plansListItem__coversTitle}>
                {item.split(":")[0]}
              </span>
              {item.split(":")[1].trim() == "true" ? (
                <>
                  <img src={greenTickImagePath} />
                  <span>Include</span>
                </>
              ) : (
                <>
                  <img src={redCrossImagePath} />
                  <span>Exclude</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default PlansListItem;
