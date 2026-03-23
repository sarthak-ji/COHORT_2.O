import React from "react";

function Card(props) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-cyan-200 border-4 p-6 w-[16rem] text-center">
        <h1 className="text-emerald-600 font-bold text-3xl">{props.name}, {props.age}</h1>
      </div>
    </div>
  );
}

export default Card;
