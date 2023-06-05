//packages
import { configureStore } from "@reduxjs/toolkit";

//slices
import todoSlice from "./todoSlice/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

export default store;
