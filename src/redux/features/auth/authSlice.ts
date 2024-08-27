import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
// interface authState {
//     user: ,
//     token: null,

// }

// Define the initial state using that type
const initialState = {
    user: null,
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token

        },

    },
})

export const { setUser } = authSlice.actions


export default authSlice.reducer