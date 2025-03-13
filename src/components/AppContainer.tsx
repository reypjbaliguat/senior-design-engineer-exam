import React from "react";

interface Props {
  children?: React.ReactNode;
}

function AppContainer({ children }: Props) {
  return <section className="w-screen h-screen">{children}</section>;
}

export default AppContainer;
