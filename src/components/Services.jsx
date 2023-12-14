import lightDot from "../assets/dots-light.svg";
import darkDot from "../assets//dots-dark.svg";
import useLanguage from "./useLanguage";
import { SlDiamond } from "react-icons/sl";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { PiNoteDuotone } from "react-icons/pi";

export default function Services({ theme }) {
  const { t, handleChangeLanguage } = useLanguage();
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
                Web Design{" "}
              </h2>
              <p>
                Elevate user experiences with visually stunning layouts and
                intuitive interfaces, blending creativity with functionality.
                {/* Persian: ارتقای تجربه کاربر با طرح بندی های خیره کننده از نظر بصری و رابط های کاربری گویا
                Persian: ترکیب خلاقیت با کارکرد */}
              </p>
            </div>
          </div>

          <div className="border border-gray p-4 flex justify-center items-center mt-14 sm:mt-0 bg-darkGray dark:bg-darkGrayMode rounded-2xl">
            <MdOutlineDeveloperMode
              className="w-[80px] h-[80px] mb-44 absolute bg-transparent dark:bg-black"
              color="#F66C59"
            />
            <div className="relative mt-10">
              <h2 className="font-bold text-xl flex justify-center">
                Web Developement
              </h2>
              <p>
                Transform design concepts into responsive, interactive websites,
                bridging front-end aesthetics with back-end functionality.
                {/* Persian: تبدیل مفاهیم طراحی به وب سایت های پاسخگو و تعاملی
                Persian: پیوند زیبایی شناسی frontend با کارکرد back-end */}
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
                App developer
              </h2>
              <p>
                Shape cutting-edge mobile experiences with platform-specific
                languages, delivering seamless functionality in the palm of
                users' hands.
                {/* Persian: شکل دادن به تجربه های موبایلی پیشرفته با زبان های خاص پلتفرم
                Persian: ارائه عملکرد یکپارچه در کف دست کاربران */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
