import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchSingleJob } from '../actions/singleCardAction';
const initialState = {
    singleCard: null,
    loading: false,
    error: null,
    cache: 'miss',
    jobId: null  
};

export const singleCardSlice = createSlice({
    name: 'singleCard',
    initialState,
    reducers: {
        resetCache: (state) => {
            state.cache = 'miss';
            state.jobId = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleJob.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSingleJob.fulfilled, (state, action) => {
                state.loading = false;
                state.singleCard = action.payload.data;
                state.cache = 'hit';
                state.jobId = action.payload.jobId;
            })
            .addCase(fetchSingleJob.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.cache = 'miss';
                state.jobId = null;
            });
    }
});

export const { resetCache } = singleCardSlice.actions;
export default singleCardSlice.reducer;
