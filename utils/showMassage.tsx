// utils/showMessage.ts
import Toast from "react-native-toast-message";
type MessageType = "success" | "error";
const showMessage = (message: string, type: MessageType = "success"): void => {
  Toast.show({
    type,
    text1: message,
    visibilityTime: 3000,
    position: "bottom",
  });
};
export default showMessage;