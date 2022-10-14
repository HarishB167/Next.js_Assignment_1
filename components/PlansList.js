import PlansListItem from "./PlansListItem";
import styles from "../styles/PlansList.module.css";

const PlansList = ({ plansList }) => {
  return (
    <ul className={styles.plansList}>
      {plansList.map((plan, idx) => (
        <PlansListItem key={idx} plan={plan} />
      ))}
    </ul>
  );
};

export default PlansList;
