// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import {
  Pagination,
  Navigation,
  EffectCards,
  EffectCoverflow,
  FreeMode,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import brodhav from "../assets/brodhav.jpeg";
import basstronik from "../assets/basstronik.webp";

function Artists() {
  const artistCarouselCard = [
    {
      id: 1,
      name: "Brodha V",
      description:
        "Brodha V is an Indian rapper, songwriter, and music producer known for his unique style that blends traditional Indian sounds with contemporary hip-hop and rap.",
      button_text: "View Profile",
      img: brodhav,
      link: "https://www.instagram.com/brodhav/?hl=en",
    },
    {
      id: 2,
      name: "BassTronik",
      description:
        "BassTronik is an up-and-coming DJ known for his versatility and the ability to blend various genres seamlessly, creating a unique and energetic atmosphere in his sets.",
      button_text: "View Profile",
      img: basstronik,
      link: "https://instagram.com/bass_tronik?igshid=YzAwZjE1ZTI0Zg==",
    },
  ];

  const artistCardInfo = artistCarouselCard.map((artist) => {
    return {
      profile: artist.img,
      name: artist.name,
      description: artist.description,
      button_text: artist.button_text,
      link: artist.link,
    };
  });

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="container px-6 py-12 mx-auto">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-normal heading-text tracking-wide text-center text-gray-100 lg:text-4xl">
          Artists
        </h1>
      </div>
      <div className="mt-10 md:mt-20 flex   gap-8 items-center  md:px-20 sm:px-10 px-5 md:flex-row  flex-col-reverse overflow-hidden">
        <div className="flex-1  w-full md:pl-0">
          <div className=" py-auto flex flex-col items-center justify-center md:items-start md:justify-start lg:w-5/6 w-full mx-auto md:gap-6 gap-2 ">
            <p className="md:text-4xl text-2xl text-center md:text-left w-full bg-custom-gradient font-bold  leading-snug">
              {artistCardInfo[activeSlide].name}
            </p>
            <p className="hidden md:block md:text-sm w-full  font-normal  text-gray-100 xl:text-2xl lg:text-left xl:leading-9  tracking-wide">
              {artistCardInfo[activeSlide].description}
            </p>
            <div className="my-4">
              <Link
                to={artistCardInfo[activeSlide].link}
                className="inline-flex h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 items-center justify-center gap-2 py-3 px-12 rounded-md md:flex cursor-pointer"
              >
                <span className="text-lg font-medium">
                  {artistCardInfo[activeSlide].button_text}
                </span>
                <span>
                  <HiArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 sm:w-4/5 w-5/6">
          <Swiper
            effect="cards"
            loopedSlides={2}
            grabCursor={true}
            autoplay={true}
            speed={500}
            onSlideChange={(swiper) => {
              setActiveSlide(swiper.activeIndex);
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            freeMode={true}
            spaceBetween={10}
            modules={[
              EffectCoverflow,
              Autoplay,
              Pagination,
              EffectCards,
              FreeMode,
              Navigation,
            ]}
            className="swiper_container  sample-slider md:pb-20"
          >
            {artistCardInfo.map((item, index) => {
              return (
                <SwiperSlide key={index} className="  ">
                  <div className="">
                    <img
                      src={item.profile}
                      alt="image"
                      fill
                      className="object-cover"
                      loading="eager"
                      width="375"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="w-full flex items-center md:justify-center justify-center md:gap-10 gap-5  lg:mt-0 mt-5 ">
        <button ref={navigationPrevRef} name="nextRef" aria-label="Next">
          <HiArrowLeft className="border-2 border-[#5c5710] text-[#f6e27a] rounded-full  p-3 md:h-16 md:w-16 h-12 w-12" />
        </button>
        <button ref={navigationNextRef} name="prevRef" aria-label="Previous">
          <HiArrowRight className="border-2 border-[#5c5710] text-[#f6e27a] rounded-full  p-3 md:h-16 md:w-16 h-12 w-12" />
        </button>
      </div>
    </div>
  );
}

export default Artists;
