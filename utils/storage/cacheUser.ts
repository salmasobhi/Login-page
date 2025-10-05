import { User } from "@/models/userModelRQ";
import AsyncStorage from "@react-native-async-storage/async-storage";
 const USER_KEY = "user";
export const cacheUser = async (user: User): Promise<User> => {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    return user;
  } catch (error) {
    console.log("Error saving user:", error);
    throw error;
  }
};
export const getUserData = async (): Promise<User | null> => {
  try {
    const userData = await AsyncStorage.getItem(USER_KEY);
    return userData ? JSON.parse(userData) : {} as User;
  } catch (error) {
    console.log("Error getting user data:", error);
    throw error;
  }
};
 const LANGUAGE_KEY = "user_language";
export const saveUserLanguage = async (language: string) => {
  try {
    await AsyncStorage.setItem(LANGUAGE_KEY, language);
    console.log("Language preference saved:", language);
  } catch (error) {
    console.log("Error saving language preference:", error);
  }
};
export const getUserLanguage = async (): Promise<string | null> => {
  try {
    const language = await AsyncStorage.getItem(LANGUAGE_KEY);
    console.log("Language preference retrieved:", language);
    return language || null;
  } catch (error) {
    console.log("Error getting language preference:", error);
    return null;
  }
};