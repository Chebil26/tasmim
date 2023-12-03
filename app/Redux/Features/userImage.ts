import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "@/config";

interface UserImage {
  id: number;
  user: number; // Assuming user is the ID of the associated user
  ref: string;
  image: string; // Assuming image is the path or URL of the image
  image_url: string;
}

interface CreateUserImagePayload {
  user: number;
  image: string;
}

// Define an async thunk to create a new UserImage
export const createUserImage = createAsyncThunk(
  "userImages/createUserImage",
  async (payload: { user: number; image: File }) => {
    const { user, image } = payload;

    const formData = new FormData();
    formData.append("user", user.toString());
    formData.append("image", image);

    const response = await axios.post<UserImage>(
      `${API_BASE_URL}/api/user-images/`,
      formData
    );
    return response.data;
  }
);

interface UserImageState {
  userImages: UserImage[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserImageState = {
  userImages: [],
  status: "idle",
  error: null,
};

const userImageSlice = createSlice({
  name: "userImages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserImage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserImage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userImages.push(action.payload);
      })
      .addCase(createUserImage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred.";
      });
  },
});

export default userImageSlice.reducer;
