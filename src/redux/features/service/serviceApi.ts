import { baseApi } from "../../api/baseApi";

const serviceApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllServices: builder.query({
            query: () => ({
                url: '/services',
                method: 'GET',

            })
        }),
        getServicesById: builder.query({
            query: (id) => {
                console.log(id);
                return {
                    url: `/services/${id}`,
                    method: 'GET',
                }
            }
        })
    })

});

export const { useGetAllServicesQuery, useGetServicesByIdQuery } = serviceApi