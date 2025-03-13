import React from "react";

interface Props {
  children?: React.ReactNode;
}

function HeroSectionContainer({ children }: Props) {
  return (
    <div className="grid w-full items-center h-lg:h-bg-hero-lg h-lg:grid-cols-2 h-2xl:grid-cols-3 h-2xl:h-bg-hero-2xl">
      {children}
    </div>
  );
}

export default HeroSectionContainer;
