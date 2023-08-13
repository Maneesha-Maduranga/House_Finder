import { baseApi } from './apiBaseSlice';

const userApiSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    showMe: build.query({
      query: () => ({
        url: '/auth/showMe',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
    uplaodPhoto: build.mutation({
      query: (body) => ({
        url: '/user/uploadProfilePic',
        method: 'POST',
        body: body,
      }),
    }),
    updatePhoto: build.mutation({
      query: (body) => ({
        url: '/user/updateProfilePic',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useUplaodPhotoMutation,
  useShowMeQuery,
  useUpdatePhotoMutation,
} = userApiSlice;
