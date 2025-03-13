import React from "react";

interface Props {
  children?: React.ReactNode;
  isLargeHeight: boolean;
  isBlue: boolean;
}

function SportsCarContainer({ children, isBlue, isLargeHeight }: Props) {
  return (
    <div
      className={`${
        isBlue && isLargeHeight ? "hidden" : "grid"
      } grid-cols-2  h-lg:h-sports-car-lg h-2xl:h-bg-hero-2xl`}
    >
      {children}
    </div>
  );
}

export default SportsCarContainer;
