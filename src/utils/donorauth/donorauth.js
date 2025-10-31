import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const donorAuth = createApi({
  reducerPath: "donorauth",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_EDUFUND_BASEURL,
  }),
  endpoints: (builders) => ({
    donorIndividual: builders.mutation({
      query: (newIndividual) => ({
        url: "/auth/register/sponsor/individual",
        method: "POST",
        body: newIndividual,
      }),
    }),

    donorOrganization: builders.mutation({
      query: (newOrgnazation) => ({
        url: "/auth/register/sponsor/organization",
        method: "POST",
        body: newOrgnazation,
      }),
    }),
  }),
});

export const { useDonorIndividualMutation, useDonorOrganizationMutation } =
  donorAuth;
