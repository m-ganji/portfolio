import "./App.css";
import Programmer from "./assets/images/programmer.webp";
import lightDot from "../src/assets/images/dots-light.webp";
import darkDot from "../src/assets/images/dots-dark.webp";
import Resume from "../src/assets/resume/resume.pdf";
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
import { Routes, Route, Link } from "react-router-dom";
import { motion as m } from "framer-motion";

// components
import ButtonCom from "./components/ButtonCom";
import TabsCom from "./components/TabsCom";
import useLanguage from "./hooks/useLanguage";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import Layout from "./components/Layout";
import ProjectsLayout from "./components/ProjectsLayout";
import { useRef } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/ThemeUtils";

export default function App() {
  return (
    <div>
      <ThemeProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<ProjectsLayout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

function Home() {
  // switching the language
  const { t } = useLanguage();

  // click animation
  const scrollToBottom = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  };

  const tabsRef = useRef(null);

  const { theme } = useTheme();

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="bg-lightBg dark:bg-black dark:text-lightBg w-full h-full font-sans z-10"
    >
      <Layout />
      <main className="mx-[10%] flex flex-col">
        <div className="first_part flex">
          <section className="mt-[24%] w-full dark:text-lightBg flex flex-col justify-center items-center text-center">
            <h1 className="text-mainOrange mt-10 sm:mt-0">
              {t("main.firstPart.firstLine")}
            </h1>
            <h4 className="text-6xl font-semibold mt-5 text-black dark:text-lightBg flex justify-center items-center">
              {t("main.firstPart.secondLine")}
            </h4>
            <p className="mt-5">{t("main.firstPart.thirdLine")}</p>
            <div className="flex gap-8 sm:gap-14">
              <Link to="/contact" className="">
                <ButtonCom
                  title={t("main.firstPart.secondButton")}
                  className="bg-mainOrange text-lightBg mt-5 flex justify-center items-center gap-2 rounded-full p-4 min-w-[48px] min-h-[48px]"
                  icon={<PiTelegramLogoThin />}
                />
              </Link>
              <a href={Resume}>
                <ButtonCom
                  title={t("main.firstPart.firstButton")}
                  className="bg-black text-lightBg mt-5 flex justify-center items-center gap-2 rounded-full p-4 min-w-[48px] min-h-[48px]"
                  icon={<LuDownload />}
                />
              </a>
            </div>
            <div className="flex mt-5 gap-10">
              <a
                href="https://www.linkedin.com/in/mganji1999"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/m-ganji" aria-label="GitHub Profile">
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/_m.ganjii_"
                aria-label="Instagram Profile"
              >
                <FaInstagram />
              </a>
              <a href="https://t.me/Gnj1999" aria-label="Telegram Profile">
                <FaTelegram />
              </a>
              <a
                href="https://wa.me/+989196273474"
                aria-label="WhatsApp Contact"
              >
                <FaWhatsapp />
              </a>
            </div>
          </section>
        </div>
        <div className="second_part flex justify-between items-center mt-28 flex-col">
          <FaArrowTurnDown
            color="#F66C59"
            className="mb-28 cursor-pointer"
            onClick={scrollToBottom}
          />
          <div className="flex justify-center items-center dark:text-lightBg mb-16 font-bold">
            {theme === "light" ? (
              <img src={lightDot} alt="light dot" />
            ) : (
              <img src={darkDot} alt="dark dot" />
            )}
            <p className="text-2xl font-bold">{t("main.secondPart.header")}</p>
          </div>
          <div className="flex w-full">
            <img src={Programmer} alt="" className=" w-1/2 hidden lg:flex" />
            <div className="w-full dark:text-lightBg 2xl:w-1/2" ref={tabsRef}>
              <TabsCom />
            </div>
          </div>
        </div>
        <div className="third_part mt-[25%] sm:mt-[0%]">
          <Services />
        </div>
        <div className="fourth_part mt-14">
          <Projects />
        </div>
        <div className="fourth_part mt-40">
          <Review />
        </div>
      </main>
      <div className="w-full h-80 bg-darkGray dark:bg-darkGrayMode flex justify-center items-center flex-col mt-[10%]">
        <p className="font-bold text-2xl sm:text-4xl w-2/3 sm:w-[450px] mb-7 ">
          {t("main.footer.title")}
        </p>
        <Link
          to="/contact"
          className="w-1/2 sm:w-full flex justify-center items-center"
        >
          <button className="px-6 py-3 bg-mainOrange rounded-full ">
            {t("main.footer.button")}
          </button>
        </Link>
      </div>
      <Footer />
    </m.div>
  );
}
