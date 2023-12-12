import useLanguage from "./useLanguage";
import lightDot from "../assets/dots-light.svg";
import darkDot from "../assets//dots-dark.svg";
import avatar from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Review({ theme }) {
  const { t, handleChangeLanguage } = useLanguage();

  //   <div className="flex justify-center items-center">
  //         {theme === "light" ? (
  //           <img src={lightDot} alt="Light Dot" />
  //         ) : (
  //           <img src={darkDot} alt="Dark Dot" />
  //         )}
  //         <p className="text-2xl font-bold"> {t("main.thirdPart.header")}</p>
  //       </div>
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="flex items-baseline mb-5">
        {theme === "light" ? (
          <img src={lightDot} alt="Light Dot" />
        ) : (
          <img src={darkDot} alt="Dark Dot" />
        )}
        <p className="text-2xl font-bold">Reviews</p>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        // direction="horizental"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
          // Add more breakpoints as needed
        }}
      >
        <SwiperSlide className="bg-darkGray dark:bg-darkGrayMode border border-gray rounded-2xl ">
          <div className="flex p-8">
            <img
              src={avatar}
              alt=""
              className=""
              style={{ height: "60px", width: "60px" }}
            />
            <span className="ml-4 w-full text-left">
              <p className="text-xl font-bold">john doe</p>
              <p>game dev</p>
            </span>
          </div>
          <p className="text-justify m-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when
          </p>
        </SwiperSlide>
        <SwiperSlide className="bg-darkGray dark:bg-darkGrayMode border border-gray rounded-2xl">
          <div className="flex p-8">
            <img
              src={avatar2}
              alt=""
              className=""
              style={{ height: "60px", width: "60px" }}
            />
            <span className="ml-4 w-full text-left">
              <p className="text-xl font-bold">john doe</p>
              <p>game dev</p>
            </span>
          </div>
          <p className="text-justify m-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when
          </p>
        </SwiperSlide>
        <SwiperSlide className="bg-darkGray dark:bg-darkGrayMode border border-gray rounded-2xl">
          <div className="flex p-8">
            <img
              src={avatar3}
              alt=""
              className=""
              style={{ height: "60px", width: "60px" }}
            />
            <span className="ml-4 w-full text-left">
              <p className="text-xl font-bold">john doe</p>
              <p>game dev</p>
            </span>
          </div>
          <p className="text-justify m-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
