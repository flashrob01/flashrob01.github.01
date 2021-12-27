import {createSlice} from '@reduxjs/toolkit';

export const offersSlice = createSlice({
    name: 'offers',
    initialState: {data: undefined,
                   isLoading: true,
                   isError: false
                },
    reducers: {
        fetchingOffers:(state) => {
            return {
                ...state.offers, 
                isLoading: true,
                isError: false,
            }
        },
        gotOffers: (state, action) => {
        return {
            ...state.offers, 
            isLoading: false, 
            isError: false, 
            data: action.payload
            }
        },  
        fetchingOffersFailed: (state, action) => {
            return {
                ...state,
                isLoading: false,
                isError: true,        
        } 
        },
}})


export const selectOffers = state => state.offers;
export const {fetchingOffers, gotOffers, fetchingOffersFailed} = offersSlice.actions;
export default offersSlice.reducer;