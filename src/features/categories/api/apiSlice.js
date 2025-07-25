import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApiSlice = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories?populate=image",
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApiSlice;
