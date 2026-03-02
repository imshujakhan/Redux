import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      const value = Number(action.payload);
      state.counterVal += value;
    },
    subtract: (state, action) => {
      const value = Number(action.payload);
      state.counterVal -= value;
    },
    reset: (state) => {
      state.counterVal = 0;
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice;
