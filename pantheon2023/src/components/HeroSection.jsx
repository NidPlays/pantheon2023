import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Video from "../assets/updated.mp4";
import Image from "../assets/Pantheon.png"
import Timer from "./Timer"

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  return (
    <div
      className="bg-black flex justify-center items-center h-screen absolute z-10 overflow-hidden top-0"
      data-aos="fade-in"
      id="home"
    >
      <video
        className="custom-css-video"
        autoPlay
        loop
        muted
        src={Video}
        type="video/
          mp4"
      />
      <div className="bg-transparent z-10 max-w-7xl absolute py-2 px-6 flex flex-col items-center">
        <div
          className="bg-transparent text-white text-5xl font-semibold text-center font-Montserrat custom-css-hero-h1"
          data-aos="fade-in"
        >
          <img src={Image} alt="" className="h-72 w-72 relative z-50 inline-flex mr-6" />
          <Timer />
        </div>
        <div className="mt-8 flex flex-col items-center">
        </div>
      </div>
    </div>
  );
};

export default HeroSection;