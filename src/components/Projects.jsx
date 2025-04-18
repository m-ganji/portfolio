import useLanguage from "../hooks/useLanguage";
import lightDot from "../assets/images/dots-light.webp";
import darkDot from "../assets/images/dots-dark.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import firstSite from "../assets/images/firstSite.webp";
import secondSite from "../assets/images/forkify.webp";
import thirdSite from "../assets/images/thirdSite.webp";
import "swiper/css";
import "swiper/css/pagination";
import "../App.css";
import { Pagination } from "swiper/modules";
import { useTheme } from "../context/ThemeUtils";
import { Link } from "react-router-dom";

export default function Projects() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="flex flex-col sm:flex-row h-full justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center h-full sm:w-1/4 sm:justify-start">
        <div className="flex gap-2 mb-5 s:mb-0">
          {theme === "light" ? (
            <img src={lightDot} alt="Light Dot" width={22} height={22} />
          ) : (
            <img src={darkDot} alt="Dark Dot" />
          )}
          <h2 className="text-3xl font-bold sm:whitespace-nowrap">
            {t("main.fourthPart.title")}
          </h2>
        </div>
        <h4 className="text-lg text-darkGrayMode hidden xl:block">
          {t("main.fourthPart.paragraph")}
        </h4>
      </div>
      <div className="w-full sm:w-[75%] grid">
        <Swiper
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1000: {
              slidesPerView: 1,
            },
            1001: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination]}
          className="swiper-1"
        >
          <SwiperSlide className="dark:bg-black bg-lightBg border-2 border-gray rounded-3xl dark:border-gray">
            <div
              className="relative justify-center bg-creamy rounded-tl-3xl rounded-tr-3xl
             dark:bg-darkWork bg-work_project_bg_light
             xl:bg-[110%] xl:bg-no-repeat overflow-hidden h-3/4 flex items-start border-creamy "
            >
              <span className="text-white bg-mainOrange p-2 rounded-full absolute left-0 ml-2 mt-2 text-sm">
                NEXT JS
              </span>
              <img
                src={thirdSite}
                className="absolute bottom-0 w-full h-3/4 object-top flex justify-center items-center shadow-2xl grayscale hover:grayscale-0"
                alt="first website"
                style={{ objectFit: "inherit" }}
              />

              {/* <img
                src={thirdSiteMobile}
                className="absolute bottom-0 w-full h-3/4 object-top object-cover flex justify-center items-center shadow-2xl grayscale hover:grayscale-0"
                alt="first website"
              /> */}
            </div>
            <div className="flex justify-center items-center flex-col">
              <p className="font-bold m-2">NFT Marketplace</p>
              <Link to="https://nft-marketplace-platform.netlify.app/">
                <button className="bg-mainOrange text-lightBg w-32 p-2 rounded-2xl flex items-center justify-center whitespace-nowrap">
                  {t("main.fourthPart.button")}
                </button>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="dark:bg-black bg-lightBg border-2 border-gray rounded-3xl dark:border-gray">
            <div
              className="relative justify-center bg-creamy rounded-tl-3xl rounded-tr-3xl
             dark:bg-darkWork bg-work_project_bg_light
             xl:bg-[110%] xl:bg-no-repeat overflow-hidden h-3/4 flex items-start border-creamy "
            >
              <span className="text-white bg-mainOrange p-2 rounded-full absolute left-0 ml-2 mt-2 text-sm">
                REACT JS
              </span>
              <img
                src={firstSite}
                className="absolute bottom-0 w-full h-3/4 object-top object-cover flex justify-center items-center shadow-2xl grayscale hover:grayscale-0"
                alt="first website"
              />
            </div>
            <div className="flex justify-center items-center flex-col">
              <p className="font-bold m-2">Sedreh</p>
              <Link to="https://sedrehai.ir/">
                <button className="bg-mainOrange text-lightBg w-32 p-2 rounded-2xl flex items-center justify-center whitespace-nowrap">
                  {t("main.fourthPart.button")}
                </button>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide className="dark:bg-black bg-lightBg border-2 border-gray rounded-3xl mb-56">
            <div
              className="relative justify-center bg-creamy rounded-tl-3xl rounded-tr-3xl
             dark:bg-darkWork bg-work_project_bg_light
             xl:bg-[110%] xl:bg-no-repeat overflow-hidden h-3/4 w-full flex items-start border-creamy"
            >
              <span className="text-white bg-mainOrange p-2 rounded-full absolute left-0 ml-2 mt-2 text-sm">
                HTML + CSS + JS
              </span>
              <img
                src={secondSite}
                className="absolute bottom-0 h-3/4  flex justify-center items-center shadow-2xl grayscale hover:grayscale-0"
                alt="first website"
              />
            </div>
            <div className="flex justify-center items-center flex-col ">
              <p className="font-bold m-2">Forkify</p>
              <Link to="https://forkify-full.netlify.app/">
                <button className="bg-mainOrange text-lightBg w-36 p-2 rounded-2xl mb-16 flex items-center justify-center whitespace-nowrap">
                  {t("main.fourthPart.button")}
                </button>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
