import { Link } from "react-router-dom";
import "../../src/App.css";
import { slide as Menu } from "react-burger-menu";
import { useTheme } from "../context/ThemeUtils";

const MobileNav = () => {
  const { theme } = useTheme();

  const menuStyles = {
    bmMenu: {
      backgroundColor: theme === "dark" ? "#29283E" : "#FFF9F7",
      // Color: theme === "dark" ? "#FF0000" : "#0000FF",
    },
    bmBurgerBars: {
      backgroundColor: theme === "dark" ? "#FFF9F7" : "#242322",
      // Color: theme === "dark" ? "#FF0000" : "#0000FF",
    },
    bmItem: {
      backgroundColor: theme === "dark" ? "#29283E" : "#FFF9F7",
      color: theme === "dark" ? "#FFF9F7" : "#29283E", // Use 'color' here as well
    },
  };

  return (
    <Menu right className="bg-hamburger" styles={menuStyles}>
      <nav className="hamburger-menu">
        <div>
          <ul className="flex flex-col gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">My Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* <li> */}
            {/* <button onClick={toggleLanguageSwitcher}>
                <LiaLanguageSolid />
              </button> */}
            {/* {showLanguageSwitcher && (
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
              )} */}
            {/* </li> */}
          </ul>
        </div>
      </nav>
    </Menu>
  );
};

export default MobileNav;
