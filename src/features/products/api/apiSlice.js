import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApiSlice = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () =>
        "products?populate[images][fields][0]=url&populate[specs][populate]=*",
    }),
    getSingleProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } =
  productsApiSlice;
