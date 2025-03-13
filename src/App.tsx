import "./App.css";
import { SportsCarSection } from "components/sports-car";
import { Footer } from "components/footer";
import { HeroSection } from "components/hero";
import AppContainer from "components/AppContainer";
import { Colors } from "core/types/colors";

function App() {
  return (
    <AppContainer>
      <HeroSection />
      <SportsCarSection colorValue={Colors.Purple} />
      <SportsCarSection colorValue={Colors.Blue} />
      <Footer />
    </AppContainer>
  );
}

export default App;
