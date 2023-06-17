import React, { useState } from "react";
import { useBooks } from "../context/book-context";
import { AiOutlineArrowLeft } from "react-icons/ai";

const SearchPage = () => {
  const { searchQuery, setSearchQuery } = useBooks();

  return (
    <div>
      <div className=" flex justify-center ">
        <div>
          <input
            value={searchQuery}
            placeholder="Search Books.."
            onChange={(e) => setSearchQuery(e.target.value)}
            className=" border  border-gray-800 py-1 px-2 rounded "
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
