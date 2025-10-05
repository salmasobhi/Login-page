// import HomeScreen from "@/screens/HomeScreen";
// import LoginScreenRQ from "@/screens/LoginScreenRQ";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";
// import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
// import React, { useEffect, useState } from "react";
// export type RootStackParamList = {
//   LoginScreenRQ: undefined;
//   HomeScreen: undefined;
// };
// export type RootStackNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   keyof RootStackParamList
// >;

// const Stack = createNativeStackNavigator<RootStackParamList>();

// const Rootstack = () => {
//   return (
//     <Stack.Navigator initialRouteName="LoginScreenRQ">
//       <Stack.Screen name="LoginScreenRQ" component={LoginScreenRQ} />
//       <Stack.Screen name="HomeScreen" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// };

// export default Rootstack;



import HomeScreen from "@/screens/HomeScreen";
import LoginScreenRQ from "@/screens/LoginScreenRQ";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export type RootStackParamList = {
  LoginScreenRQ: undefined;
  HomeScreen: undefined;
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
        setInitialRoute("LoginScreenRQ");
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
    <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreenRQ" component={LoginScreenRQ} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Rootstack;
