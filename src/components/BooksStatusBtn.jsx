import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { useBooks } from "../context/book-context";
import {
  ADD_TO_CURRENT_READING,
  ADD_TO_READ,
  ADD_TO_WANT_TO_READ
} from "../reducer/book-reducer";

const BookStatusButton = ({ defaultOption, id }) => {
  const { dispatchBooks } = useBooks();
  const handleOptionChange = (e) => {
    const value = e.target.value;
    if (value === "Read") {
      dispatchBooks({ type: ADD_TO_READ, payload: id });
    } else if (value === "Want to read") {
      dispatchBooks({ type: ADD_TO_WANT_TO_READ, payload: id });
    } else if (value === "Currently Reading") {
      dispatchBooks({ type: ADD_TO_CURRENT_READING, payload: id });
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-gray-300 focus:bg-gray-300  focus:outline-none"
        type="button"
      >
        <BiDownArrow />
      </button>
      <select
        className="absolute inset-0 opacity-0 w-10 h-10 cursor-pointer"
        value={defaultOption}
        onChange={handleOptionChange}
      >
        <option value="Currently Reading">Currently Reading</option>
        <option value="Want to read">Want to read</option>
        <option value="Read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookStatusButton;
