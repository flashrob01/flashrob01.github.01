import "./../styles/footer.css";
import { useAuth0 } from "@auth0/auth0-react";

const Footer = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <footer>
      <div
        id="N3logo"
        onClick={() => (window.location.href = "https://www.neo.org")}
      >
        <a href="https://www.neo.org" target="_blank">
          <img
            src={require("../images/N3logo.jpg").default}
            className="N3logo"
          />
        </a>
      </div>

      <img
        src={require("../images/linkedin.png").default}
        className="linkedInSignIn_footer"
        onClick={() => loginWithRedirect()}
      />

      <div id="secured">
        Secured by escrow with Nekohit
        <img src={require("../images/cat-dark.png").default} className="Neko" />
      </div>
    </footer>
  );
};

export default Footer;
