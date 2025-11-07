import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectStundentToken } from "../../config/slices/studentauthslice";

export const campaignApi = createApi({
  reducerPath: "campaignApi",
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
    campaigncreate: builder.mutation({
      query: ({ campaignStatus, studentId }) => ({
        url: `/campaigns/${studentId}`,
        method: "POST",
        body: campaignStatus,
      }),
    }),
    getallCampaign: builder.query({
      query: (studentId) => `/campaigns/${studentId}`,
    }),
    getDasboard: builder.query({
      query: (studentId) => `/student-dashboard/overview/${studentId}`,
    }),
    getCampaign: builder.query({
      query: () => `/campaigns`,
    }),
  }),
});

export const {
  useCampaigncreateMutation,
  useGetallCampaignQuery,
  useGetDasboardQuery,
  useGetCampaignQuery,
} = campaignApi;
