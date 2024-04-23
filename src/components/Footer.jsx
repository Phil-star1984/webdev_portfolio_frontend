import React from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <Container fluid className="container_footer">
      <div className="copyright">
        &copy; {new Date().getFullYear()} Millionpainter. All Right Reserved.
      </div>
      <div className="socials pt-2 pb-5">
        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.facebook.com/philsplash/"
              target="blank"
              className="social-link facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} className="icon-large" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.youtube.com/@Theartistphil/videos"
              target="blank"
              className="social-link youtube"
            >
              <FontAwesomeIcon icon={faYoutube} className="icon-large" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/philipp-mulfinger-941498b1/"
              target="blank"
              className="social-link linkedin"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="icon-large" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://github.com/Phil-star1984?tab=repositories"
              target="blank"
              className="social-link github"
            >
              <FontAwesomeIcon icon={faGithub} className="icon-large" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.instagram.com/the_million_painter/?hl=de"
              target="blank"
              className="social-link instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="icon-large" />
            </a>
          </li>
        </ul>
      </div>
      {/* {showTopBtn && <div className="go-top" onClick={goTop}></div>} */}
    </Container>
  );
}

export default Footer;
