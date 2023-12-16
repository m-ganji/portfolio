import useLanguage from "./useLanguage";
import lightDot from "../assets/dots-light.svg";
import darkDot from "../assets//dots-dark.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import firstSite from "../assets/firstSite.png";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
import { Pagination } from "swiper/modules";

export default function Projects({ theme }) {
  const { t, handleChangeLanguage } = useLanguage();
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full flex justify-center items-center sm:w-1/4 sm:justify-start">
        {theme === "light" ? (
          <img src={lightDot} alt="Light Dot" width={22} height={22} />
        ) : (
          <img src={darkDot} alt="Dark Dot" />
        )}
        <p className="text-2xl font-bold ml-3"> {t("main.fourthPart.title")}</p>
      </div>
      <div className="w-full sm:w-3/4">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="swiper-1"
        >
          <SwiperSlide className="dark:bg-black bg-lightBg border border-gray rounded-lg shadow-2xl mb-56">
            <div
              className="relative justify-center
              bg-lightWork dark:bg-darkWork xl:bg-work_project_bg_light
               xl:bg-[110%] xl:bg-no-repeat overflow-hidden p-11 h-3/4 w-full flex items-start border-gray rounded-lg "
            >
              <img
                src={firstSite}
                className="absolute bottom-0 w-1/2 h-1/2 flex justify-center items-center shadow-2xl"
                alt="first website"
              />
            </div>
            <div className="h-1/4">
              <p>Sedreh Website1</p>
              <span>test</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="dark:bg-black bg-lightBg border border-gray rounded-lg p-11">
            <div
              className="relative justify-center
              bg-lightWork dark:bg-darkWork xl:bg-work_project_bg_light
               xl:bg-[110%] xl:bg-no-repeat overflow-hidden p-11 h-3/4 w-full flex items-start border-gray rounded-lg "
            >
              <img
                src={firstSite}
                className="absolute bottom-0 shadow-2xl w-1/2 h-1/2 flex justify-center items-center "
                alt="first website"
              />
            </div>
            <div className="h-1/4">
              <p>Sedreh Website1</p>
              <span>test</span>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="dark:bg-black bg-darkGray border border-gray rounded-lg ">
            <div
              className="relative justify-center
              bg-lightWork dark:bg-darkWork xl:bg-work_project_bg_light
               xl:bg-[110%] xl:bg-no-repeat overflow-hidden p-11 h-3/4 w-full flex items-start border-gray rounded-lg "
            >
              <img
                src={firstSite}
                className="absolute bottom-0 shadow-2xl w-1/2 h-1/2 flex justify-center items-center "
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
