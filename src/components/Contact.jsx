import useLanguage from "./useLanguage";
import contact from "../assets/Contact.svg";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { CgProfile } from "react-icons/cg";
import { BiSolidMessageDetail } from "react-icons/bi";
import { TextareaAutosize } from "@mui/base";

export default function Contact({ theme }) {
  const { t, handleChangeLanguage } = useLanguage();
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setinputMessage] = useState("");

  const handleInputName = (event) => {
    setInputName(event.target.value);
  };
  const handleInputEmail = (event) => {
    setInputEmail(event.target.value);
  };
  const handleInputMessage = (event) => {
    setinputMessage(event.target.value);
  };

  return (
    <div className="relative">
      <div className="w-full flex">
        <div className="w-1/2">
          <div>
            <div className="flex items-center gap-5">
              <div className="w-6 bg-mainOrange h-1 flex items-start "></div>
              <span>{t("main.fifthPart.title")}</span>
            </div>
            <div className="font-bold text-6xl mt-5 flex flex-col">
              <p>{t("main.fifthPart.work")}</p>
              <p>{t("main.fifthPart.together")}</p>
            </div>
            <p className="w-40 mt-5">{t("main.fifthPart.workSpan")}</p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-start">
          <img src={contact} alt="" className="w-[500px] h-[400px]" />
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-1/2">
          <div className="flex items-center gap-5">
            <MdOutlineEmail color="#F66C59" />
            <p>Mohamad.ganjif@gmail.com</p>
          </div>
          <div className="flex items-center gap-5 mt-10">
            <HiOutlineHome color="#F66C59" />
            <p>Tehran,Tehranpars</p>
          </div>
          <div className="flex items-center gap-5 mt-10">
            <FiPhoneCall color="#F66C59" />
            <p>+989196273474</p>
          </div>
        </div>
        <div className="w-1/2 flex gap-5 flex-col">
          <div className="border border-gray">
            <Box
              sx={{
                color: "#F66C59",
                borderColor: "#F66C59",
                maxWidth: "100%",
              }}
              className="flex"
            >
              <TextField
                fullWidth
                label="Name"
                id="fullWidth"
                value={inputName}
                onChange={handleInputName} // Updated variable name
                InputProps={{
                  endAdornment: (
                    <CgProfile style={{ marginRight: "8px" }} color="#F66C59" />
                  ),
                }}
              />
            </Box>
          </div>

          <div className="border border-gray">
            <Box
              sx={{
                color: "#F66C59",
                borderColor: "#F66C59",
                maxWidth: "100%",
              }}
              className="flex"
            >
              <TextField
                fullWidth
                label="Email"
                id="fullWidth2"
                value={inputEmail}
                onChange={handleInputEmail}
                InputProps={{
                  endAdornment: (
                    <MdOutlineEmail
                      style={{ marginRight: "8px" }}
                      color="#F66C59"
                    />
                  ),
                }}
              />
            </Box>
          </div>
          <div>
            <div className="relative">
              <BiSolidMessageDetail
                color="#F66C59"
                className="absolute right-5 top-5 "
              />
              <TextareaAutosize
                className="w-full bg-lightBg border custom-textarea pl-10 h-16"
                rows={1}
                value={inputMessage}
                onChange={handleInputMessage}
                placeholder="Type your message here"
              />
            </div>
          </div>
          <button className="px-8 py-3 bg-mainOrange rounded-full text-lightBg">
            {t("main.fifthPart.button")}
          </button>
        </div>
      </div>
    </div>
  );
}
