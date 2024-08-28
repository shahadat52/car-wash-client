import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBookings: builder.query({
            query: () => ({
                url: '/bookings',
                method: 'GET',
            })
        }),
        getAllSlots: builder.query({
            query: (params) => {
                const date = params.date
                const service = params.service
                return {
                    url: `/slots/availability?service=${service}&date=${date}`,
                    method: 'GET',
                }
            }
        })
    })
});

export const { useGetAllBookingsQuery, useGetAllSlotsQuery } = bookingApi