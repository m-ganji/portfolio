import MobileNav from "./MobileNav";
import Logo from "../assets/images/Logo.webp";
import useLanguage from "../hooks/useLanguage";
import { PiSunDimLight } from "react-icons/pi";
import { PiMoon } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeUtils";

export default function Layout() {
  const { t } = useLanguage();

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
        className="h-[80px] hidden sm:flex justify-between shadow-xl fixed bg-lightBg dark:bg-black w-full z-20"
        style={shadowStyle}
      >
        <Link to="/" className="ml-[10%] flex items-center">
          <img
            src={Logo}
            alt="Company Logo - Home"
            className="h-20 w-20 fade-enter"
          />
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

          <button type="button" onClick={handleButtonClick}>
            {theme == "light" ? <PiSunDimLight /> : <PiMoon />}
          </button>
        </div>
      </header>
      <header
        className="h-[10%] sm:hidden flex justify-between items-center fixed bg-lightBg dark:bg-black w-full z-20"
        style={shadowStyle}
      >
        <Link to="/" className=" ml-[10%]">
          <img src={Logo} alt="" className="h-14 w-14 ml-[10%]" />
        </Link>

        <div className="flex justify-center items-baseline gap-1 p-2 mr-[20%] sm:mr-[15%] ">
          <button className="flex justify-center items-baseline dark:text-lightBg dark:bg-darkGrayMode rounded-full w-10 h-10 shadow-xl bg-transparent dark:shadow-darkWork">
            {theme == "light" ? (
              <PiSunDimLight
                onClick={handleButtonClick}
                className="flex justify-center items-center w-6 h-6"
              />
            ) : (
              <PiMoon
                onClick={handleButtonClick}
                className="flex justify-center items-center w-6 h-6"
              />
            )}
          </button>
          <MobileNav />
        </div>
      </header>
    </>
  );
}
