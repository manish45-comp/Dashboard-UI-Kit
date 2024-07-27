import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") && true,
  token: localStorage.getItem("token"),
  refresh: localStorage.getItem("refresh"),
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "api/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { username, password, expiresInMins = 60 } = credentials;

      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        { username, password, expiresInMins },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(
          error.response.data.message || "Failed to login"
        );
      } else if (error.request) {
        return rejectWithValue(
          "No Response From Server, Please try again later."
        );
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      state.isAuthenticated = false;
      state.token = null;
      state.refresh = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.refresh = action.payload.refreshToken;
        state.error = null;
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("refresh", action.payload.refreshToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
