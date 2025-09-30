
import { userModelRQ } from "@/models/userModelRQ";
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
        // console.log(data)
      const user = userModelRQ.parse(data);
      console.log("user", user)
    },
    onError: (error: any) => {
      console.log("error", error.response?.data || error.message);
      return error.response?.data || error.message
    },
  });
};