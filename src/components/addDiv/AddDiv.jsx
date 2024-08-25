import { useState } from "react";
import { AddContentDiv } from "../addContentDiv/AddContentDiv";

export const AddDiv = () => {
  const [divs, setDivs] = useState([]);

  const deleteDiv = (index) => {
    setDivs(divs.filter((div) => div.id != index));
  };

  const addDiv = () => {
    const newDiv = {
      id: divs.length,
    };
    setDivs([...divs, newDiv]);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addDiv}
      >
        Add Block
      </button>
      <ol type="I" className="w-full flex flex-col items-center">
        {divs.map((div) => (
          <li key={div.id} className="bg-gray-100 p-4 m-2 rounded w-full">
            <AddContentDiv />
            <button
              className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => deleteDiv(div.id)}
            >
              Delete Block
            </button>
          </li>
        ))}
      </ol>
    </>
  );
};
