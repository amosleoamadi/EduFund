import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectStundentToken } from "../../config/slices/studentauthslice";

export const getalldonorApi = createApi({
  reducerPath: "getdonor",
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
    getAllDonor: builder.query({
      query: (studentId) => `/donors/allDonors/${studentId}`,
    }),
  }),
});

export const { useGetAllDonorQuery } = getalldonorApi;
