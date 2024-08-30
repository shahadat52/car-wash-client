import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => ({
                url: '/users',
                method: 'GET',

            }),
            providesTags: ['users']
        }),

        getUserById: builder.query({
            query: (id) => {
                console.log(id);
                return {
                    url: `/user/${id}`,
                    method: 'GET',
                }
            }
        }),

        updateUserRole: builder.mutation({
            query: (id) => {
                return {
                    url: `/users/${id}`,
                    method: 'PUT',
                }
            },
            invalidatesTags: ['users']
        }),
    })

});

export const { useGetAllUserQuery, useGetUserByIdQuery, useUpdateUserRoleMutation } = userApi