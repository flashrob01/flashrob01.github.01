import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import customerReducer from './slice_reducers/customerSlice';

export default configureStore({
    reducer: {
        customer: customerReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
});