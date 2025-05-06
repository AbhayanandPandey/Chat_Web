import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:"https://chat-web-5hkm.onrender.com" ,
  withCredentials: true,
});
