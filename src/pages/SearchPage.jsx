import React, { useState } from "react";
import { useBooks } from "../context/book-context";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

const SearchPage = () => {
  const {
    searchQuery,
    setSearchQuery,
    booksState: { books }
  } = useBooks();

  const searchedBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className=" flex justify-center ">
        <div className="flex flex-row items-center shadow-xl border  border-gray-800 py-1 px-2 rounded z-30 w-1/2 sm:w-full mx-2 ">
          <Link to={"/"}>
            <AiOutlineArrowLeft className="text-4xl px-1 cursor-pointer " />
          </Link>
          <input
            value={searchQuery}
            placeholder="Search Books.."
            onChange={(e) => setSearchQuery(e.target.value)}
            className=" focus:outline-none text-2xl w-full
             "
          />
        </div>
      </div>
      {searchQuery && (
        <div className=" flex justify-center flex-row flex-wrap ">
          {searchedBooks.length !== 0 ? (
            searchedBooks.map((book) => <BookCard {...book} />)
          ) : (
            <h1 className="text-4xl font-bold text-gray-600 my-10 ">
              Book not found!
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
