import { withTheme } from "@material-ui/core/styles";
import "../css/Intro.css";
import Typography from "@material-ui/core/Typography";

function IntroRaw(props) {
  const primaryColor = props.theme.palette.primary.main;
  return (
    <div className="intro">
      <Typography align="center" paragraph>
        Sentiment analysis is primarily a part of{" "}
        <span style={{ color: primaryColor }}>Marketing Strategies</span> to
        monitor the branding of a product, service or business.
      </Typography>
      <Typography align="center" paragraph>
        Below is the demonstration of a{" "}
        <span style={{ color: primaryColor }}>Machine Learning</span> algorithm
        trained on several thousand French comments from the online shopping
        platform Amazon.
      </Typography>
    </div>
  );
}

const Intro = withTheme(IntroRaw);
export default Intro;
