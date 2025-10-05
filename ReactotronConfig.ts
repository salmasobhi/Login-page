import AsyncStorage from "@react-native-async-storage/async-storage";
import { QueryClient } from "@tanstack/react-query";
import Reactotron from "reactotron-react-native";
import { QueryClientManager, reactotronReactQuery } from "reactotron-react-query";

// أنشئ QueryClient
export const queryClient = new QueryClient();

// أنشئ QueryClientManager باستخدام الـ QueryClient
const queryClientManager = new QueryClientManager({
  queryClient: queryClient,
});

// إعداد Reactotron
const reactotron = Reactotron
  .setAsyncStorageHandler!(AsyncStorage)
  .configure({
    name: "Expo App",
    host: "192.168.1.2",  // غيريها بالـ IP بتاع جهازك
  })
  .useReactNative()
  .use(reactotronReactQuery(queryClientManager))
  .connect();

// تعريف typing ل console.tron
declare global {
  interface Console {
    tron: typeof reactotron;
  }
}

// ربط console.tron
console.tron = reactotron as any;

export default reactotron;
