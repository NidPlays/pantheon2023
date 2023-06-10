import React, { useEffect } from "react";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Typical from "react-typical";
import Video from "../assets/bg.webm";

const HeroSection = () => {
  const [render, setRender] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1500 });
    setTimeout(() => {
      setRender(true);
    }, 1000);
  });

  return (
    <div
      className="bg-black flex justify-center items-center h-screen relative z-10 overflow-hidden"
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
          Pantheon{" "}
          <span
            className=" bg-gradient-to-r bg-clip-text  text-transparent
    from-cyan-500 via-purple-500 to-indigo-500
    animate-text"
          >
            2023
          </span>
        </div>
        {render ? (
          <div className="mt-6 bg-transparent text-white text-2xl text-center max-w-xl font-montserrat custom-css-hero-p">
            <Typical
              loop={Infinity}
              className="bg-transparent"
              wrapper="p"
              steps={[
                "Tales of Yours",
                2500,
              ]}
            />
          </div>
        ) : (
          <div className="bg-transparent mt-6 text-white text-2xl text-center max-w-xl font-montserrat custom-css-hero-p"></div>
        )}
        <div className="mt-8 flex flex-col items-center">
        </div>
      </div>
    </div>
  );
};

export default HeroSection;