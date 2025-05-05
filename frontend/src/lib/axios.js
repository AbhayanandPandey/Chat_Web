import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-web-5hkm.onrender.com/api" : "/api",
  withCredentials: true,
});
