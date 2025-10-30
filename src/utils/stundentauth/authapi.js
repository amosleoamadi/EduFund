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
        url: "/auth/login",
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
    forgetPassword: builders.mutation({
      query: (email) => ({
        url: `/auth/forgot-password/${email}`,
        method: "POST",
      }),
    }),
    reverifyEmail: builders.mutation({
      query: ({ otp, email }) => ({
        url: `/auth/verify-reset-password/${email}`,
        method: "POST",
        body: { otp },
      }),
    }),
    resetPassword: builders.mutation({
      query: ({ password, email }) => ({
        url: `/auth/reset-password/${email}`,
        method: "POST",
        body: { password },
      }),
    }),
  }),
});

export const {
  useStudentregisterMutation,
  useStudentloginMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
  useForgetPasswordMutation,
  useReverifyEmailMutation,
  useResetPasswordMutation,
} = studentAuth;
