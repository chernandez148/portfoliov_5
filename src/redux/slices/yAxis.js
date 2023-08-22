// redux/yAxis.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    yAxis: 0,
};

export const yAxisSlice = createSlice({
    name: 'yAxis',
    initialState,
    reducers: {
        setYAxis: (state, action) => {
            state.yAxis = action.payload;
        },
    },
});

export const { setYAxis } = yAxisSlice.actions;

export default yAxisSlice.reducer;