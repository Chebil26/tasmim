// furnitureTypeSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "@/config";

export const fetchFurnitureTypes = createAsyncThunk(
  "furnitureTypes/fetchFurnitureTypes",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/api/furniture_types`);
    return response.data;
  }
);

const furnitureTypeSlice = createSlice({
  name: "furnitureTypes",
  initialState: {
    furnitureTypes: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFurnitureTypes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFurnitureTypes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.furnitureTypes = action.payload;
      })
      .addCase(fetchFurnitureTypes.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.error.message;
      });
  },
});

export default furnitureTypeSlice.reducer;
