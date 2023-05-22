import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),

  endpoints: builder => ({
    getMessage: builder.query({
      query: () => '/messages'
    })
  })
})

export const { useGetMessageQuery } = apiSlice