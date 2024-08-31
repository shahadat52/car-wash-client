import { baseApi } from "../../api/baseApi";

const serviceApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllServices: builder.query({
            query: () => ({
                url: '/services',
                method: 'GET',

            }),
            providesTags: ["services"]
        }),
        getServiceById: builder.query({
            query: (id) => {
                return {
                    url: `/services/${id}`,
                    method: 'GET',
                }
            }
        }),
        addService: builder.mutation({
            query: (data) => {
                console.log(data);
                return {
                    url: '/services',
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ['services']
        }),
        deleteService: builder.mutation({
            query: (id) => {
                console.log(id);
                return {
                    url: `/services/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['services']
        }),
        updateService: builder.mutation({
            query: (data) => {
                return {
                    url: `/services/${data?.id}`,
                    method: 'PUT',
                    body: data?.data
                }
            },
            invalidatesTags: ['services']
        }),
    })

});

export const { useGetAllServicesQuery, useGetServiceByIdQuery, useAddServiceMutation, useDeleteServiceMutation, useUpdateServiceMutation } = serviceApi