import React from "react";
import { useBooks } from "../context/book-context";
import BookCard from "../components/BookCard";
import BookSelves from "../components/BookSelves";

const Home = () => {
  const {
    booksState: { books }
  } = useBooks();

  const currentlyReadingBooks = books.filter(
    ({ currentlyReading }) => currentlyReading
  );
  const wantToReadBooks = books.filter(({ wantToRead }) => wantToRead);

  const readBooks = books.filter(({ read }) => read);
  return (
    <div className="  ">
      <BookSelves title={"Currently Reading"} books={currentlyReadingBooks} />

      <BookSelves title={"Want To Read"} books={wantToReadBooks} />
      <BookSelves title={"Read"} books={readBooks} />
    </div>
  );
};

export default Home;
