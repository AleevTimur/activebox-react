import "./App.scss";
import FeaturesList from "./components/featuresList";
import Header from "./components/header";
import Intro from "./components/intro";
import TeamList from "./components/teamList";
import WorksList from "./components/worksList";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <FeaturesList />
      <WorksList />
      <TeamList />
    </>
  );
}

export default App;
