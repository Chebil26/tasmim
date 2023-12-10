// slices/authSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { API_BASE_URL } from "@/config";

interface AuthState {
  user: any;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

// Async Thunk Actions
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: { username: string; password: string }, { dispatch }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/user/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      localStorage.setItem("userInfo", JSON.stringify(data));

      if (response.ok) {
        dispatch(loginSuccess(data));
      } else {
        // Handle login failure
      }
    } catch (error) {
      // Handle network error
    }
  }
);

// Define action for signup (similar to loginUser)

// Define action for logout
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { dispatch }) => {
    try {
      // Make API call to DRF backend for logout
      const response = await fetch("/api/user/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        dispatch(logout());
      } else {
        // Handle logout failure
      }
    } catch (error) {
      // Handle network error
    }
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.user = action.payload.user_id;
      state;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
