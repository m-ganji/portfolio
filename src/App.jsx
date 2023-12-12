import "./App.css";
import Logo from "./assets/Logo.png";
import Developer from "./assets/developer.png";
import Shape from "./assets/shape.svg";
import ShapeLight from "./assets/shape-light.svg";
import { CiLight } from "react-icons/ci";
import ButtonCom from "./components/ButtonCom";
import { PiTelegramLogoThin } from "react-icons/pi";
import { LuDownload } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import { LiaLanguageSolid } from "react-icons/lia";
import { FaArrowTurnDown } from "react-icons/fa6";
import TabsCom from "./components/TabsCom";
import useLanguage from "./components/useLanguage";
import { AiOutlineExclamation } from "react-icons/ai";
import Services from "./components/Services";
import lightDot from "../src/assets/dots-light.svg";
import darkDot from "../src/assets/dots-dark.svg";
import Projects from "./components/Projects";
import Review from "./components/Review";
import Footer from "./components/Footer";

function App() {
  // switching the theme
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // switching the language
  const { t, handleChangeLanguage } = useLanguage();

  return (
    <div className="bg-lightBg dark:bg-black dark:text-lightBg w-full h-full font-sans">
      <header className="h-[10%] flex justify-between mx-[10%]">
        <img src={Logo} alt="" className="h-20" />
        <div className="flex justify-start items-baseline gap-5 p-2 dark:text-lightBg">
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
          {/* {openModal && (
            <button className="px-2 py-2 rounded bg-mainOrange">
              Open Modal
            </button>
          )} */}
          {/* <button
            onClick={handlelanguageSwitch}
            className="flex justify-center items-center flex-col"
          >
            <LiaLanguageSolid />

            <button className="px-4 py-2 rounded bg-black ">Open Modal</button>
          </button> */}
          <button onClick={handleThemeSwitch}>
            <CiLight />
          </button>
        </div>
      </header>
      <button onClick={() => handleChangeLanguage("en")}>en</button>
      <button onClick={() => handleChangeLanguage("fa")}>fa</button>
      <main className="mx-[10%] flex flex-col">
        <div className="first_part flex">
          <section className="mt-[7.5%] w-full dark:text-lightBg sm:w-1/2">
            <h1 className="text-mainOrange">{t("main.firstPart.firstLine")}</h1>
            <h4 className="text-6xl font-semibold mt-5">
              {t("main.firstPart.secondLine")}
            </h4>
            <p className="mt-5">{t("main.firstPart.thirdLine")}</p>
            <div className="flex gap-14">
              <ButtonCom
                title={t("main.firstPart.secondButton")}
                className="bg-mainOrange text-lightBg mt-5 flex justify-center items-center gap-1"
                icon={<PiTelegramLogoThin />}
              />
              <ButtonCom
                title={t("main.firstPart.firstButton")}
                className="bg-black dark:bg-lightBg dark:text-black text-lightBg mt-5 flex justify-center items-center gap-1"
                icon={<LuDownload />}
              />
            </div>
            <div className="flex mt-5 gap-10">
              <FaLinkedinIn />
              <FaGithub />
              <FaInstagram />
              <FaTelegram />
              <FaWhatsapp />
            </div>
          </section>
          <section className="hidden sm:flex w-1/2 mt-[7.5%] sm:justify-end">
            <div className="">
              <div>
                <img
                  className="absolute "
                  src={ShapeLight}
                  height={400}
                  width={400}
                  alt="ShapeLight"
                  style={{ transform: "rotate(45deg)" }}
                />
                <img
                  className="absolute "
                  src={Shape}
                  height={400}
                  width={400}
                  alt="Shape"
                />
              </div>
              <img
                className="relative"
                src={Developer}
                height={400}
                width={400}
                alt="Developer"
              />
            </div>
          </section>
        </div>
        <div className="second_part flex justify-between items-center mt-28 flex-col">
          <FaArrowTurnDown color="#F66C59" className="mb-28" />
          <div className="flex justify-center items-center dark:text-lightBg mb-16 font-bold">
            {theme === "light" ? <img src={lightDot} /> : <img src={darkDot} />}
            <p className="text-2xl font-bold">{t("main.secondPart.header")}</p>
          </div>
          <div className="flex w-full">
            <div className="w-1/2 hidden sm:flex">test</div>
            <div className="w-full dark:text-lightBg sm:w-1/2">
              <TabsCom />
            </div>
          </div>
        </div>
        <div className="third_part">
          <Services theme={theme} />
        </div>
        <div className="fourth_part mt-14">
          <Projects theme={theme} />
        </div>
        <div className="fourth_part mt-40">
          <Review theme={theme} />
        </div>
      </main>
      <footer className="">
        <Footer theme={theme} />
      </footer>
    </div>
  );
}

export default App;
