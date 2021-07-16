import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import "../css/Note.css";

function displayEmojisNote(sentiment) {
  return (
    <div>
      <SentimentVeryDissatisfiedIcon
        className={sentiment === 1 ? "emoji-enabled" : "emoji-desabled"}
        style={{ color: "red" }}
      />

      <SentimentDissatisfiedIcon
        className={sentiment === 2 ? "emoji-enabled" : "emoji-desabled"}
        style={{ color: "orange" }}
      />

      <SentimentSatisfiedIcon
        className={sentiment === 3 ? "emoji-enabled" : "emoji-desabled"}
        style={{ color: "lightBlue" }}
      />

      <SentimentSatisfiedAltIcon
        className={sentiment === 4 ? "emoji-enabled" : "emoji-desabled"}
        style={{ color: "lightGreen" }}
      />

      <SentimentVerySatisfiedIcon
        className={sentiment === 5 ? "emoji-enabled" : "emoji-desabled"}
        style={{ color: "green" }}
      />
    </div>
  );
}

function displayStarsNote(sentiment) {
  return (
    <div>
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

function Note({ sentiment, style }) {
  return (
    <div>
      <Typography align="center">Score given by the algorithm :</Typography>
      <div className="note-items">
        {style === "emojis"
          ? displayEmojisNote(sentiment)
          : displayStarsNote(sentiment)}
      </div>
      <Typography align="center">{sentiment} / 5</Typography>
    </div>
  );
}

export default Note;
