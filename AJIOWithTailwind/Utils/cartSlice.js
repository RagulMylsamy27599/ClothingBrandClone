import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: function (state, action) {
      state.items.push(action.payload);
    },
    removeItem: function (state, action) {
      state.items = state.items.filter((item) => {
        return item?.code !== action?.payload?.code;
      });
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;
