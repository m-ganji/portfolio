import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="bg-black dark:bg-darkGrayMode w-full h-24 flex flex-col justify-start items-center">
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
