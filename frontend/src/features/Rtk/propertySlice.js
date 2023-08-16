import { baseApi } from './apiBaseSlice';

const propertyApiSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addProperty: build.mutation({
      query: (body) => ({
        url: '/property/addProperty',
        body: body,
        method: 'POST',
      }),
    }),
    uploadImages: build.mutation({
      query: (body) => ({
        url: '/property/uplaodPropertyImages',
        body: body,
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useUploadImagesMutation, useAddPropertyMutation } =
  propertyApiSlice;
