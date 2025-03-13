import React from "react";

interface Props {
  children?: React.ReactNode;
}

function SportsCarItemContainer({ children }: Props) {
  return (
    <div className="grid h-full justify-center h-lg:items-center h-2xl:items-end">
      {children}
    </div>
  );
}

export default SportsCarItemContainer;
