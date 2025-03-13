import React from "react";
import "./App.css";
import SportsCarContainer from "components/SportsCarContainer";
import Footer from "components/Footer";
import HeroSection from "components/HeroSection";
import AppContainer from "components/AppContainer";
import { Colors } from "core/types/colors";

function App() {
  return (
    <AppContainer>
      <HeroSection />
      <SportsCarContainer colorValue={Colors.Purple} />
      <SportsCarContainer colorValue={Colors.Blue} />
      <Footer />
    </AppContainer>
  );
}

export default App;
