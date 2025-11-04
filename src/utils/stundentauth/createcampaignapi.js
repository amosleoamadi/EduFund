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
  }),
});

export const { useCampaigncreateMutation } = campaignApi;
