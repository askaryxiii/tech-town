import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export const productsApiSlice = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () =>
        "products?populate[images][fields][0]=url&populate[specs][populate]=*",
    }),
    getSingleProduct: builder.query({
      query: (id) =>
        `products/${id}?populate[images][fields][0]=url&populate[specs][populate]=*`,
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } =
  productsApiSlice;
