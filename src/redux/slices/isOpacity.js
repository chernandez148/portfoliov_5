// redux/isOpacity.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpacity: 1,
};

export const isOpacitySlice = createSlice({
    name: 'isOpacity',
    initialState,
    reducers: {
        setIsOpacity: (state, action) => {
            state.isOpacity = action.payload;
        },
    },
});

export const { setIsOpacity } = isOpacitySlice.actions;

export default isOpacitySlice.reducer;