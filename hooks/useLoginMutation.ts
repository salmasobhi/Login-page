
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/api_service";

interface LoginPayload {
  mobile: string;
  password: string;
}

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: ({ mobile, password }: LoginPayload) =>
      loginApi(mobile, password),
    onSuccess: (data) => {
      console.log("sucess", data);
    },
    onError: (error: any) => {
      console.log("error", error.response?.data || error.message);
    },
  });
};
