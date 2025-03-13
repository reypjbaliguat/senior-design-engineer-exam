import React from "react";
import SportsCarItem from "./SportsCarItem";
import { SportsCarLayout } from "core/types/layout";
import { useWindowHeight } from "core/hooks/screen";
import { Colors, colorTextMap } from "core/types/colors";

function SportsCarContainer({ colorValue }: SportsCarLayout) {
  const height = useWindowHeight();
  const isLargeHeight = height === 1080;
  const isBlue = colorTextMap[colorValue] === "Blue";
  return (
    <div
      className={`${
        isBlue && isLargeHeight ? "hidden" : "grid"
      } grid-cols-2  h-lg:h-sports-car-lg h-2xl:h-bg-hero-2xl`}
    >
      <SportsCarItem colorValue={colorValue} />
      <SportsCarItem colorValue={isLargeHeight ? Colors.Blue : colorValue} />
    </div>
  );
}

export default SportsCarContainer;
