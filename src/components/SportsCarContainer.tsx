import React from "react";
import SportsCarItem from "./SportsCarItem";
import { SportsCarLayout } from "core/types/layout";
import { useWindowHeight } from "core/hooks/screen";

function SportsCarContainer({ colorText, colorValue, style }: SportsCarLayout) {
  const height = useWindowHeight();
  const isLargeHeight = height === 1080;
  return (
    <div
      className={`${
        style ? style : "grid"
      } grid-cols-2 mt-5 h-lg:h-sports-car-lg h-2xl:h-bg-hero-2xl`}
    >
      <SportsCarItem colorText={colorText} colorValue={colorValue} />
      <SportsCarItem
        colorText={isLargeHeight ? "Blue" : colorText}
        colorValue={isLargeHeight ? "#7af1ff" : colorValue}
      />
    </div>
  );
}

export default SportsCarContainer;
