// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { useFormik } from "formik";
// import React, { useState } from "react";
// import {
//   ActivityIndicator,
//   Button,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { useLoginMutation } from "../hooks/useLoginMutation";
// interface FormValues {
//   mobile: string;
//   password: string;
// }
// const validate = (values: FormValues) => {
//     const errors: Partial<FormValues> = {};
//     if (!values.mobile) {
//       errors.mobile = "Mobile number is required";
//     } else if (!/^\+20\d{10}$/.test(values.mobile)) {
//       errors.mobile = "Mobile number must be in this format +20xxxxxxxxxx";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 8) {
//       errors.password = "Password must be at least 8 characters";
//     }
//     return errors;
//   };
// const LoginScreenRQ: React.FC = () => {
//   const loginMutation = useLoginMutation();

//   const formik = useFormik<FormValues>({
//     initialValues: { mobile: "", password: "" },
//     validate,
//     onSubmit: (values) => {
//       loginMutation.mutate(values); 
//     },
//   });
//  const [secureText, setSecureText] = useState(true);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Mobile number"
//         value={formik.values.mobile}
//         onChangeText={formik.handleChange("mobile")}
//         onBlur={formik.handleBlur("mobile")}
//         keyboardType="phone-pad"
//       />
//       {formik.touched.mobile && formik.errors.mobile && (
//         <Text style={styles.error}>{formik.errors.mobile}</Text>
//       )}

//      <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.inputPassword}
//           placeholder="Password"
//           value={formik.values.password}
//           onChangeText={formik.handleChange("password")}
//           onBlur={formik.handleBlur("password")}
//           secureTextEntry={secureText}
//         />
//         <TouchableOpacity
//           style={styles.eyeIcon}
//           onPress={() => setSecureText(!secureText)}
//         >
//           <MaterialCommunityIcons
//             name={secureText ? "eye-off" : "eye"}
//             size={24}
//             color="#aaa"
//           />
//         </TouchableOpacity>
//       </View>
//       {formik.touched.password && formik.errors.password && (
//         <Text style={styles.error}>{formik.errors.password}</Text>
//       )}

//       {loginMutation.isPending ? (
//         <ActivityIndicator size="large" color="#007AFF" style={{ marginVertical: 10 }} />
//       ) : (
//         <Button title="Login" onPress={formik.handleSubmit as () => void} />
//       )}
//       {loginMutation.isError && (
//         <Text style={styles.error}>Login failed </Text>
//       )}

//       {loginMutation.isSuccess && (
//         <Text style={styles.success}>Login successful </Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", padding: 20 },
//   title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 10,
//   },
//    passwordContainer: {
//     width: "100%",
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 5,
//   },
//   inputPassword: {
//     flex: 1,
//     height: 50,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 15,
//   },
//   eyeIcon: {
//     position: "absolute",
//     right: 15,
//     top: 13,
//   },
//   error: { color: "red", marginBottom: 8, textAlign: "center" },
//   success: { color: "green", marginTop: 10, textAlign: "center" },
// });

// export default LoginScreenRQ;



import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ActivityIndicator,
  DevSettings,
  I18nManager,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CustomButton from "../components/ui/CustomButton";
import CustomInput from "../components/ui/CustomInput";
import { useLoginMutation } from "../hooks/useLoginMutation";
import i18n from "../utils/localization/i18n";
import { FormValues, validate } from "../validation/validationLogin";
const LoginScreenRQ: React.FC = () => {
  const loginMutation = useLoginMutation();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [_, setLangToggle] = useState(false);
  const formik = useFormik<FormValues>({
    initialValues: { mobile: "", password: "" },
    validate: (values) => validate(values, t),
    onSubmit: (values) => {
      loginMutation.mutate(values, {
        onSuccess: () => {
          (navigation as any).navigate("HomeScreen");
        },
      });
    },
  });
  const toggleLanguage = async () => {
    try {
      const newLang = i18n.language === "ar" ? "en" : "ar";
      await i18n.changeLanguage(newLang);
      formik.validateForm();
      const isRTL = newLang === "ar";
        I18nManager.allowRTL(isRTL);
        I18nManager.forceRTL(isRTL);
        // Commented out the reload until expo-updates bug is fixed
        // await Updates.reloadAsync();
        DevSettings.reload();
    } catch (error) {
      console.warn("Language toggle failed:", error);
    }
  };
  return (
    <View style={styles.container}>
<View
  style={{
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
   justifyContent: I18nManager.isRTL ? "flex-start" : "flex-end",
  }}
>
  <TouchableOpacity onPress={toggleLanguage} style={styles.langButton}>
    <Image
      source={
        i18n.language === "ar"
          ? require("../assets/images/uk.png")
          : require("../assets/images/sa.png")
      }
      style={styles.flag}
    />
    <Text style={styles.langButtonText}>
      {i18n.language === "ar" ? "English" : "عربي"}
    </Text>
  </TouchableOpacity>
</View>



      {/* Title */}
      <Text style={styles.title}>{t("Login")}</Text>
      {/* Mobile Field */}
      <CustomInput
        placeholder={t("mobile")}
        value={formik.values.mobile}
        onChangeText={formik.handleChange("mobile")}
        error={formik.touched.mobile ? formik.errors.mobile : undefined}
        keyboardType="phone-pad"
      />
      {/* Password Field */}
      <CustomInput
        placeholder={t("password")}
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
        error={formik.touched.password ? formik.errors.password : undefined}
        secureTextEntry
      />
      {/* Submit Button or Loader */}
      {loginMutation.isPending ? (
        <ActivityIndicator
          size="large"
          color="#007AFF"
          style={{ marginVertical: 10 }}
        />
      ) : (
        <CustomButton
          title={t("loginButton")}
          onPress={formik.handleSubmit as () => void}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
langButton: {
  marginBottom: 10,
  padding: 8,
  backgroundColor: "#007AFF",
  borderRadius: 6,
  flexDirection: "row",
  alignItems: "center",
},

  langButtonText: {
    color: "#fff",
    fontWeight: "bold",

  },
  flag: {
  width: 24,
  height: 16,
  borderRadius: 3, 
  marginRight: 8, 
},

  error: { color: "red", marginBottom: 8, textAlign: "center" },
  success: { color: "green", marginTop: 10, textAlign: "center" },
});
export default LoginScreenRQ;
