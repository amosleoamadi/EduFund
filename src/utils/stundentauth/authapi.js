import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectStundentToken } from "../../config/slices/studentauthslice";

export const studentAuth = createApi({
  reducerPath: "studentauth",
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
    changePassword: builders.mutation({
      query: ({ password, newPassword, userId }) => ({
        url: `/auth/change-password/${userId}`,
        method: "POST",
        body: { password, newPassword },
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
  useChangePasswordMutation,
} = studentAuth;
