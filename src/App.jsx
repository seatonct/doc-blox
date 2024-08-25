import { Intro } from "./components/intro/Intro";
import "./App.css";
import { Conclusion } from "./components/conclusion/Conclusion";
import { Body } from "./components/body/Body";
import { Title } from "./components/title/Title";

function App() {
  return (
    <>
      <Title />
      <Intro />
      <Body />
      <Conclusion />
    </>
  );
}

export default App;
