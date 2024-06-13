import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { useEffect, useState } from "react";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={"app__headerbar" + ` ${isSticky ? "sticky" : ""}`}>
      <div className="app__headerbar-logo">
        <img src={images.logo} alt="logo" />
        <h3>Ultra Vibe</h3>
      </div>
      <ul className="app__headerbar-links">
        {["home", "menu", "about", "reservation", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__headerbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
