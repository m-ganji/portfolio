import MobileNav from "./MobileNav";
import Logo from "../assets/Logo.png";
import Iran from "../assets/Iran.png";
import GB from "../assets/England.png";
import useLanguage from "../hooks/useLanguage";
import { PiSunDimLight } from "react-icons/pi";
import { LiaLanguageSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../context/ThemeUtils";

export default function Layout() {
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

  const linkStyle = {
    borderBottom: isActive("/") ? "2px solid #F66C59" : "none",
    color: isActive("/") ? "#F66C59" : "inherit",
  };

  const linkStyleProjects = {
    borderBottom: isActive("/projects") ? "2px solid #F66C59" : "none",
    color: isActive("/projects") ? "#F66C59" : "inherit",
  };

  const linkStyleContact = {
    borderBottom: isActive("/contact") ? "2px solid #F66C59" : "none",
    color: isActive("/contact") ? "#F66C59" : "inherit",
  };

  // toggling theme
  const { theme, toggleTheme } = useTheme();
  const handleButtonClick = () => {
    toggleTheme();
  };

  const lightShadowStyle = {
    boxShadow: "0px 0px 42px -10px rgba(0, 0, 0, 0.5)",
  };

  const darkShadowStyle = {
    boxShadow: "0px 0px 42px -10px rgb(255 255 255 / 50%)",
  };

  // Determine which shadow style to apply based on the current theme
  const shadowStyle = theme === "dark" ? darkShadowStyle : lightShadowStyle;

  return (
    <>
      <header
        className="h-[10%] hidden sm:flex justify-between shadow-xl fixed bg-lightBg dark:bg-black w-full z-20"
        style={shadowStyle}
      >
        <Link to="/" className=" ml-[10%]">
          <img src={Logo} alt="" className="h-20 fade-enter" />
        </Link>
        <div className="flex justify-start items-center gap-5 p-2 dark:text-lightBg mr-[10%]">
          <Link to="/" className="" style={linkStyle}>
            <div className="hover:text-mainOrange">
              {t("header.firstButton")}
            </div>
          </Link>
          <Link to="/projects" className="" style={linkStyleProjects}>
            <div className="hover:text-mainOrange">
              {t("header.secondButton")}
            </div>
          </Link>
          <Link to="/contact" className="" style={linkStyleContact}>
            <div className="hover:text-mainOrange">
              {t("header.thirdButton")}
            </div>
          </Link>
          {/* <button onClick={toggleLanguageSwitcher}>
            <LiaLanguageSolid />
          </button> */}
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
          <button onClick={handleButtonClick}>
            <PiSunDimLight />
          </button>
        </div>
      </header>
      <header
        className="h-[10%] sm:hidden flex justify-between items-center fixed bg-lightBg dark:bg-black w-full z-20"
        style={shadowStyle}
      >
        <Link to="/" className=" ml-[10%]">
        <img src={Logo} alt="" className="h-14 ml-[10%]" />
        </Link>
        <div className="flex justify-center items-center gap-1 p-2 mr-[20%] sm:mr-[15%] ">
          <button className="flex justify-center items-center  dark:text-lightBg dark:bg-darkGrayMode rounded-full w-10 h-10 shadow-xl bg-transparent dark:shadow-darkWork">
            <PiSunDimLight
              onClick={handleButtonClick}
              className="flex justify-center items-center w-6 h-6"
            />
          </button>
          <MobileNav />
        </div>
      </header>
    </>
  );
}
