import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") && true,
  token: localStorage.getItem("token"),
  refresh: localStorage.getItem("refresh"),
  loading: false,
  error: null,
  notifications: null,
};

export const registerUser = createAsyncThunk(
  "api/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://192.168.1.8:8000/api/register/",
        data,
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
          error.response.data.message || "Failed to Register"
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

export const loginUser = createAsyncThunk(
  "api/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://192.168.1.8:8000/api/login/",
        credentials,
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

export const logoutUser = createAsyncThunk(
  "api/logout",
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.post("http://192.168.1.8:8000/api/login/");
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(
          error.response.data.message || "Failed to logout"
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.isAuthenticated = true;
        state.token = action.payload.access;
        state.refresh = action.payload.refresh;
        state.error = null;
        state.notifications = "Login Successful";
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("token", action.payload.access);
        localStorage.setItem("refresh", action.payload.refresh);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.notifications = "Registration Successful";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearNotifications } = authSlice.actions;

export default authSlice.reducer;
