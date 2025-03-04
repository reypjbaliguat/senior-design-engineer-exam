import { HeroTextSize } from "core/types/layout";
import HeroText from "./HeroText";

interface Props {
  label: string;
  textSize?: HeroTextSize;
}

function HeroTextContainer({ label, textSize = HeroTextSize.LARGE }: Props) {
  return (
    <div className="col-span-1">
      <HeroText label={label} textSize={textSize} />
    </div>
  );
}

export default HeroTextContainer;
