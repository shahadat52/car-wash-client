import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    services: []
}

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        getServices: (state, action) => {
            state.services = action.payload.services;

        },

    },
})

export const { getServices } = serviceSlice.actions


export default serviceSlice.reducer