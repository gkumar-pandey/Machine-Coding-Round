import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className=" flex items-center justify-evenly py-2 ">
        <h1 className=" font-bold font-sans text-3xl ">Books Library</h1>
        <Link to={"/search"}>
          <button className=" bg-slate-900 text-white px-4 py-2 rounded ">
            Search books
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
