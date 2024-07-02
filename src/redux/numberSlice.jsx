import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "numbers",
  initialState: {
    number: 0,
  },
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
    decrement: (state) => {
      state.number -= 1;
    },
    incrementByAmount: (state, action) => {
      state.number += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = numberSlice.actions;

export default numberSlice.reducer;
