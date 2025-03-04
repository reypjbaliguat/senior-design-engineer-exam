import React from "react";
import SportsCarItem from "./SportsCarItem";
import { SportsCarLayout } from "core/types/layout";
import { useWindowHeight } from "core/hooks/screen";

function SportsCarContainer({ colorText, colorValue }: SportsCarLayout) {
  const height = useWindowHeight();
  const isLargeHeight = height === 1080;
  const isBlue = colorText === "Blue";
  return (
    <div
      className={`${
        isBlue && isLargeHeight ? "hidden" : "grid"
      } grid-cols-2  h-lg:h-sports-car-lg h-2xl:h-bg-hero-2xl`}
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
