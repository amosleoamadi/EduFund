import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectStundentToken } from "../../config/slices/studentauthslice";

export const donorpaymentApi = createApi({
  reducerPath: "paymentApi",
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
    donorPayment: builder.mutation({
      query: ({ amount, recieverId, donorId, campaingId }) => ({
        url: `/payment/make-donation/${donorId}/${recieverId}/${campaingId}`,
        method: "POST",
        body: { amount },
      }),
    }),
    getAllDonorDonation: builder.mutation({
      guery: (donorId) => `/donors/myDonations/${donorId}`,
    }),
  }),
});

export const { useDonorPaymentMutation, useGetAllDonorDonationMutation } =
  donorpaymentApi;
