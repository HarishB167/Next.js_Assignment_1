import styles from "../styles/StarReviews.module.css";

const StarReviews = ({ rating }) => {
  return (
    <div className={styles.starReviews}>
      {[...Array(rating).keys()].map(() => (
        <img src="/images/filled_star.svg" />
      ))}
      {[...Array(5 - rating).keys()].map(() => (
        <img src="/images/blank_star.svg" />
      ))}
    </div>
  );
};

export default StarReviews;
