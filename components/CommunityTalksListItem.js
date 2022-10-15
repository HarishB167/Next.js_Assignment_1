import CommunityTalksList from "./CommunityTalksList";
import styles from "../styles/CommunityTalksList.module.css";

const CommunityTalksListItem = ({ data, showReplayButton }) => {
  return (
    <div
      className={
        styles.communityTalksListItem +
        " " +
        (showReplayButton
          ? styles.communityTalksListItem__border
          : styles.communityTalksListItem__noBorder)
      }
    >
      <div
        className={
          styles.communityTalksListItem__row1 +
          " " +
          (showReplayButton
            ? styles.communityTalksListItem__row1_flexRow
            : styles.communityTalksListItem__row1_flexCol)
        }
      >
        <span className={styles.communityTalksListItem__name}>{data.name}</span>
        <span className={styles.communityTalksListItem__dateTime}>
          {data.dateTime}
        </span>
        {showReplayButton && <button>Replay</button>}
      </div>
      <div className={styles.communityTalksListItem__row2}>
        {data.talkDetails}
      </div>
      {data.subtalks && data.subtalks.length > 0 && (
        <CommunityTalksList talksList={data.subtalks} />
      )}
    </div>
  );
};

export default CommunityTalksListItem;
