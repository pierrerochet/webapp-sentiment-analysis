// emojis
// import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
// import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
// import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
// import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
// import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
//

import FaceWithSymbolsOnMouth from "../images/FaceWithSymbolsOnMouth.png";
import FaceWithSteamFromNose from "../images/FaceWithSteamFromNose.png";
import ThinkingFace from "../images/ThinkingFace.png";
import SmilingFaceWithSmilingEyes from "../images/SmilingFaceWithSmilingEyes.png";
import StarStruck from "../images/StarStruck.png";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import "../css/Note.css";

export const sentimentColors = {
  null: "#344335",
  1: "#E74C3C",
  2: "#F0B27A",
  3: "#FCF3CF",
  4: "#7DCEA0",
  5: "#28B463",
};

function displayEmojisNote(sentiment) {
  return (
    <div className="note-items">
      <img
        src={FaceWithSymbolsOnMouth}
        alt="Face With Symbols On Mouth"
        className={sentiment === 1 ? "emoji-enabled" : "emoji-desabled"}
      />
      <img
        src={FaceWithSteamFromNose}
        alt="Face With Steam From Nose"
        className={sentiment === 2 ? "emoji-enabled" : "emoji-desabled"}
      />
      <img
        src={ThinkingFace}
        alt="Thinking Face"
        className={sentiment === 3 ? "emoji-enabled" : "emoji-desabled"}
      />
      <img
        src={SmilingFaceWithSmilingEyes}
        alt="Smiling Face With Smiling Eyes"
        className={sentiment === 4 ? "emoji-enabled" : "emoji-desabled"}
      />
      <img
        src={StarStruck}
        alt="Star Struck"
        className={sentiment === 5 ? "emoji-enabled" : "emoji-desabled"}
      />
      {/* <SentimentVeryDissatisfiedIcon
        className={sentiment === 1 ? "emoji-enabled" : "emoji-desabled"}
        style={{ color: sentimentColors[1] }}
      />

      <SentimentDissatisfiedIcon
        className={sentiment === 2 ? "emoji-enabled" : "emoji-desabled"}
        style={{ color: sentimentColors[2] }}
      />

      <SentimentSatisfiedIcon
        className={sentiment === 3 ? "emoji-enabled" : "emoji-desabled"}
        style={{ color: sentimentColors[3] }}
      />

      <SentimentSatisfiedAltIcon
        className={sentiment === 4 ? "emoji-enabled" : "emoji-desabled"}
        style={{ color: sentimentColors[4] }}
      />

      <SentimentVerySatisfiedIcon
        className={sentiment === 5 ? "emoji-enabled" : "emoji-desabled"}
        style={{ color: sentimentColors[5] }}
      /> */}
    </div>
  );
}

function displayStarsNote(sentiment) {
  return (
    <div className="note-items">
      {[1, 2, 3, 4, 5].map((item) => {
        return sentiment >= item ? (
          <StarIcon className="star" key={item} />
        ) : (
          <StarBorderIcon className="star" key={item} />
        );
      })}
    </div>
  );
}

export function Note({ sentiment, style }) {
  return (
    <div>
      <Typography align="center">Score given by the algorithm :</Typography>
      <div>
        {style === "emojis"
          ? displayEmojisNote(sentiment)
          : displayStarsNote(sentiment)}
      </div>
      <Typography align="center">{sentiment} / 5</Typography>
    </div>
  );
}

export default Note;
