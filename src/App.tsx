import "./App.css";
import {
  AppContainer,
  HeroSection,
  Footer,
  SportsCarSection,
} from "components/";
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
