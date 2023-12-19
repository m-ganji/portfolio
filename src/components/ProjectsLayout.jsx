import useLanguage from "../hooks/useLanguage";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
import Projects from "./Projects";
import Layout from "./Layout";
import Footer from "./Footer";
import useTheme from "../hooks/useTheme";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectsLayout() {
  const { t, handleChangeLanguage } = useLanguage();

  const { theme, toggleTheme } = useTheme("light");
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="dark:text-lightBg"
    >
      <Layout />
      <div className="p-[10%] mb-[-5%] pt-[25%] sm:pt-[10%] relative bg-lightBg dark:bg-black">
        <Projects theme={theme} className="absolute" />
      </div>
      <div className="w-full h-80 bg-darkGray dark:bg-darkGrayMode flex justify-center items-center flex-col mt-[5%] sm:mt-[5%]">
        <p className="font-bold text-2xl sm:text-4xl w-2/3 sm:w-[450px] mb-7 text-center">
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
