
import { User, userModelRQ } from "@/models/userModelRQ";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/api_service";
interface LoginPayload {
  mobile: string;
  password: string;
}
export const cacheUser = async (user: User): Promise<User> => {
  try {
    const USER_KEY = "user";
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    return user;
  } catch (error) {
    console.log("Error saving user:", error);
    throw error;
  }
};

export const useLoginMutation = () => {
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
    },
    onError: (error: any) => {
      console.log("error", error.response?.data || error.message);
      return error.response?.data || error.message
    },
  });
};