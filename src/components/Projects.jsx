import useLanguage from "../hooks/useLanguage";
import lightDot from "../assets/dots-light.svg";
import darkDot from "../assets//dots-dark.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import firstSite from "../assets/firstSite.png";
import secondSite from "../assets/forkify.png";
import thirdSite from "../assets/bankist.png";
import fourthSite from "../assets/fourthSite.png";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
import { Pagination } from "swiper/modules";
import { useTheme } from "../context/ThemeUtils";
import ButtonCom from "./ButtonCom";
import { Link } from "react-router-dom";

export default function Projects() {
  const { t, handleChangeLanguage } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full flex justify-center items-center sm:w-1/4 sm:justify-start">
        {theme === "light" ? (
          <img src={lightDot} alt="Light Dot" width={22} height={22} />
        ) : (
          <img src={darkDot} alt="Dark Dot" />
        )}
        <p className="text-2xl font-bold">{t("main.fourthPart.title")}</p>
      </div>
      <div className="w-full sm:w-[74%]">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1000: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination]}
          className="swiper-1"
        >
          <SwiperSlide className="dark:bg-black bg-lightBg border border-gray rounded-lg shadow-2xl mb-56">
            <div
              className="relative justify-center
              bg-lightWork dark:bg-darkWork 
                h-3/4 w-full flex "
            >
              <img
                src={firstSite}
                className="absolute bottom-0 w-1/2 h-1/2 flex justify-center items-center shadow-2xl"
                alt="first website"
              />
            </div>
            <div className="flex justify-center items-center flex-col">
              <p>Sedreh Website</p>
              <Link to="https://sedrehai.ir/" className="">
                <ButtonCom
                  title={t("main.fourthPart.button")}
                  className="bg-mainOrange text-lightBg mt-5 gap-1 mb-5"
                />
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="dark:bg-black bg-lightBg border border-gray rounded-lg shadow-2xl mb-56">
            <div
              className="relative justify-center
              bg-lightWork dark:bg-darkWork xl:bg-work_project_bg_light
               xl:bg-[110%] xl:bg-no-repeat overflow-hidden p-11 h-3/4 w-full flex items-start border-gray rounded-lg "
            >
              <img
                src={secondSite}
                className="absolute bottom-0 w-1/2 h-1/2 flex justify-center items-center shadow-2xl"
                alt="first website"
              />
            </div>
            <div className="h-1/4">
              <p>Sedreh Website1</p>
              <span>test</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="dark:bg-black bg-lightBg border border-gray rounded-lg shadow-2xl mb-56">
            <div
              className="relative justify-center
              bg-lightWork dark:bg-darkWork xl:bg-work_project_bg_light
               xl:bg-[110%] xl:bg-no-repeat overflow-hidden p-11 h-3/4 w-full flex items-start border-gray rounded-lg "
            >
              <img
                src={thirdSite}
                className="absolute bottom-0 w-1/2 h-1/2 flex justify-center items-center shadow-2xl"
                alt="first website"
              />
            </div>
            <div className="h-1/4">
              <p>Sedreh Website1</p>
              <span>test</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
