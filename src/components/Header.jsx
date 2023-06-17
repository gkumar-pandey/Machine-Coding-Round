import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="p-4 border mb-4 bg-gray-100  ">
      <div className=" flex items-center justify-evenly py-2 ">
        <h1 className=" font-bold text-4xl font-sans text-purple-950 ">
          Books Library
        </h1>
        {location.pathname !== "/search" && (
          <Link to={"/search"}>
            <button className=" bg-slate-700 text-white px-4 py-2 rounded ">
              search books
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
