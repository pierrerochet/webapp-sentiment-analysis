import { Note } from "./Note";
import { getSentiment } from "../util";
import Intro from "./Intro";
import Footer from "./Footer";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";
import { withTheme } from "@material-ui/core/styles";
import "../css/Main.css";

class MainRaw extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textAreaValue: "",
      noteStyle: true,
      sentiment: null,
    };
    this.handleAreaValueChange = this.handleAreaValueChange.bind(this);
    this.handleNoteStyleChange = this.handleNoteStyleChange.bind(this);
  }

  handleAreaValueChange(event) {
    const value = event.target.value;
    this.setState({ textAreaValue: value });
    if (value === "") {
      this.setState({ sentiment: null });
    } else {
      getSentiment(value).then((response) => {
        const sent = response.ml_tags.sentiment.label;
        this.setState({ sentiment: sent });
      });
    }
  }

  handleNoteStyleChange() {
    this.setState({ noteStyle: !this.state.noteStyle });
  }

  render() {
    const noteStyle = this.state.noteStyle ? "stars" : "emojis";
    const secondaryColor = this.props.theme.palette.secondary.main;
    const primaryColor = this.props.theme.palette.primary.main;

    const gitHubName = "pierrerochet";
    const gitHubUrl = "https://github.com/pierrerochet";
    const linkedInName = "Pierre Rochet";
    const linkedInUrl = "https://www.linkedin.com/in/pierre-rochet";

    return (
      <div className="main" style={{ background: secondaryColor }}>
        <Typography variant="h3" align="center" className="title">
          Sentiment Analysis
        </Typography>

        <Intro />
        <Typography align="center">
          Enter a comment in <span style={{ color: primaryColor }}>French</span>{" "}
          to test the service :
        </Typography>

        <TextField
          value={this.state.textAreaValue}
          onChange={this.handleAreaValueChange}
          multiline
          className="input-text"
          rows={4}
          placeholder="Ex. Produit conforme à la description"
          autoFocus
          variant="outlined"
        />

        <div>
          <Typography display="inline">stars</Typography>
          <Switch
            color="primary"
            checked={this.state.check}
            onChange={this.handleNoteStyleChange}
            size="medium"
          />
          <Typography display="inline">emojis</Typography>
        </div>

        <Note sentiment={this.state.sentiment} style={noteStyle} />
        <Footer
          gitHubName={gitHubName}
          gitHubUrl={gitHubUrl}
          linkedInName={linkedInName}
          linkedInUrl={linkedInUrl}
        />
      </div>
    );
  }
}

const Main = withTheme(MainRaw);
export default Main;
