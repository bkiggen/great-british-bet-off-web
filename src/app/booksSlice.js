import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;
