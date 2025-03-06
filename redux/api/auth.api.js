import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (builder) => ({
    testEndpoint: builder.query({
      query: () => {
        return {
          url: `/`,
          method: "GET",
        };
      },
    }),
    registerUser: builder.mutation({
      query: (body) => {
        return {
          url: `/auth/sign-up`,
          method: "POST",
          body: {
            firstName: body.firstname,
            lastName: body.lastname,
            emailAddress: [body.email],
            password: body.password,
          },
        };
      },
    }),
  }),
});

export const { useLazyTestEndpointQuery, useRegisterUserMutation } = authApi;
