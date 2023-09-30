// optionSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "@/config";

export const fetchOptions = createAsyncThunk(
  "options/fetchOptions",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/api/options`);
    return response.data;
  }
);

const optionSlice = createSlice({
  name: "options",
  initialState: {
    options: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOptions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOptions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.options = action.payload;
      })
      .addCase(fetchOptions.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.error.message;
      });
  },
});

export default optionSlice.reducer;
