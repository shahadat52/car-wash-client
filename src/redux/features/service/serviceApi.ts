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
                console.log(id);
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
        })
    })

});

export const { useGetAllServicesQuery, useGetServiceByIdQuery, useAddServiceMutation } = serviceApi