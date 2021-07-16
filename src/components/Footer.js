import GitHubIcon from "@material-ui/icons/GitHub";
import Button from "@material-ui/core/Button";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../css/Footer.css";

function Footer(props) {
  const { gitHubName, linkedInName } = props;
  return (
    <div className="footer">
      <div className="network-list">
        <Button
          className="network-button"
          variant="contained"
          color="primary"
          size="small"
          endIcon={<LinkedInIcon />}
        >
          {linkedInName}
        </Button>

        <Button
          className="network-button"
          variant="outlined"
          color="primary"
          size="small"
          endIcon={<GitHubIcon />}
        >
          {gitHubName}
        </Button>
      </div>
    </div>
  );
}

export default Footer;
