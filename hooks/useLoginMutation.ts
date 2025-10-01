
import { userModelRQ } from "@/models/userModelRQ";
import showMessage from "@/utils/showMassage";
import { cacheUser } from "@/utils/storage/cacheUser";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/api_service";
interface LoginPayload {
  mobile: string;
  password: string;
}
export  const useLoginMutation = () => {
  return useMutation({
    mutationFn: ({ mobile, password }: LoginPayload) =>
      loginApi(mobile, password),
      onSuccess:async (data) => {
        // console.log(data)
      const user = userModelRQ.parse(data);
      console.log("user", user)
      // save user to async storage
       const cacheUsers = await cacheUser(user);
        console.log("cacheUsers", cacheUsers)
        showMessage (data?.meta?.message)
    },
    onError: (error: any) => {
      const [Error] = error.response?.data?.errors || [];
      const detail = Error?.detail;
      console.log("error",detail)
      showMessage(detail || error.message, "error")  
      return error.response?.data || error.message
    },
  });
};