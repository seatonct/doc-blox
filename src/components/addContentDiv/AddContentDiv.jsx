import { useState } from "react";

export const AddContentDiv = () => {
  const [divs, setDivs] = useState([]);

  const deleteDiv = (index) => {
    setDivs(divs.filter((div) => div.id != index));
  };

  const addDiv = () => {
    const newDiv = {
      id: divs.length,
      content: (
        <div className="bg-gray-300 p-4 m-2 rounded">
          <textarea></textarea>
        </div>
      ),
    };
    setDivs([...divs, newDiv]);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addDiv}
      >
        Add Content Block
      </button>
      <div className="w-full flex flex-col items-center">
        {divs.map((div) => (
          <div key={div.id}>
            {div.content}
            <button
              className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => deleteDiv(div.id)}
            >
              Delete Content Block
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
