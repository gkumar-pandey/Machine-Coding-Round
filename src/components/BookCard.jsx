import React from "react";
import BookStatusButton from "./BooksStatusBtn";

const BookCard = ({
  author,
  id,
  image,
  publisher,
  title,
  read,
  currentlyReading,
  wantToRead
}) => {
  let selctedOption = "";

  if (read) {
    selctedOption = "Read";
  } else if (currentlyReading) {
    selctedOption = "Currently Reading";
  } else if (wantToRead) {
    selctedOption = "Want to read";
  } else {
    selctedOption = "none";
  }

  return (
    <div
      className=" book_card p-1 m-3 border
    rounded shadow bg-gray-100  "
    >
      <div className=" book_card_img ">
        <img className=" " src={image} alt={title} />
      </div>
      <div className=" flex flex-row justify-between mx-2 py-2 ">
        <div>
          <p className=" font-semibold   ">{title}</p>
          <p>{author}</p>
        </div>
        <div>
          <BookStatusButton defaultOption={selctedOption} id={id} />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
