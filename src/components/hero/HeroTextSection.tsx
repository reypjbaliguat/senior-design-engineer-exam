import { HeroTextContainer } from "./";
import { HeroTextSize } from "core/types/layout";

function HeroTextSection() {
  return (
    <div className="h-lg:col-span-1 h-2xl:col-span-2 z-10 grid justify-center w-full">
      <HeroTextContainer label={"Ready to"} />
      <HeroTextContainer label={"own a car?"} />
      <HeroTextContainer
        label={"Your Ride, Your Savings"}
        textSize={HeroTextSize.SMALL}
      />
    </div>
  );
}

export default HeroTextSection;
