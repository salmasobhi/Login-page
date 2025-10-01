import { User } from "@/models/userModelRQ";
import AsyncStorage from "@react-native-async-storage/async-storage";
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