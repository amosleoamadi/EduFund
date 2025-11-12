import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectStundentToken } from "../config/slices/studentauthslice";

export const userApi = createApi({
  reducerPath: "usersetting",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_EDUFUND_BASEURL,
    prepareHeaders: (headers, { getState }) => {
      const token = selectStundentToken(getState());
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getOneUser: builder.query({
      query: (userId) => `/user/${userId}`,
    }),
    updateProfile: builder.mutation({
      query: ({ userId, profilePicture }) => ({
        url: `/user/${userId}`,
        method: "PATCH",
        body: profilePicture,
      }),
    }),
  }),
});

export const { useGetOneUserQuery, useUpdateProfileMutation } = userApi;
