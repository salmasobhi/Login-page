import AsyncStorage from "@react-native-async-storage/async-storage";
import { QueryClient } from "@tanstack/react-query";
import Reactotron from "reactotron-react-native";
import {
  QueryClientManager,
  reactotronReactQuery,
} from "reactotron-react-query";

export const queryClient = new QueryClient();
const queryClientManager = new QueryClientManager({
  queryClient: queryClient,
});
const reactotron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
  .configure({
    name: "Expo App",
    host: "127.0.0.1",
  })
  .useReactNative()
  .use(reactotronReactQuery(queryClientManager))
  .connect();
declare global {
  interface Console {
    tron: typeof reactotron;
  }
}
console.tron = reactotron as any;
export default reactotron;
