import { createSlice } from "@reduxjs/toolkit";

// Calculate total price from storedCart
const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 1;
    return total + price * quantity;
  }, 0);
};

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalPrice: calculateTotal(
    JSON.parse(localStorage.getItem("cartItems")) || []
  ),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const item = state.items.find((i) => i.id === product.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.totalPrice = calculateTotal(state.items);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = calculateTotal(state.items);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    increaseQuatity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      item.quantity += 1;
      state.totalPrice = calculateTotal(state.items);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    decreaseQuatity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item.quantity == 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.totalPrice = calculateTotal(state.items);
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      } else {
        item.quantity -= 1;
        state.totalPrice = calculateTotal(state.items);
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuatity,
  decreaseQuatity,
} = cartSlice.actions;
export default cartSlice.reducer;
