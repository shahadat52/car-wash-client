import { baseApi } from "../../api/baseApi";

const slotApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

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

        createSlot: builder.mutation({
            query: (data) => ({
                url: '/slots',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['slots']
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

export const { useCreateSlotMutation, useGetAllSlotsQuery, useSlotStatusUpdateMutation } = slotApi