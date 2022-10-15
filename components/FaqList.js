import FaqListItem from "./FaqListItem";
import styles from "../styles/FaqList.module.css";

const FaqList = ({ faqList }) => {
  const faqToShow = faqList.filter((item) => item.isActive === "true");
  return (
    <div className={styles.faqList}>
      {faqToShow.map((item, idx) => (
        <FaqListItem key={idx} faq={item} />
      ))}
    </div>
  );
};

export default FaqList;
