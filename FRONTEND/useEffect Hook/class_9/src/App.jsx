import React, { useEffect, useState } from "react";

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);

  useEffect(function(){
    console.log("useEffect is executed!");
  }, [num1, num2]); // inhi par chalega useEffect!

  return (
    <>
      <h2 className="text-black m-6 text-lg font-semibold ">{num1}</h2>
      <button className="bg-blue-400 m-2 p-4 font-semibold border-2 rounded-2xl"
        onClick={() => {
          setNum1(Math.floor(Math.random() * 100));
        }}
      >
        Change Number 1
      </button>
      <h2 className="text-black m-6 text-lg font-semibold ">{num2}</h2>
      <button className="bg-blue-400 m-2 p-4 font-semibold border-2 rounded-2xl"
        onClick={() => {
          setNum2(Math.floor(Math.random() * 100));
        }}
      >
        Change Number 2
      </button>
      <h2 className="text-black m-6 text-lg font-semibold ">{num3}</h2>
      <button className="bg-blue-400 m-2 p-4 font-semibold border-2 rounded-2xl"
        onClick={() => {
          setNum3(Math.floor(Math.random() * 100));
        }}
      >
        Change Number 3
      </button>
    </>
  );
};

export default App;
