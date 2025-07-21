import { configureStore } from "@reduxjs/toolkit";
import { productsApiSlice } from "../features/products/api/apiSlice";

export const store = configureStore({
  reducer: {
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApiSlice.middleware),
});
