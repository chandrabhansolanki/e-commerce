import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const resumeReducer = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addCartItems(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      const removeItem = state.cart.filter((item) => item.id !== action.payload)
      state.cart = removeItem
    },
  },
});

export const { addCartItems, removeItem } = resumeReducer.actions;
export default resumeReducer.reducer;
