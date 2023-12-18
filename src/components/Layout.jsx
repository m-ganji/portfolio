import MobileNav from "./mobileNav";
import Logo from "../assets/Logo.png";
import Iran from "../assets/Iran.png";
import GB from "../assets/England.png";
import useLanguage from "../hooks/useLanguage";
import { PiSunDimLight } from "react-icons/pi";
import { LiaLanguageSolid } from "react-icons/lia";
import useTheme from "../hooks/useTheme";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  // switching the language
  const { t, handleChangeLanguage } = useLanguage();

  // switching the theme
  const { theme, toggleTheme } = useTheme("light");

  const handleThemeSwitch = () => {
    toggleTheme();
  };

  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);

  const toggleLanguageSwitcher = (e) => {
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

  return (
    <>
      <header className="h-[10%] hidden sm:flex justify-between shadow-xl fixed bg-lightBg dark:bg-black w-full z-20">
        <Link to="/" className=" ml-[10%]">
          <img src={Logo} alt="" className="h-20" />
        </Link>
        <div className="flex justify-start items-center gap-5 p-2 dark:text-lightBg mr-[10%]">
          <Link to="/" className="">
            <div className="hover:border-b hover:border-mainOrange hover:text-mainOrange">
              {t("header.firstButton")}
            </div>
          </Link>
          <Link to="/projects" className="">
            <div className="hover:border-b hover:border-mainOrange hover:text-mainOrange">
              {t("header.secondButton")}
            </div>
          </Link>
          <Link to="/contact" className="">
            <div className="hover:border-b hover:border-mainOrange hover:text-mainOrange">
              {t("header.thirdButton")}
            </div>
          </Link>

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

          <button onClick={handleThemeSwitch}>
            <PiSunDimLight />
          </button>
        </div>
      </header>
      <header className="h-[10%] sm:hidden flex justify-between items-center fixed bg-lightBg dark:bg-black w-full z-20">
        <img src={Logo} alt="" className="h-14 ml-[10%]" />
        <div className="flex justify-center items-center gap-1 p-2 mr-[10%]">
          <button
            onClick={handleThemeSwitch}
            className="flex justify-center items-center  dark:text-lightBg dark:bg-darkGrayMode rounded-full w-10 h-10 shadow-xl bg-transparent dark:shadow-darkWork"
          >
            <PiSunDimLight className="flex justify-center items-center w-6 h-6" />
          </button>
        </div>
      </header>
      <MobileNav theme={theme} />
    </>
  );
}
