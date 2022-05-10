import { createSlice } from '@reduxjs/toolkit'

export const questionSlice = createSlice({
    name: 'question',
    initialState: {
        activeIndex: 0
    },
    reducers: {
        prev: (state: any) => {
            state.activeIndex -= 1;
        },
        next: (state: any) => {
            state.activeIndex += 1;
        }
    }
});

export const { prev, next } = questionSlice.actions

export default questionSlice.reducer
