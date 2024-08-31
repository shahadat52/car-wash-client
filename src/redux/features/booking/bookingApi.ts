
import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBooking: builder.mutation({
            query: (data) => {

                return {
                    url: '/bookings',
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ['bookings']
        }),
        getAllBookings: builder.query({
            query: () => {

                return {
                    url: `/bookings`,
                    method: 'GET',
                }
            },
            providesTags: ['bookings']
        }),
        getBookingsByCustomer: builder.query({
            query: () => {
                return {
                    url: '/my-bookings',
                    method: 'GET',
                }
            }
        }),


    })
});

export const { useGetAllBookingsQuery, useGetBookingsByCustomerQuery, useCreateBookingMutation } = bookingApi