import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartList",
  initialState: {
    list: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    removeItem: (state, action) => {
      // state.list.pop(action.payload);
      // let index = state.list.indexOf(action.payload);
      // console.log(index);
      // only splice array when item is found
      console.log(action.payload);
      state.list.splice(action.payload, 1); // 2nd parameter means remove one item only
    },
    increaseQty: (state, action) => {
      let item = action.payload;
      state.list[item].qty += 1;
    },
    decreaseQty: (state, action) => {
      let item = action.payload;
      if (state.list[item].qty > 1) {
        state.list[item].qty -= 1;
      }
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, increaseQty, decreaseQty } =
  cartSlice.actions;
