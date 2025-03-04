import { HeroTextSize } from "core/types/layout";
import React from "react";

interface Props {
  label: string;
  textSize: HeroTextSize;
}

function HeroText({ label, textSize }: Props) {
  return (
    <h6
      className={`text-white ${
        textSize === HeroTextSize.LARGE
          ? "h-lg:text-big-hero-lg/big-leading-lg h-2xl:text-big-hero-2xl/big-leading-2xl font-semibold"
          : "h-lg:text-small-hero-lg h-2xl:text-small-hero-2xl"
      }`}
    >
      {label}
    </h6>
  );
}

export default HeroText;
