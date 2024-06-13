import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FiPhone, FiX } from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import "./Footer.scss";

function Footer() {
  return (
    <footer id="contact">
      <div className="container">
        <div className="row">
          <div className="col contact">
            <h3>Contact Us</h3>
            <p>
              <HiOutlineOfficeBuilding />
              <a
                href="https://www.google.com/maps/search/?api=1&query=123%20Restaurant%20Street%2C%20City%2C%20Country"
                target="_blank"
                rel="noopener noreferrer"
              >
                123 Restaurant Street
              </a>
            </p>

            <p>
              <FiPhone /> <a href="tel:+201122636253">+201122636253</a>
            </p>
            <p>
              <a href="mailto:mrsamir.official@gmail.com">
                amrsamir.official@gmail.com
              </a>
            </p>
          </div>
          <div className="col hours">
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 9am - 10pm</p>
            <p>Saturday - Sunday: 10am - 11pm</p>
          </div>
          <div className="col social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/fb.Amr.Samir"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/amr-samir-a07790303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="x"
                href="https://x.com/AMruSamir?t=MTdvuR2AhMyvUyqa3iKQIw&s=08"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiX />
              </a>
              <a
                href="https://amrsamir-portfolio.web.app/"
                className="portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Restaurant Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
