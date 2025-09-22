import axios from "axios";
// https://manarbe.oetest.tech/api/v1/ar/auth/login 

const API_BASE_URL = "https://manarbe.oetest.tech/api/v1/ar";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});
 const apiService = {
    create: async (endpoint:string, data:any) => {
        const response = await axiosInstance.post(`/${endpoint}`, data);
        return response.data;
      } 
 }

export default apiService;
