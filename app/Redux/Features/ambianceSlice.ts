// ambianceSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "@/config";

export const fetchAmbiances = createAsyncThunk(
  "ambiances/fetchAmbiances",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/api/ambiances`);
    return response.data;
  }
);

const ambianceSlice = createSlice({
  name: "ambiances",
  initialState: {
    ambiances: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAmbiances.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAmbiances.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.ambiances = action.payload;
      })
      .addCase(fetchAmbiances.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.error.message;
      });
  },
});

export default ambianceSlice.reducer;
