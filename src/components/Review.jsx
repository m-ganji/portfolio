import useLanguage from "../hooks/useLanguage";
import lightDot from "../assets/dots-light.svg";
import darkDot from "../assets//dots-dark.svg";
import avatar from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { useTheme } from "../context/ThemeUtils";

export default function Review() {
  const { t, handleChangeLanguage } = useLanguage();

  const { theme } = useTheme();

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="flex items-baseline mb-5">
        {theme === "light" ? (
          <img src={lightDot} alt="Light Dot" />
        ) : (
          <img src={darkDot} alt="Dark Dot" />
        )}
        <p className="text-2xl font-bold">{t("main.sixPart.header")}</p>
      </div>
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
        <SwiperSlide className="bg-darkGray dark:bg-darkGrayMode border border-gray rounded-2xl">
          <div className="flex p-8">
            <img
              src={avatar}
              alt=""
              className="rounded-full"
              style={{ height: "60px", width: "60px" }}
            />
            <span className="ml-4 w-full text-left">
              <p className="text-xl font-bold">{t("main.sixPart.firstName")}</p>
              <p>{t("main.sixPart.firstJob")}</p>
            </span>
          </div>
          <p className="m-4 text-center">{t("main.sixPart.firstText")}</p>
        </SwiperSlide>
        <SwiperSlide className="bg-darkGray dark:bg-darkGrayMode border border-gray rounded-2xl">
          <div className="flex p-8">
            <img
              src={avatar3}
              alt=""
              className="rounded-full"
              style={{ height: "60px", width: "60px" }}
            />
            <span className="ml-4 w-full text-left">
              <p className="text-xl font-bold">
                {t("main.sixPart.secondName")}
              </p>
              <p>{t("main.sixPart.secondJob")}</p>
            </span>
          </div>
          <p className="text-center m-4">{t("main.sixPart.secondText")}</p>
        </SwiperSlide>
        <SwiperSlide className="bg-darkGray dark:bg-darkGrayMode border border-gray rounded-2xl">
          <div className="flex p-8">
            <img
              src={avatar2}
              alt=""
              className="rounded-full"
              style={{ height: "60px", width: "60px" }}
            />
            <span className="ml-4 w-full text-left">
              <p className="text-xl font-bold">{t("main.sixPart.thirdName")}</p>
              <p>{t("main.sixPart.thirdJob")}</p>
            </span>
          </div>
          <p className="text-center m-4">{t("main.sixPart.thirdText")}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
