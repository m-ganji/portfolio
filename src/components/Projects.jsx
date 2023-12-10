import useLanguage from "./useLanguage";
import lightDot from "../assets/dots-light.svg";
import darkDot from "../assets//dots-dark.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
// import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../App.css";

export default function Projects({ theme }) {
  const { t, handleChangeLanguage } = useLanguage();

  {
    /* {theme === "light" ? (
    <p>roshan</p>
  ) : (
    <p className="dark:bg-black">tarik</p>
  )} */
  }

  return (
    <div className="flex">
      <div className="w-1/2 flex justify-start items-baseline">
        {theme === "light" ? (
          <img src={lightDot} alt="Light Dot" width={22} height={22} />
        ) : (
          <img src={darkDot} alt="Dark Dot" />
        )}
        <p className="text-2xl font-bold ml-3"> {t("main.fourthPart.title")}</p>
      </div>
      <div className="w-full">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper grid-cols-3"
        >
          <SwiperSlide
            className="relative w-full h-[300px] flex items-center justify-center
            bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light
            xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden dark:bg-black bg-lightBg"
          >
            Slide 1 dassasa asd sa dsad sa da dsa dsad sadqweassd saas dsadas
            dad sa Slide 1 dassasa asd sa dsad sa da dsa dsad sadqweassd saas
            dsadas dad saSlide 1 dassasa asd sa dsad sa da dsa dsad sadqweassd
            saas dsadas dad saSlide 1 dassasa asd sa dsad sa da dsa dsad
            sadqweassd saas dsadas dad saSlide 1 dassasa asd sa dsad sa da dsa
            dsad sadqweassd saas dsadas dad saSlide 1 dassasa asd sa dsad sa da
            dsa dsad sadqweassd saas dsadas dad sa
          </SwiperSlide>

          <SwiperSlide
            className="relative w-full h-[300px] flex items-center justify-center
            bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light
            xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden dark:bg-black bg-lightBg"
          >
            Slide 1 dassasa asd sa dsad sa da dsa dsad sadqweassd saas dsadas
            dad sa Slide 1 dassasa asd sa dsad sa da dsa dsad sadqweassd saas
            dsadas dad saSlide 1 dassasa asd sa dsad sa da dsa dsad sadqweassd
            saas dsadas dad saSlide 1 dassasa asd sa dsad sa da dsa dsad
            sadqweassd saas dsadas dad saSlide 1 dassasa asd sa dsad sa da dsa
            dsad sadqweassd saas dsadas dad saSlide 1 dassasa asd sa dsad sa da
            dsa dsad sadqweassd saas dsadas dad sa{" "}
          </SwiperSlide>

          <SwiperSlide
            className="relative w-full h-[300px] flex items-center justify-center
            bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light
            xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden dark:bg-black bg-lightBg"
          >
            Slide 1 dassasa asd sa dsad sa da dsa dsad sadqweassd saas dsadas
            dad sa Slide 1 dassasa asd sa dsad sa da dsa dsad sadqweassd saas
            dsadas dad saSlide 1 dassasa asd sa dsad sa da dsa dsad sadqweassd
            saas dsadas dad saSlide 1 dassasa asd sa dsad sa da dsa dsad
            sadqweassd saas dsadas dad saSlide 1 dassasa asd sa dsad sa da dsa
            dsad sadqweassd saas dsadas dad saSlide 1 dassasa asd sa dsad sa da
            dsa dsad sadqweassd saas dsadas dad sa{" "}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
