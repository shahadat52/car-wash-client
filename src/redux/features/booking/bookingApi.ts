
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
            query: ({ id }) => {
                console.log(id);
                const params = new URLSearchParams();
                if (id) params.append('customer', id);
                // if (date) params.append('date', date);

                return {
                    url: `/bookings/?${params.toString()}`,
                    method: 'GET',
                }
            }
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