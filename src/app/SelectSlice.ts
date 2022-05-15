import { createSlice } from '@reduxjs/toolkit'

export const selectSlice = createSlice({
    name: 'select',
    initialState: {
        activeResponses: {}
    },
    reducers: {
        select: (state: any, action) => {
            state.activeResponses[action.payload.rowId] = action.payload.optionId;
        },
        selectAll: (state: any, action) => {
            state.activeResponses = action.payload;
        }
    }
});

export const { select, selectAll } = selectSlice.actions

export default selectSlice.reducer
