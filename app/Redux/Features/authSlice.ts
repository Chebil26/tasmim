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

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("userInfo", JSON.stringify(data));
        dispatch(loginSuccess(data)); // Assuming user_id is the correct field
        // Redirect to the homepage here (handle it in your component or dispatch another action)
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

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (credentials: { username: string; password: string }, { dispatch }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/user/signup/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("userInfo", JSON.stringify(data));
        dispatch(signupSuccess(data));

        await dispatch(
          loginUser({
            username: credentials.username,
            password: credentials.password,
          })
        );
      } else {
        // Handle signup failure
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
      state.user = action.payload; // Assuming action.payload is the user object
      state.isAuthenticated = true;
    },
    logout: (state) => {
      localStorage.removeItem("userInfo");
      state.user = null;
      state.isAuthenticated = false;
    },
    signupSuccess: (state, action: PayloadAction<any>) => {
      state.user = action.payload; // Assuming action.payload is the user object
      state.isAuthenticated = true;
    },
  },
});

export const { loginSuccess, logout, signupSuccess } = authSlice.actions;

export default authSlice.reducer;
