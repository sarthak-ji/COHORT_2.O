import React from "react";

function Navbar(props) {
  return (
    <div className={`flex justify-between items-center ml-4 mr-4 mt-2 p-4 ${props.className}`}>
      <div className="">{props.title}</div>
      <div className="flex gap-10">{props.links.map(function (elem, idx) {
        return <h4 key={idx}>{elem}</h4>
      })}</div>
    </div>
  );
}

export default Navbar;
