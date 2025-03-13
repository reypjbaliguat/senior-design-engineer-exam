function HeroBackgroundImage() {
  return (
    <img
      src={"assets/images/background.jpeg"}
      alt="Hero Background"
      className="object-cover object-top absolute w-full z-0 h-2xl:aspect-bg-hero-2xl-aspect-ratio h-lg:aspect-bg-hero-lg-aspect-ratio"
    />
  );
}

export default HeroBackgroundImage;
