import React from "react";
import SportsCarSvg from "./SportsCarSvg";
import { SportsCarLayout } from "core/types/layout";
import { colorTextMap } from "core/types/colors";

function SportsCarItem({ colorValue }: SportsCarLayout) {
  return (
    <div
      className={`grid h-full justify-center h-lg:items-center h-2xl:items-end`}
    >
      <div>
        <SportsCarSvg fill={colorValue} />
        <span className="text-small-hero-2xl font-bold">
          Sports Car {colorTextMap[colorValue]}
        </span>
        <div className="flex justify-center mb-10">
          <span className="text-xl mr-3 font-light text-deep-teal"> For </span>
          <span className="font-semibold text-4xl"> &#36;32, 000 </span>
        </div>
        <button className="py-4 w-full bg-lime-green text-4xl font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default SportsCarItem;
