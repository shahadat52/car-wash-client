import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        // https://car-wash-server-pink.vercel.app/api
        baseUrl: `${import.meta.env.VITE_LOCAL_URL}`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;

            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        },
    }),
    tagTypes: ['services', 'bookings', 'slots', 'users'],
    endpoints: () => ({})
})
