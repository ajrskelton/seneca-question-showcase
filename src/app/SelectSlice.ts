import { createSlice } from '@reduxjs/toolkit'

export const selectSlice = createSlice({
    name: 'select',
    initialState: {
        selectedOptions: {}
    },
    reducers: {
        select: (state: any, action) => {
            state.selectedOptions[action.payload.rowId] = action.payload.optionId;
        }
    }
});

export const { select } = selectSlice.actions

export default selectSlice.reducer
