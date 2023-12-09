import lightDot from "../assets/dots-light.svg";
import darkDot from "../assets//dots-dark.svg";
import useLanguage from "./useLanguage";
import { SlDiamond } from "react-icons/sl";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { PiNoteDuotone } from "react-icons/pi";

export default function Services({ theme }) {
  const { t, handleChangeLanguage } = useLanguage();
  return (
    <div className="relative mb-96">
      <div className="flex justify-center items-start">
        {theme === "light" ? (
          <img src={lightDot} alt="Light Dot" />
        ) : (
          <img src={darkDot} alt="Dark Dot" />
        )}
        <p> {t("main.thirdPart.header")}</p>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 ">
          <div className="border border-gray p-4 flex justify-center items-center relative">
            <PiNoteDuotone
              className="w-[100px] h-[100px] mb-48 absolute bg-lightBg"
              color="#F66C59"
            />
            <div className="relative mt-10">
              <h2 className="font-bold text-xl flex justify-center">
                Web Design{" "}
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>

          <div className="border border-gray p-4 flex justify-center items-center">
            <MdOutlineDeveloperMode
              className="w-[100px] h-[100px] mb-48 absolute bg-lightBg"
              color="#F66C59"
            />
            <div className="relative mt-10">
              <h2 className="font-bold text-xl flex justify-center">
                Web Developement
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>

          <div className="border border-gray p-4 flex justify-center items-center">
            <SlDiamond
              className="w-[100px] h-[100px] mb-48 absolute bg-lightBg"
              color="#F66C59"
            />
            <div className="relative mt-10">
              <h2 className="font-bold text-xl flex justify-center">
                App developer
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
