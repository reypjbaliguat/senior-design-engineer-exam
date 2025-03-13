import React from "react";
import "./App.css";
import SportsCarContainer from "components/SportsCarContainer";
import Footer from "components/Footer";
import HeroSection from "components/HeroSection";
import AppContainer from "components/AppContainer";

function App() {
  return (
    <AppContainer>
      <HeroSection />
      <SportsCarContainer colorText="Purple" colorValue="#544ae5" />
      <SportsCarContainer colorText="Blue" colorValue="#7af1ff" />
      <Footer />
    </AppContainer>
  );
}

export default App;
