import { useState } from "react";
import styles from "../styles/FaqList.module.css";

const FaqListItem = ({ faq }) => {
  const [answerVisible, setAnswerVisible] = useState(false);

  return (
    <div className={`${styles.faqListItem} ` + (answerVisible ? `${styles.faqListItem__answer_hidden_bg}` : `${styles.faqListItem__answer_shown_bg}`  )}  onClick={() => setAnswerVisible(!answerVisible)}>
      <div>
        {answerVisible ? "-" : "+"} {faq.question.split("Q: ")[1]}
      </div>
      <div
        className={
          `${styles.faqListItem__answer} ` +
          (answerVisible ? "" : `${styles.hideAnswer}`)
        }
      >
        {faq.answer.split("Ans: ")[1]}
      </div>
    </div>
  );
};

export default FaqListItem;
