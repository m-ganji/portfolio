import { Link, useLocation } from "react-router-dom";
import "../../src/App.css";
import { stack as Menu } from "react-burger-menu";
import useLanguage from "../hooks/useLanguage";
import { useTheme } from "../context/ThemeUtils";
import { useState } from "react";
import Iran from "../assets/Iran.png";
import GB from "../assets/England.png";
import { LiaLanguageSolid } from "react-icons/lia";

const MobileNav = ({ themeNav }) => {
  const menuStyles = {
    bmMenu: {
      backgroundColor: themeNav === "dark" ? "#29283E" : "#FFF9F7",
      Color: themeNav === "dark" ? "#29283E" : "#FFF9F7",
    },
    bmBurgerBars: {
      backgroundColor: themeNav === "dark" ? "#FFF9F7" : "#29283E",
    },
    bmItem: {
      color: themeNav === "dark" ? "#FFF9F7" : "#29283E", // Use 'color' here as well
    },
  };

  // switching the language
  const { t, handleChangeLanguage } = useLanguage();

  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);

  const toggleLanguageSwitcher = () => {
    setShowLanguageSwitcher((prev) => !prev);
  };

  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Initial selected language

  const handleLanguageSwitch = (language) => {
    if (selectedLanguage !== language) {
      handleChangeLanguage(language);
      setSelectedLanguage(language);
    }
    setShowLanguageSwitcher(false);
  };

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  // toggling theme
  const { theme, toggleTheme } = useTheme();
  const handleButtonClick = () => {
    toggleTheme();
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
            <li>
              <button onClick={toggleLanguageSwitcher}>
                <LiaLanguageSolid />
              </button>
              {showLanguageSwitcher && (
                <div className="absolute mt-2 bg-white dark:bg-black dark:bg-gray-800 border border-gray dark:border-gray-700 rounded-3xl shadow-md right-[10%] top-[55%]">
                  <button
                    onClick={() => handleLanguageSwitch("en")}
                    className={`w-full py-2 px-4 text-left hover:bg-gray-200 dark:hover:bg-gray-700 flex items-baseline gap-4 ${
                      selectedLanguage === "en"
                        ? "bg-mainOrange border border-gray rounded-t-3xl"
                        : ""
                    }`}
                  >
                    En
                    <img src={GB} alt="" className="w-5 h-w-5" />
                  </button>
                  <div className="w-full bg-mainOrange h-[1px]"></div>
                  <button
                    onClick={() => handleLanguageSwitch("fa")}
                    className={`w-full py-2 px-4 text-left hover:bg-gray-200 dark:hover:bg-gray-700 flex items-baseline gap-4 ${
                      selectedLanguage === "fa"
                        ? "bg-mainOrange border border-gray rounded-b-3xl"
                        : ""
                    }`}
                  >
                    Fa
                    <img src={Iran} alt="" className="w-5 h-w-5" />
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </Menu>
  );
};

export default MobileNav;
