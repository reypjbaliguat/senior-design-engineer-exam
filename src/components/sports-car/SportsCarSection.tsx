import { SportsCarItem } from ".";
import { SportsCarLayout } from "core/types/layout";
import { useWindowHeight } from "core/hooks/screen";
import { Colors, colorTextMap } from "core/types/colors";
import { SportsCarContainer } from "./";

function SportsCarSection({ colorValue }: SportsCarLayout) {
  const height = useWindowHeight();
  const isLargeHeight = height === 1080;
  const isBlue = colorTextMap[colorValue] === "Blue";
  return (
    <SportsCarContainer isBlue={isBlue} isLargeHeight={isLargeHeight}>
      <SportsCarItem colorValue={colorValue} />
      <SportsCarItem colorValue={isLargeHeight ? Colors.Blue : colorValue} />
    </SportsCarContainer>
  );
}

export default SportsCarSection;
