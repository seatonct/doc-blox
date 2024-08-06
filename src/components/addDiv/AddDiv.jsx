import { useState } from "react";

export const AddDiv = () => {
  const [divs, setDivs] = useState([]);
  //   const [, setState] = useState(0);

  //   const forceUpdate = () => {
  //     setState((prev) => prev + 1);
  //   };

  const deleteDiv = (index) => {
    setDivs(divs.filter((div) => div.id !== index));
  };

  const addDiv = () => {
    const divId = divs.length;
    setDivs([
      ...divs,
      <div key={divId} id={divId} className="bg-gray-300 p-4 m-2 rounded">
        <textarea></textarea>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            deleteDiv(divId);
          }}
        >
          Delete Block
        </button>
      </div>,
    ]);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addDiv}
      >
        Add Block
      </button>
      <div className="w-full flex flex-col items-center">{divs}</div>
    </>
  );
};
