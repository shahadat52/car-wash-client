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
                    url: `/users/${id}`,
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
        updateProfile: builder.mutation({
            query: (data) => {
                console.log(data);
                const id = data?.id;
                const userData = data?.user
                return {
                    url: `/users/profile/${id}`,
                    method: 'PUT',
                    body: userData
                }
            },
            invalidatesTags: ['users']
        }),
    })

});

export const { useGetAllUserQuery, useGetUserByIdQuery, useUpdateUserRoleMutation, useUpdateProfileMutation } = userApi