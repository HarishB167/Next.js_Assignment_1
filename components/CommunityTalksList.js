import CommunityTalksListItem from "./CommunityTalksListItem";
import styles from "../styles/CommunityTalksList.module.css";

const CommunityTalksList = ({ talksList, showReplayButton }) => {
  return (
    <div className={showReplayButton ? styles.communityTalksList__border : ""}>
      {talksList.map((item) => (
        <CommunityTalksListItem
          data={item}
          showReplayButton={showReplayButton}
        />
      ))}
    </div>
  );
};

export default CommunityTalksList;
