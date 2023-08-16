import { baseApi } from './apiBaseSlice';

const propertyApiSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProperty: build.query({
      query: () => ({
        url: '/property/getAllProperty',

        method: 'GET',
      }),
    }),
    getLatestProperty: build.query({
      query: () => ({
        url: '/property/getLatestProperty',

        method: 'GET',
      }),
    }),
    getSingleProperty: build.query({
      query: (id) => ({
        url: `/property/getSingleProperty/${id}`,
        method: 'GET',
      }),
    }),
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

export const {
  useUploadImagesMutation,
  useAddPropertyMutation,
  useGetPropertyQuery,
  useGetSinglePropertyQuery,
  useGetLatestPropertyQuery,
} = propertyApiSlice;
