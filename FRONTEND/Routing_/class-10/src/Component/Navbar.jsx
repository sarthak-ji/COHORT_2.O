import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-pink-800 p-4 mb-9 flex text-white font-semibold justify-around items-center">
        <h2 className="text-3xl text-amber-100">Navbar</h2>
        <div className="flex gap-24 text-lg">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
          <Link to="/courses">Courses</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
