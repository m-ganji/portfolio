import useLanguage from "./useLanguage";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer({ theme }) {
  const { t, handleChangeLanguage } = useLanguage();

  return (
    <div className="mt-24">
      <div className="w-full h-80 bg-darkGray dark:bg-darkGrayMode flex justify-center items-center flex-col ">
        <p className="font-bold text-4xl w-[450px] mb-7">
          {t("main.footer.title")}
        </p>
        <button className="px-8 py-3 bg-mainOrange rounded-full">
          {t("main.footer.button")}
        </button>
      </div>
      <div className="bg-black w-full h-24 flex flex-col justify-start items-center">
        <div className="flex mt-5 gap-10">
          <FaLinkedinIn color="#F66C59" />
          <FaGithub color="#F66C59" />
          <FaInstagram color="#F66C59" />
          <FaTelegram color="#F66C59" />
          <FaWhatsapp color="#F66C59" />
        </div>
      </div>
    </div>
  );
}
