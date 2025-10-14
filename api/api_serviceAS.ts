import { create } from "apisauce";

const API_BASE_URL = "https://manarbe.oetest.tech/api/v1/ar";

const api = create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

const apiService = {
  create: async (endpoint: string, data: any) => {
    const response = await api.post(endpoint, data);
     if (!response.ok) {
      console.error("API Error:", response.problem);
      throw new Error(response.problem || "Network Error " );
    }
     console.log("response.data",response.data)
    return response.data;
  },
  getAll: async (endpoint: string, params?: object) : Promise<any>=> {
    const response = await api.get(endpoint, params );
     if (!response.ok) {
      console.error("API Error:", response.problem);
      throw new Error(response.problem || "Network Error " );
    }
    console.log("responsedata",response.data)
  return response.data;

}
};
export default apiService;
