// typeSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "@/config";

export const fetchTypes = createAsyncThunk("types/fetchTypes", async () => {
  const response = await axios.get(`${API_BASE_URL}/api/types`);
  return response.data;
});

const typeSlice = createSlice({
  name: "types",
  initialState: {
    types: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTypes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTypes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.types = action.payload;
      })
      .addCase(fetchTypes.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.error.message;
      });
  },
});

export default typeSlice.reducer;
