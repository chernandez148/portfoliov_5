// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import yAxisReducer from './slices/yAxis';
import isOpacityReducer from './slices/isOpacity';

export const store = configureStore({
    reducer: {
        yAxis: yAxisReducer,
        isOpacity: isOpacityReducer,
    }
});