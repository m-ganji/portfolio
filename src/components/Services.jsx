import lightDot from "../assets/dots-light.svg";
import darkDot from "../assets//dots-dark.svg";
import useLanguage from "../hooks/useLanguage";
import { SlDiamond } from "react-icons/sl";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { PiNoteDuotone } from "react-icons/pi";
import { useTheme } from "../context/ThemeUtils";

export default function Services() {
  const { t, handleChangeLanguage } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        {theme === "light" ? (
          <img src={lightDot} alt="Light Dot" />
        ) : (
          <img src={darkDot} alt="Dark Dot" />
        )}
        <p className="text-2xl font-bold"> {t("main.thirdPart.header")}</p>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 ">
          <div className="border border-gray p-4 flex justify-center items-center relative rounded-2xl">
            <PiNoteDuotone
              className="w-[80px] h-[80px] mb-44 absolute bg-lightBg dark:bg-black"
              color="#F66C59"
            />
            <div className="relative mt-10">
              <h2 className="font-bold text-xl flex justify-center">
                {t("main.fourthPart.firstServiceHeader")}
              </h2>
              <p className="text-center">{t("main.fourthPart.firstService")}</p>
            </div>
          </div>

          <div className="border border-gray p-4 flex justify-center items-center mt-14 sm:mt-0 bg-darkGray dark:bg-darkGrayMode rounded-2xl">
            <MdOutlineDeveloperMode
              className="w-[80px] h-[80px] mb-44 absolute bg-transparent dark:bg-black"
              color="#F66C59"
            />
            <div className="relative mt-10">
              <h2 className="font-bold text-xl flex justify-center">
                {t("main.fourthPart.secondServiceHeader")}
              </h2>
              <p className="text-center">
                {t("main.fourthPart.secondService")}{" "}
              </p>
            </div>
          </div>

          <div className="border border-gray p-4 flex justify-center items-center mt-14 sm:mt-0 rounded-2xl">
            <SlDiamond
              className="w-[80px] h-[80px] mb-44 absolute bg-lightBg dark:bg-black"
              color="#F66C59"
            />
            <div className="relative mt-10">
              <h2 className="font-bold text-xl flex justify-center">
                {t("main.fourthPart.thirdServiceHeader")}
              </h2>
              <p className="text-center">{t("main.fourthPart.thirdService")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
