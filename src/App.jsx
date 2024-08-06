import { useState } from "react";
import { Intro } from "./components/intro/Intro";
import "./App.css";
import { Conclusion } from "./components/conclusion/Conclusion";
import { Body } from "./components/body/Body";

function App() {
  // const [divs, setDivs] = useState([]);

  // const addDiv = () => {
  //   setDivs([
  //     ...divs,
  //     <div key={divs.length} className="bg-gray-300 p-4 m-2 rounded">
  //       New Div
  //     </div>,
  //   ]);
  // };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Intro />
      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addDiv}
      >
        Add Block
      </button>
      <div className="w-full flex flex-col items-center">{divs}</div> */}
      <Body />
      <Conclusion />
    </>
  );
}

export default App;
