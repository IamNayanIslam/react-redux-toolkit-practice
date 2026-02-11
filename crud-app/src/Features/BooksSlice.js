import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "History of Bangladesh", author: "Nayan Islam" },
    { id: 2, title: "Geography of Bangladesh", author: "Md. Nayan Islam" },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,

    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },

    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      state.books = state.books.map((book) =>
        book.id === id ? { ...book, title: title, author: author } : book,
      );
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;
export default booksSlice.reducer;
