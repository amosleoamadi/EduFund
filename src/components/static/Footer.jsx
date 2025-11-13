import { FooterStyle } from "./FooterStyle";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { Logo } from "./HeadersStyle";
import eduLogo from "../../assets/Edulogo.png";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer-container">
        <div className="footer-left">
          <Logo>
            <img src={eduLogo} alt="EduFund Logo" />
          </Logo>
          <p className="description">
            Empowering education through trust and transparency. Making quality
            education accessible to every Nigerian student.
          </p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Platform</h4>
            <a href="#">How It Works</a>
            <a href="#">Success stories</a>
            <a href="#">Partner schools</a>
          </div>

          <div className="link-group">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
          </div>

          <div className="link-group">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© 2025 EduFund. All rights reserved.</p>
        <div className="socials">
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
