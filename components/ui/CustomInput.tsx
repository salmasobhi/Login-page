// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import React, { useState } from "react";
// import {
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
// } from "react-native";

// interface CustomInputProps {
//   placeholder: string;
//   value: string;
//   onChangeText: (text: string) => void;
//   error?: string;
//   secureTextEntry?: boolean;
//   keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
// }

// const CustomInput: React.FC<CustomInputProps> = ({
//   placeholder,
//   value,
//   onChangeText,
//   error,
//   secureTextEntry = false,
//   keyboardType = "default",
// }) => {
//   const [isSecure, setIsSecure] = useState(secureTextEntry);

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputWrapper}>
//         <TextInput
//           style={styles.input}
//           placeholder={placeholder}
//           value={value}
//           onChangeText={onChangeText}
//           secureTextEntry={isSecure}
//           keyboardType={keyboardType}
//         />
//         {secureTextEntry && (
//           <TouchableOpacity
//             style={styles.icon}
//             onPress={() => setIsSecure(!isSecure)}
//           >
//             <MaterialCommunityIcons
//               name={isSecure ? "eye-off" : "eye"}
//               size={22}
//               color="#666"
//             />
//           </TouchableOpacity>
//         )}
//       </View>
//       {error ? <Text style={styles.error}>{error}</Text> : null}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { marginBottom: 15 },
//   inputWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     paddingHorizontal: 10,
//   },
//   input: { flex: 1, height: 50 },
//   icon: { marginLeft: 10 },
//   error: { color: "red", marginTop: 5, fontSize: 12 },
// });

// export default CustomInput;

// import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  I18nManager,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface CustomInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChangeText,
  error,
  secureTextEntry = false,
  keyboardType = "default",
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  const isRTL = I18nManager.isRTL;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputWrapper,
          { flexDirection: isRTL ? "row-reverse" : "row" }, // 🔁 قلب الاتجاه
        ]}
      >
        <TextInput
          style={[
            styles.input,
            {
              textAlign: isRTL ? "right" : "left",   // ✅ اتجاه النص
              writingDirection: isRTL ? "rtl" : "ltr", // ✅ اتجاه placeholder
            },
          ]}
          placeholder={placeholder}
          placeholderTextColor="#999"   // 🔹 عشان يبقى شكله أوضح
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
          keyboardType={keyboardType}
          autoCapitalize="none"
          autoCorrect={false}
        />

        {secureTextEntry && (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setIsSecure(!isSecure)}
          >
            <MaterialCommunityIcons
              name={isSecure ? "eye-off" : "eye"}
              size={22}
              color="#666"
            />
          </TouchableOpacity>
        )}
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  inputWrapper: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,          // ✅ عشان الـ input ياخد المساحة كاملة
    height: 50,
    fontSize: 16,
  },
  icon: {
    marginLeft: 10,
    paddingHorizontal: 5,
  },
  error: {
    color: "red",
    marginTop: 5,
    fontSize: 12,
  },
});

export default CustomInput;
