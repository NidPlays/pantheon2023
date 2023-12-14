import React from "react";
import Logo1 from "../assets/sponsors/ghetto1.png";
import Logo2 from "../assets/sponsors/tribe2.png";
import Logo3 from "../assets/sponsors/tibev.png";

const logos = [Logo1, Logo2, Logo3];

const middleIndex = Math.floor(logos.length / 2);
const upperImages = logos.slice(0, middleIndex);
const lowerImages = logos.slice(middleIndex);

const Logos = ({ backgroundColor }) => {
  return (
    <div>
      <div className={`${backgroundColor ? backgroundColor : "bg-[#151515]"} `}>
        <div className="text-center py-12 heading-text text-4xl md:text-6xl xl:text-7xl">
          Sponsors
        </div>
        {/* <div className="xl:w-11/12 lg:w-full hidden mx-auto px-10 "> */}
        <div className="xl:w-full lg:w-full hidden mx-auto px-10 ">
          <div className="grid grid-cols-6 place-items-center my-20">
            {upperImages.map((logo) => {
              return (
                <div className="relative h-18 w-48">
                  <img
                    src={logo}
                    alt="samsung"
                    className="object-contain"
                    fill
                  />
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-6  place-items-center gap-4 w-11/12 mx-auto mt-10">
            {lowerImages.map((logo) => {
              return (
                <div className="relative h-18 w-48">
                  <img
                    src={logo}
                    className="object-contain"
                    alt="samsung"
                    fill
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative w-full h-24 overflow-hidden block">
          <div className=" flex py-8 absolute">
            <div className="flex animate-slidehorizontal ">
              {upperImages.map((logo) => {
                return (
                  <div className="relative h-18 w-48  mx-4 ">
                    <img
                      src={logo}
                      className="object-contain"
                      alt="samsung"
                      fill
                    />
                  </div>
                );
              })}
              {lowerImages.map((logo) => {
                return (
                  <div className="relative h-18 w-48  mx-4">
                    <img
                      src={logo}
                      className="object-contain"
                      alt="samsung"
                      fill
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex animate-slidehorizontal ">
              {upperImages.map((logo) => {
                return (
                  <div className="relative h-18 w-48  mx-4 ">
                    <img
                      src={logo}
                      className="object-contain"
                      alt="samsung"
                      fill
                    />
                  </div>
                );
              })}
              {lowerImages.map((logo) => {
                return (
                  <div className="relative h-18 w-48  mx-4">
                    <img
                      src={logo}
                      className="object-contain"
                      alt="samsung"
                      fill
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex animate-slidehorizontal ">
              {upperImages.map((logo) => {
                return (
                  <div className="relative h-18 w-48  mx-4 ">
                    <img
                      src={logo}
                      className="object-contain"
                      alt="samsung"
                      fill
                    />
                  </div>
                );
              })}
              {lowerImages.map((logo) => {
                return (
                  <div className="relative h-18 w-48  mx-4">
                    <img
                      src={logo}
                      className="object-contain"
                      alt="samsung"
                      fill
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
