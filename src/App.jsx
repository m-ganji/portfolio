// css
import "./App.css";
// images
import Developer from "./assets/developer.png";
import Shape from "./assets/shape.svg";
import ShapeLight from "./assets/shape-light.svg";
import lightDot from "../src/assets/dots-light.svg";
import darkDot from "../src/assets/dots-dark.svg";
// icons
import { PiTelegramLogoThin } from "react-icons/pi";
import { LuDownload } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaArrowTurnDown } from "react-icons/fa6";
// libraries

import { Routes, Route, useLocation } from "react-router-dom";
// components
import ButtonCom from "./components/ButtonCom";
import TabsCom from "./components/TabsCom";
import useLanguage from "./hooks/useLanguage";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import useTheme from "./hooks/useTheme";
import NoMatch from "./components/NoMatch";
import Layout from "./components/Layout";

export default function App() {
  const { t, handleChangeLanguage } = useLanguage();
  // switching the theme
  const { theme, toggleTheme } = useTheme("light");

  const handleThemeSwitch = () => {
    toggleTheme();
  };

  return (
    <div>
      <Routes>
        <Route index element={<Home state={{ theme: theme }} />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

function Home() {
  // switching the theme
  const location = useLocation();
  const theme = location.state ? location.state.theme : "light";

  const { toggleTheme } = useTheme(theme);
  const handleThemeSwitch = () => {
    toggleTheme();
  };
  // switching the language
  const { t, handleChangeLanguage } = useLanguage();

  return (
    <div className="bg-lightBg dark:bg-black dark:text-lightBg w-full h-full font-sans z-10">
      <Layout />

      <main className="mx-[10%] flex flex-col">
        <div className="first_part flex">
          <section className="mt-[12%] w-full dark:text-lightBg sm:w-1/2 flex flex-col justify-center items-center">
            <h1 className="text-mainOrange">{t("main.firstPart.firstLine")}</h1>
            <h4 className="text-6xl font-semibold mt-5 text-black">
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
          <section className="hidden sm:flex w-1/2 mt-[12%] sm:justify-end">
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
        <button className="mt-10" onClick={() => handleChangeLanguage("en")}>
          en
        </button>
        <button onClick={() => handleChangeLanguage("fa")}>fa</button>
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
      <Footer theme={theme} />
    </div>
  );
}
