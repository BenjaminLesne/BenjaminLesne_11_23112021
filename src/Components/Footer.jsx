import { ReactComponent as Logo } from "../assets/Logo.svg";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logoWrapper">
        <Logo />
      </div>

      <small className="footer__copyrights">
        © 2020 Kasa. All rights reserved
      </small>
    </footer>
  );
};

export default Footer;
