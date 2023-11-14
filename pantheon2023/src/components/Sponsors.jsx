import React from "react";
import rns_logo from "../assets/RNS_logo.png"
import cat_logo from "../assets/CAT-LOGO-WHITE.png"
function Sponsors() {
  return (
    <div className="pb-10">
      <div className="">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4">
          <p className="w-full mb-4 -mt-4 text-center text-4xl font-semibold uppercase text-white tracking-wider ">
            Our Sponsors
          </p>

          <a
            className="flex items-center justify-center text-white hover:text-gray-200"
            href="javascript:void(0)"
            target="_blank"
            title="RNS"
          >
            <img className="w-auto h-16 fill-current "  src={rns_logo} alt />
          </a>

          <a
            className="flex items-center justify-center text-white hover:text-gray-200"
            href="javascript:void(0)"
            target="_blank"
            title="CAT"
          >
            <img className="w-auto h-16 fill-current"  src={cat_logo} alt />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
