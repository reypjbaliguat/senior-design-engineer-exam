import { SportsCarItemContainer, SportsCarItemContent } from "./";
import { SportsCarLayout } from "core/types/layout";

function SportsCarItem({ colorValue }: SportsCarLayout) {
  return (
    <SportsCarItemContainer>
      <SportsCarItemContent colorValue={colorValue} />
    </SportsCarItemContainer>
  );
}

export default SportsCarItem;
