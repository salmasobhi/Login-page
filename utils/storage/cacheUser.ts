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
 const LANGUAGE_KEY = "user_language";
export const saveUserLanguage = async (language: string) => {
  try {
    await AsyncStorage.setItem(LANGUAGE_KEY, language);
  } catch (error) {
    console.log("Error saving language preference:", error);
  }
};
export const getUserLanguage = async (): Promise<string | null> => {
  try {
   
    return await AsyncStorage.getItem(LANGUAGE_KEY);
  } catch (error) {
    console.log("Error getting language preference:", error);
    return null;
  }
};