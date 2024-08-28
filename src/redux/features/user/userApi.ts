import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => ({
                url: '/services',
                method: 'GET',

            })
        }),
        getUserById: builder.query({
            query: (id) => {
                console.log(id);
                return {
                    url: `/user/${id}`,
                    method: 'GET',
                }
            }
        })
    })

});

export const { useGetAllUserQuery, useGetUserByIdQuery } = userApi