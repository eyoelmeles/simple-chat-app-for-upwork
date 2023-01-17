import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../lib/axios-base-query";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:3004" }),
  tagTypes: ["users", "groups"],
  endpoints(builder) {
    return {
      getMessages: builder.query<any, any>({
        query: () => ({
          url: "/messages",
          method: "get",
        }),
        providesTags: ["groups"],
      }),
    };
  },
});
