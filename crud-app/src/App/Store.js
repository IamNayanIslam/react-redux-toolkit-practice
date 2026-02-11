import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../Features/BooksSlice.js";

const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});

export default store;
