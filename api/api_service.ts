// import axios from "axios";
// const API_BASE_URL = "https://manarbe.oetest.tech/api/v1/ar";
// const axiosInstance = axios.create({
//   baseURL: API_BASE_URL,
//   headers: { "Content-Type": "application/json" },
// });
//  const apiService = {
//     create: async (endpoint:string, data:any) => {
//         const response = await axiosInstance.post(`/${endpoint}`, data);
//         return response.data;
//       } 
//  }
// export default apiService;


import axios from "axios";

const api = axios.create({
  baseURL: "https://manarbe.oetest.tech/api/v1/ar",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const loginApi = async (mobile: string, password: string) => {
  const body = {
    data: {
      type: "user",
      attributes: {
        mobile,
        password,
        device_type: "ios", 
      },
      id: "null",
    },
  };

  const res = await api.post("/auth/login", body);
  return res.data;
};
