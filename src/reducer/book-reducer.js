import { books } from "../db/db";

// Actions
export const ADD_TO_READ = "ADD_TO_READ";
export const ADD_TO_CURRENT_READING = "ADD_TO_CURRENT_READING";
export const ADD_TO_WANT_TO_READ = "ADD_TO_WANT_TO_READ";

export const bookReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_READ:
      return {
        books: state.books.reduce(
          (acc, curr) =>
            curr.id === payload
              ? [
                  ...acc,
                  {
                    ...curr,
                    read: true,
                    wantToRead: false,
                    currentlyReading: false
                  }
                ]
              : [...acc, curr],
          []
        )
      };

    case ADD_TO_CURRENT_READING:
      return {
        books: state.books.reduce(
          (acc, curr) =>
            curr.id === payload
              ? [
                  ...acc,
                  {
                    ...curr,
                    read: false,
                    wantToRead: false,
                    currentlyReading: true
                  }
                ]
              : [...acc, curr],
          []
        )
      };
    case ADD_TO_WANT_TO_READ:
      return {
        books: state.books.reduce(
          (acc, curr) =>
            curr.id === payload
              ? [
                  ...acc,
                  {
                    ...curr,
                    read: false,
                    wantToRead: true,
                    currentlyReading: false
                  }
                ]
              : [...acc, curr],
          []
        )
      };
    default:
      return {
        books: books
      };
  }
};
