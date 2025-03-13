import React from "react";
import HeroTextContainer from "./HeroTextContainer";
import { HeroTextSize } from "core/types/layout";

function HeroSection() {
  return (
    <div className="grid w-full items-center h-lg:h-bg-hero-lg h-lg:grid-cols-2 h-2xl:grid-cols-3 h-2xl:h-bg-hero-2xl">
      <img
        src={"assets/images/background.jpeg"}
        alt="Hero Background"
        className="object-cover object-center absolute w-full z-0 h-2xl:aspect-bg-hero-2xl-aspect-ratio h-lg:aspect-bg-hero-lg-aspect-ratio"
      />
      <div className="h-lg:col-span-1 h-2xl:col-span-2 z-10 grid justify-center w-full">
        <HeroTextContainer label={"Ready to"} />
        <HeroTextContainer label={"own a car?"} />
        <HeroTextContainer
          label={"Your Ride, Your Savings"}
          textSize={HeroTextSize.SMALL}
        />
      </div>
      <div className="col-span-1 grid justify-center w-full h-full items-end">
        <img
          src={"assets/images/Sports Car White.svg"}
          alt="Sports Car"
          className="w-sports-car h-lg:mb-10  h-lg:right-10 h-2xl:right-8 absolute"
        />
      </div>
    </div>
  );
}

export default HeroSection;
