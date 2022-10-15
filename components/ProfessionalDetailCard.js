import StarReviews from "./StarReviews";
import styles from "../styles/ProfessionalDetailCard.module.css";

const ProfessionalDetailCard = ({ details }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_row1}>
        <div className={styles.card_imageNrating}>
          <img src={details.imageUrl} />
          <StarReviews rating={parseInt(details.rating)} />
        </div>
        <div className={styles.card_basicInfo}>
          <div>{details.name}</div>
          <div className={styles.card_servingNexperience}>
            <div>
              <span>Total Serving</span>
              <span>{details.totalServing}</span>
            </div>
            <div>
              <span>Year Experience</span>
              <span>{details.experienceInYears}</span>
            </div>
          </div>
          <button>Brands Expertise</button>
        </div>
      </div>
      <div className={styles.card_keywords}>{details.keywords}</div>
    </div>
  );
};

export default ProfessionalDetailCard;
