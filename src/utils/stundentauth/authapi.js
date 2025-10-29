import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentAuth = createApi({
  reducerPath: "studentauth",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_EDUFUND_BASEURL,
  }),
  endpoints: (builders) => ({
    studentregister: builders.mutation({
      query: (newUser) => ({
        url: "/auth/register/student",
        method: "POST",
        body: newUser,
      }),
    }),
    studentlogin: builders.mutation({
      query: (credential) => ({
        url: "/auth/login/student",
        method: "POST",
        body: credential,
      }),
    }),
    verifyOtp: builders.mutation({
      query: ({ otp, email }) => ({
        url: `/auth/verify/${email}`,
        method: "POST",
        body: { otp },
      }),
    }),
    resendOtp: builders.mutation({
      query: (email) => ({
        url: "/auth/resend-otp",
        method: "POST",
        body: email,
      }),
    }),
  }),
});

export const {
  useStudentregisterMutation,
  useStudentloginMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
} = studentAuth;
