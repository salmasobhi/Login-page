import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
const stack = createNativeStackNavigator();
const Rootstack =()=>{
  return (
    <stack.Navigator>
        <stack.Screen name="Login" component={LoginScreen} />
    </stack.Navigator>
  )
}
export default Rootstack;