import { books } from "../db/db";
import { bookReducer } from "../reducer/book-reducer";

const { createContext, useContext, useReducer, useState } = require("react");

const BooksContext = createContext();

const initialState = {
  books: books
};

export const BooksContextProvider = ({ children }) => {
  const [booksState, dispatchBooks] = useReducer(bookReducer, initialState);

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BooksContext.Provider
      value={{ dispatchBooks, booksState, searchQuery, setSearchQuery }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
