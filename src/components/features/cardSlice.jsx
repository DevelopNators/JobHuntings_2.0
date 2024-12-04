// cardSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../actions/cardAction';

const initialState = {
    data: [],
    loading: false,
    error: null,
    cache: 'miss',
    pageNumber: 1,
    pageSize: 10
};

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        resetCache: (state) => {
            state.cache = 'miss';
        },
        setPageNumber: (state, action) => {
            state.pageNumber = action.payload;
        },
        setPageSize: (state, action) => {
            state.pageSize = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.cache = 'hit';
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.cache = 'miss';
            });
    },
});

export const { resetCache, setPageNumber, setPageSize } = cardSlice.actions;
export default cardSlice.reducer;
