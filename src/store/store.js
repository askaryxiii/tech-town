import { configureStore } from "@reduxjs/toolkit";
import { productsApiSlice } from "../features/products/api/apiSlice";
import { categoriesApiSlice } from "../features/categories/api/apiSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    [categoriesApiSlice.reducerPath]: categoriesApiSlice.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApiSlice.middleware,
      categoriesApiSlice.middleware
    ),
});
