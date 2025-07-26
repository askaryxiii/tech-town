import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = import.meta.env.VITE_BACKEND_URL;

export const categoriesApiSlice = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories?populate=image",
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApiSlice;
