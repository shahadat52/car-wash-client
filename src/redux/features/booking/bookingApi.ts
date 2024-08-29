
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
                let query = params
                if (params.date && params.service) {
                    query = `service=${service}&date=${date}`
                }

                return {
                    url: `/slots/availability?${query}`,
                    method: 'GET',
                }
            },
            providesTags: ['slots']
        }),

        slotStatusUpdate: builder.mutation({
            query: (id) => {
                return {
                    url: `/slots/${id}`,
                    method: 'PUT',
                }
            },
            invalidatesTags: ['slots']
        }),

    })
});

export const { useGetAllBookingsQuery, useGetAllSlotsQuery, useSlotStatusUpdateMutation } = bookingApi