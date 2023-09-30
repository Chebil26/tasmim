// furnitureSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "@/config";

export const fetchFurniture = createAsyncThunk(
  "furniture/fetchFurniture",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/api/furnitures`);
    return response.data;
  }
);

const furnitureSlice = createSlice({
  name: "furniture",
  initialState: {
    furnitures: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFurniture.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFurniture.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.furnitures = action.payload;
      })
      .addCase(fetchFurniture.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.error.message;
      });
  },
});

export default furnitureSlice.reducer;
