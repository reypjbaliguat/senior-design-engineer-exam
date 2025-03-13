import React from "react";

function AppContainer({ children }: { children?: React.ReactNode }) {
  return <section className="w-screen h-screen">{children}</section>;
}

export default AppContainer;
