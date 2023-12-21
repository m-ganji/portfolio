import { Link, useLocation } from "react-router-dom";
import "../../src/App.css";
import { stack as Menu } from "react-burger-menu";
import {
  FaLinkedinIn,
  FaTelegram,
  FaWhatsapp,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const MobileNav = ({ theme }) => {
  const menuStyles = {
    bmMenu: {
      backgroundColor: theme === "dark" ? "#29283E" : "#FFF9F7",
      Color: theme === "dark" ? "#29283E" : "#FFF9F7",
    },
    bmBurgerBars: {
      backgroundColor: theme === "dark" ? "#FFF9F7" : "#29283E",
    },
    bmItem: {
      color: theme === "dark" ? "#FFF9F7" : "#29283E", // Use 'color' here as well
    },
  };

  return (
    <Menu right className="bg-hamburger" styles={menuStyles}>
      <nav className="hamburger-menu">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">My Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex mt-5 gap-5 absolute bottom-5">
          <FaLinkedinIn color="#F66C59" />
          <FaGithub color="#F66C59" />
          <FaInstagram color="#F66C59" />
          <FaTelegram color="#F66C59" />
          <FaWhatsapp color="#F66C59" />
        </div>
      </nav>
    </Menu>
  );
};

export default MobileNav;
