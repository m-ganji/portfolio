import MobileNav from "./mobileNav";
import Logo from "../assets/Logo.png";
import useLanguage from "../hooks/useLanguage";
import { PiSunDimLight } from "react-icons/pi";
import { LiaLanguageSolid } from "react-icons/lia";
import useTheme from "../hooks/useTheme";

export default function Layout() {
  // switching the language
  const { t, handleChangeLanguage } = useLanguage();
  // switching the theme
  const { theme, toggleTheme } = useTheme("light");

  const handleThemeSwitch = () => {
    toggleTheme();
  };

  return (
    <>
      <header className="h-[10%] hidden sm:flex justify-between shadow-xl fixed bg-lightBg dark:bg-black w-full z-20">
        <img src={Logo} alt="" className="h-20 ml-[10%]" />
        <div className="flex justify-start items-center gap-5 p-2 dark:text-lightBg mr-[10%]">
          <div className="hover:border-b hover:border-mainOrange hover:text-mainOrange">
            {t("header.firstButton")}
          </div>

          <div className="hover:border-b hover:border-mainOrange hover:text-mainOrange">
            {t("header.secondButton")}
          </div>
          <div className="hover:border-b hover:border-mainOrange hover:text-mainOrange">
            {t("header.thirdButton")}
          </div>
          <button
            // onClick={(e) => {
            //   handlelanguageSwitch();
            //   console.log(e);
            // }}
            className=""
          >
            <LiaLanguageSolid />
          </button>
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
