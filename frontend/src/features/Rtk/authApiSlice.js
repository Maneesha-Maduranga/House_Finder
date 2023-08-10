import { baseApi } from './apiBaseSlice';

const authApiSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signIN: build.mutation({
      query: ({ email, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: {
          email: email,
          password: password,
        },
      }),
    }),
    signUp: build.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body: body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSignINMutation, useSignUpMutation } = authApiSlice;
