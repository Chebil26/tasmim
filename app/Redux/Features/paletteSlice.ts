// revetementSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "@/config";

export const fetchPalettes = createAsyncThunk(
  "palettes/fetchPalettes",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/api/palettes`);
    return response.data;
  }
);

const paletteSlice = createSlice({
  name: "palettes",
  initialState: {
    palettes: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPalettes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPalettes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.palettes = action.payload;
      })
      .addCase(fetchPalettes.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.error.message;
      });
  },
});

export default paletteSlice.reducer;
