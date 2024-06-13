import { AiFillHome } from "react-icons/ai";
import { RiMailLine, RiPhoneLine } from "react-icons/ri";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      <div className="location">
        <AiFillHome />
        <p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Silk%20St%2C%20Barbican%2C%20London%20EC2Y%208DS%2C%20UK"
            target="_blank"
            rel="noopener noreferrer"
          >
            Silk St, Barbican, London EC2Y 8DS, UK
          </a>
        </p>
      </div>
      <div className="contact">
        <div className="phone">
          <RiPhoneLine />
          <p>
            <a href="tel:+201122636253">+201122636253</a>
          </p>
        </div>
        <div className="mail">
          <RiMailLine />
          <p>
            <a href="mailto:mrsamir.official@gmail.com">
              amrsamir.official@gmail.com
            </a>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
