import { Colors, colorTextMap } from "core/types/colors";
import {
  SportsCarName,
  SportsCarPrice,
  SportsCarSvg,
  SportsCarButton,
} from "./";

interface Props {
  colorValue: Colors;
}

function SportsCarItemContent({ colorValue }: Props) {
  return (
    <div>
      <SportsCarSvg fill={colorValue} />
      <SportsCarName name={colorTextMap[colorValue]} />
      <SportsCarPrice />
      <SportsCarButton />
    </div>
  );
}

export default SportsCarItemContent;
