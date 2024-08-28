import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    slot: null,

}

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setSlot: (state, action) => {
            console.log(action);
            state.slot = action.payload;
        },
    },
})

export const { setSlot } = bookingSlice.actions


export default bookingSlice.reducer