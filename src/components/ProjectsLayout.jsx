import useLanguage from "../hooks/useLanguage";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
import Projects from "./Projects";
import Layout from "./Layout";
import Footer from "./Footer";
import useTheme from "../hooks/useTheme";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProjectsLayout() {
  const { t, handleChangeLanguage } = useLanguage();

  const { theme, toggleTheme } = useTheme("light");
  return (
    <div className="dark:text-lightBg">
      <Layout />
      <div className="p-[10%] mb-[-5%] pt-[25%] sm:pt-[10%] relative bg-lightBg dark:bg-black">
        <Projects theme={theme} className="absolute" />
      </div>
      <div className="w-full h-80 bg-darkGray dark:bg-darkGrayMode flex justify-center items-center flex-col">
        <p className="font-bold text-4xl w-[450px] mb-7">
          {t("main.footer.title")}
        </p>
        <Link
          to="/contact"
          className="transition-opacity duration-300 ease-in-out hover:opacity-80 active:opacity-60"
        >
          <button className="px-8 py-3 bg-mainOrange rounded-full">
            {t("main.footer.button")}
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
