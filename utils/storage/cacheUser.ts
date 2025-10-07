import { User } from "@/models/userModelRQ";
import { queryClient } from "@/ReactotronConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackNavigationProp } from "../../navigation/Rootstack";
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
    return userData ? JSON.parse(userData) : null;
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

export const handleLogout = async (navigation: RootStackNavigationProp) => {
    try {
      await AsyncStorage.removeItem("user");
      queryClient.removeQueries({ queryKey: ["user"] });
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginScreenRQ" }],
      });
      console.log("Logout successful");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };