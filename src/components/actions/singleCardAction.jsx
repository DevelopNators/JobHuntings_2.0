import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getJobs } from '../services/jobhunting-service';
import CryptoService from '../services/CryptoService'; 
// import { pageNumber } from '../store/store';
// import  {pageSize}  from  '../store/store';
export const fetchSingleJob = createAsyncThunk(
    'singleCard/fetchSingleJob',
    async (id, thunkAPI) => {
        const { singleCard, cache, jobId } = thunkAPI.getState().singleCard;
        const reqEncryption = import.meta.env.VITE_REQ_ENCRYPTION;

        // if (cache === 'hit' && jobId === id) {
        //     return thunkAPI.fulfillWithValue(singleCard);
        // }


        const pageNumber = 1;
        const pageSize = 10;

       
        const requestData = {
            pageNumber,
            pageSize,
            jobId: id,
        };

        try {
            let data;

            if (reqEncryption) {
                const serializedData = JSON.stringify(requestData);
                data = { enData: CryptoService.encryptForUri(serializedData) };
            } else {
                data = requestData;
            }

          
            const response = await getJobs(data);

            return { data: response.data.jobs[0], jobId: id };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
