import axios from 'axios'
export const axiosInstance = axios.create(
    {
        baseURL:'http://localhost:50001/api',
        withCredentials:true,

    }
)