// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const bakersApi = createApi({
  reducerPath: "bakersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (build) => ({
    // Bakers
    getBakers: build.query({
      query: () => `bakers`,
    }),
    addBaker: build.mutation({
      query: (body) => ({
        url: `bakers`,
        method: "POST",
        body,
      }),
    }),

    // Users
    getUsers: build.query({
      query: () => `users`,
    }),
    loginUser: build.mutation({
      query: (body) => ({
        url: `users/login`,
        method: "POST",
        body,
      }),
    }),
    registerUser: build.mutation({
      query: (body) => ({
        url: `users`,
        method: "POST",
        body,
      }),
    }),

    // Rankings
    updateUsersBakers: build.mutation({
      query: (body) => ({
        url: `rankings`,
        method: "POST",
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetBakersQuery,
  useAddBakerMutation,
  useGetUsersQuery,
  useUpdateUsersBakersMutation,
  useLoginUserMutation,
  useRegisterUserMutation,
} = bakersApi;
