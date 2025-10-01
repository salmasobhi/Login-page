import axios from "axios";
import { Platform } from "react-native";

const API_BASE_URL = "https://manarbe.oetest.tech/api/v1/ar";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const apiService = {
  create: async (endpoint: string, data: any) => {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  },
};

export default apiService;
export const loginApi = async (mobile: string, password: string) => {
  const body = {
    data: {
      type: "user",
      attributes: {
        mobile,
        password,
        device_type: Platform.OS,
      },
      id: null,
    },
  };

  try {
    const res = await apiService.create("auth/login", body);
    console.log("API Response:", res);
    return res;
  } catch (error: any) {
    console.log("API Error:",error.response?.data?.errors?.[0]?.detail  || error.message);
    throw error;
  }
};

