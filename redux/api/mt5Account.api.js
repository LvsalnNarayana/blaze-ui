import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mt5AccountApi = createApi({
  reducerPath: "mt5AccountApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    credentials: "include", // Ensure cookies are sent
  }),
  endpoints: (builder) => ({
    connectMt5: builder.mutation({
      query: ({ mt5_account_number, password, mt5_server, token }) => {
        return {
          url: `/user/connect-mt5`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: {
            mt5_account_number,
            password,
            mt5_server,
          },
        };
      },
    }),
  }),
});

export const { useConnectMt5Mutation } = mt5AccountApi;
