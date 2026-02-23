import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://us-central1-summaristt.cloudfunctions.net/",
  }),
  endpoints: (builder) => ({
    getSelectedBook: builder.query({
      query: () => "getBooks?status=selected",
    }),
  }),
});

export const {useGetSelectedBookQuery} = booksApi