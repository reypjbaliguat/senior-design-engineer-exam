import React from "react";

function Footer() {
  return (
    <footer className="h-lg:mt-0 h-2xl:mt-36 bg-deep-teal text-lime-green w-full py-12 grid grid-cols-1 px-8">
      <div className="flex justify-between w-full items-center leading-none">
        <span className="text-4xl"> Rey PJ Baliguat</span>
        <span className="text-logo"> sesimi</span>
      </div>
      <span className="mt-10 text-xl leading-6 h-2xl:block h-lg:hidden">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore minus
        fugiat blanditiis, dolore rerum eius cupiditate maiores, quo magnam
        commodi aut porro corporis quod incidunt esse vel reprehenderit at! Sit!
      </span>
    </footer>
  );
}

export default Footer;
