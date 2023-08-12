import { baseApi } from './apiBaseSlice';

const authApiSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body: body,
      }),
    }),
    signUp: build.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body: body,
      }),
    }),
    verifyMe: build.mutation({
      query: ({ email, token }) => ({
        url: '/auth/verifyEmail',
        method: 'POST',
        body: {
          email: email,
          token: token,
        },
      }),
    }),
    forgetPassword: build.mutation({
      query: (body) => ({
        url: '/auth/forgetPassword',
        method: 'POST',
        body: body,
      }),
    }),
    resetPassword: build.mutation({
      query: (body) => ({
        url: '/auth/resetPassword',
        method: 'POST',
        body: body,
      }),
    }),
    signOut: build.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useVerifyMeMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useSignOutMutation,
} = authApiSlice;
