import React from "react";

interface Props {
  children?: React.ReactNode;
}

function FooterContainer({ children }: Props) {
  return (
    <footer className="h-lg:mt-0 h-2xl:mt-36 bg-deep-teal text-lime-green w-full py-14 grid grid-cols-1 px-8">
      {children}
    </footer>
  );
}

export default FooterContainer;
