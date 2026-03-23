import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState(0);

  let valInc = () => {
    setVal(val + 1);
  };

  let valDec = () => {
    setVal(val - 1);
  };

  let valJump = () => {
    setVal(val + 10);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center">
        <h2 className="font-bold text-white text-5xl mb-5">{val}</h2>
        <div className="flex gap-7">
          <button
            className="bg-blue-600 text-white font-medium border-2 rounded-xl pl-4 pr-4 border-blue-950 p-2 gap-4"
            onClick={valInc}
          >
            Increase
          </button>
          <button
            className="bg-blue-600 text-white font-medium border-2 rounded-xl pl-4 pr-4 border-blue-950 p-2 gap-4"
            onClick={valDec}
          >
            Decrease
          </button>
          <button
            className="bg-blue-600 text-white font-medium border-2 rounded-xl pl-4 pr-4 border-blue-950 p-2 gap-4"
            onClick={valJump}
          >
            Jump
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
