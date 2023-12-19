import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Footer() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: "0px",
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="relative bg-black dark:bg-darkGrayMode w-full h-24 flex flex-col justify-start items-center">
        <div className="flex mt-5 gap-10">
          <FaLinkedinIn color="#F66C59" />
          <FaGithub color="#F66C59" />
          <FaInstagram color="#F66C59" />
          <FaTelegram color="#F66C59" />
          <FaWhatsapp color="#F66C59" />
        </div>
        <BsFillArrowUpCircleFill
          color="#F66C59"
          className="absolute bottom-5 left-5 cursor-pointer w-7 h-7"
          onClick={scrollToBottom}
        />
      </div>
    </>
  );
}
