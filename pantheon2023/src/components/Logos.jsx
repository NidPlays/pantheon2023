import React from "react";
import Logo1 from "../assets/sponsors/ghetto1.png";
import Logo2 from "../assets/sponsors/tribe2.png";
import Logo3 from "../assets/sponsors/tibev.png";
import Logo4 from "../assets/sponsors/canara.jpg";
import Logo5 from "../assets/sponsors/p65.jpg";
import Logo6 from "../assets/sponsors/decathlon.png";
import Logo7 from "../assets/sponsors/rog.png";
import Logo8 from "../assets/sponsors/coke.jpg";
import Logo9 from "../assets/sponsors/sparsh.jpg";
import Logo10 from "../assets/sponsors/bounce.png";
import Logo11 from "../assets/sponsors/ojas.png";
import Logo12 from "../assets/sponsors/lic.png";
import Logo13 from "../assets/sponsors/naturals.png";
import "./style.css";

const logos = [Logo1, Logo3, Logo4, Logo5, Logo6, Logo12];
const logos1 = [Logo7, Logo8, Logo9, Logo10, Logo11, Logo13];

const middleIndex = Math.floor(logos.length / 2);
const upperImages = logos.slice(0, middleIndex);
const lowerImages = logos.slice(middleIndex);

const middleIndex1 = Math.floor(logos1.length / 2);
const upperImages1 = logos1.slice(0, middleIndex1);
const lowerImages1 = logos1.slice(middleIndex1);

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
      {/* second row */}
      {/* iv className={`${backgroundColor ? backgroundColor : "bg-[#151515]"} `}> */}
      {/* <div className="xl:w-11/12 lg:w-full hidden mx-auto px-10 "> */}
      <div className="xl:w-full lg:w-full hidden mx-auto px-10 ">
        <div className="grid grid-cols-6 place-items-center my-20">
          {upperImages1.map((logo) => {
            return (
              <div className="relative h-18 w-48">
                <img src={logo} alt="samsung" className="object-contain" fill />
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-6  place-items-center gap-4 w-11/12 mx-auto mt-10">
          {lowerImages1.map((logo) => {
            return (
              <div className="relative h-18 w-48">
                <img src={logo} className="object-contain" alt="samsung" fill />
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative w-full h-24 overflow-hidden block">
        <div className=" flex py-8 absolute">
          <div className="flex animate-slidehorizontal-reverse">
            {upperImages1.map((logo) => {
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
            {lowerImages1.map((logo) => {
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
          <div className="flex animate-slidehorizontal-reverse">
            {upperImages1.map((logo) => {
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
            {lowerImages1.map((logo) => {
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
          <div className="flex animate-slidehorizontal-reverse">
            {upperImages1.map((logo) => {
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
            {lowerImages1.map((logo) => {
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
  );
};

export default Logos;
