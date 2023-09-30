// revetementSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "@/config";

export const fetchRevetements = createAsyncThunk(
  "revetements/fetchRevetements",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/api/revetements`);
    return response.data;
  }
);

const revetementSlice = createSlice({
  name: "revetements",
  initialState: {
    revetements: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRevetements.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRevetements.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.revetements = action.payload;
      })
      .addCase(fetchRevetements.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.error.message;
      });
  },
});

export default revetementSlice.reducer;
