import "./App.scss";
import { DownloadSection } from "./components/DownloadSection";
import { FeaturesList } from "./components/FeaturesList";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";
import { ReviewList } from "./components/ReviewList";
import { TeamList } from "./components/TeamList";
import { WorksList } from "./components/WorksList";

function App() {
  return (
    <>
      <Intro />
      <FeaturesList />
      <WorksList />
      <TeamList />
      <ReviewList />
      <DownloadSection />
      <Footer />
    </>
  );
}

export default App;
