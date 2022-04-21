import "./App.scss";
import { DownloadSection } from "./components/DownloadSection/DownloadSection";
import FeaturesList from "./components/featuresList";
import { Footer } from "./components/Footer/Footer";
import Intro from "./components/intro";
import { Reviews } from "./components/Reviews/Reviews";
import TeamList from "./components/teamList";
import WorksList from "./components/worksList";

function App() {
  return (
    <>
      <Intro />
      <FeaturesList />
      <WorksList />
      <TeamList />
      <Reviews />
      <DownloadSection />
      <Footer />
    </>
  );
}

export default App;
