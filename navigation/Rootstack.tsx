
import HomeScreen from "@/screens/HomeScreen";
import LoginScreenRQ from "@/screens/LoginScreenRQ";
import SplashScreen from "@/screens/SplashScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export type RootStackParamList = {
  LoginScreenRQ: undefined;
  HomeScreen: undefined;
  SplashScreen: undefined;
};

//This TypeScript type defines the navigation prop based on the stack you have created. (NativeStackNavigationProp)
export type RootStackNavigationProp = 
import("@react-navigation/native-stack").NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const Rootstack: React.FC = () => {
  const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        setInitialRoute("HomeScreen");
      } else {
        setInitialRoute("SplashScreen");
      }
    };
    checkUser();
  }, []);

  if (!initialRoute) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }
  return (
   <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
  <Stack.Screen name="SplashScreen" component={SplashScreen} />
  <Stack.Screen name="LoginScreenRQ" component={LoginScreenRQ} />
  <Stack.Screen name="HomeScreen" component={HomeScreen} />
</Stack.Navigator>

  );
};
export default Rootstack;
