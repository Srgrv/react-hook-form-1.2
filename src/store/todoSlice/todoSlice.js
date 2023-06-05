//packages
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTaskAsync = createAsyncThunk("todos/getTaskAsync", async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos?_limit=10`
  );

  return response.data;
});

export const addTaskAsync = createAsyncThunk(
  "todos/addTaskAsync",
  async (value, { dispatch }) => {
    const response = axios.post(`https://jsonplaceholder.typicode.com/todos`, {
      body: {
        title: value,
        completed: false,
        userId: 1,
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(response);

    dispatch(addTask({ value }));
  }
);

// Нужно закончить асинхронный запрос на добавление задачи

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
  },
  reducers: {
    addTask(state, action) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload.value,
        completed: false,
      });
    },
  },
  extraReducers: (build) => {
    build.addCase(getTaskAsync.fulfilled, (state, action) => {
      state.list = action.payload;
      console.log("getTaskAsync - fulfilled");
    });
    build.addCase(addTaskAsync.fulfilled, (state, action) => {
      console.log("addTaskAsync - fulfilled");
    });
  },
});

export const { addTask } = todoSlice.actions;
export default todoSlice.reducer;
