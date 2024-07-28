import axios from "axios";
import { getAccessToken, getRefreshToken, setAccessToken } from "./utils/auth";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const refreshToken = async () => {
  try {
    const response = await axios.post("https://dummyjson.com/auth/refresh", {
      refreshToken: getRefreshToken(),
    });
    const newToken = response.data.token;
    setAccessToken(newToken);
    return newToken;
  } catch (error) {
    console.log("Failed to refresh token", error);
    throw error;
  }
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const newToken = await refreshToken();
      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
