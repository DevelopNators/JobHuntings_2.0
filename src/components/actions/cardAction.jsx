// cardActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getJobs } from "../services/jobhunting-service";
import cryptoService from "../services/CryptoService.js";

export const fetchData = createAsyncThunk(
  "card/fetchData",
  async (
    { pageNumber, pageSize, categoryId = null, name = null },
    thunkAPI
  ) => {
    // console.log("postitle", name)
    const { card } = thunkAPI.getState();
    const reqEncryption = import.meta.env.VITE_REQ_ENCRYPTION;

    if (card.cache === "hit" && card.data.length > 0) {
      return thunkAPI.fulfillWithValue(card.data);
    }

    try {
      let data = { pageNumber, pageSize, IsActive: true };

      if (categoryId) {
        data.categoryId = categoryId;
      } else if (name) {
        data.name = name;
      }

      if (reqEncryption) {
        const encryptedData = cryptoService.encryptForUri(JSON.stringify(data));
        data = { enData: encryptedData };
      }

      const response = await getJobs(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
