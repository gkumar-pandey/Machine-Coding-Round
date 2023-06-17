import React from "react";
import BookCard from "./BookCard";

const BookSelves = ({ title, books }) => {
  return (
    <div className="book_shelves  ">
      <h1 className="font-bold text-4xl m-3 p-3 font-sans text-center border-b-2 ">
        {title}
      </h1>
      <div className=" flex flex-row flex-wrap justify-center  ">
        {books.map((book) => (
          <BookCard {...book} selectedOption={title} />
        ))}
      </div>
    </div>
  );
};

export default BookSelves;
