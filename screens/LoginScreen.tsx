
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { useFormik } from 'formik';
// import React, { useState } from 'react';
// import {
//   ActivityIndicator,
//   Alert,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View
// } from 'react-native';
// import { authStore } from '../api/auth_store';

// // Define the type for the form values
// interface FormValues {
//   mobile: string;
//   password: string;
// }

// const LoginScreen: React.FC = () => {
//   const [secureText, setSecureText] = useState(true);

//   // Define the validation logic manually
//   const validate = (values: FormValues) => {
//     const errors: Partial<FormValues> = {};

//     // Validate mobile number
//     if (!values.mobile) {
//       errors.mobile = 'Mobile number is required';
//     } else if (!/^\+20\d{10}$/.test(values.mobile)) {
//       errors.mobile = 'Mobile number must be in the format +20xxxxxxxxxx';
//     }

//     // Validate password
//     if (!values.password) {
//       errors.password = 'Password is required';
//     } else if (values.password.length < 8) {
//       errors.password = 'Password must be at least 8 characters';
//     }

//     return errors;
//   };

//   const formik = useFormik<FormValues>({
//     initialValues: { mobile: '', password: '' },
//     validate,
//     onSubmit: async (values, { setSubmitting }) => {
//       try {
//         await authStore.login(values);
//         Alert.alert("Success", "Login successful!");
//       } catch (error) {
//         Alert.alert(
//           "Error",
//           (error as any).response?.data?.errors[0]?.detail || "An error occurred."
//         );
//       } finally {
//         setSubmitting(false);
//       }
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={formik.values.mobile}
//         onChangeText={formik.handleChange('mobile')}
//         onBlur={formik.handleBlur('mobile')}
//         keyboardType="phone-pad"
//         autoCapitalize="none"
//       />
//       {formik.touched.mobile && formik.errors.mobile && (
//         <Text style={styles.errorText}>{formik.errors.mobile}</Text>
//       )}

//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.inputPassword}
//           placeholder="Password"
//           value={formik.values.password}
//           onChangeText={formik.handleChange('password')}
//           onBlur={formik.handleBlur('password')}
//           secureTextEntry={secureText}
//         />
//         <TouchableOpacity
//           style={styles.eyeIcon}
//           onPress={() => setSecureText(!secureText)}
//         >
//           <MaterialCommunityIcons
//             name={secureText ? 'eye-off' : 'eye'}
//             size={24}
//             color="#aaa"
//           />
//         </TouchableOpacity>
//       </View>
//       {formik.touched.password && formik.errors.password && (
//         <Text style={styles.errorText}>{formik.errors.password}</Text>
//       )}

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => formik.handleSubmit()}
//         disabled={formik.isSubmitting}
//       >
//         {formik.isSubmitting ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <Text style={styles.buttonText}>Login</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
//   title: { fontSize: 32, fontWeight: 'bold', marginBottom: 40 },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     marginBottom: 5,
//   },
//   passwordContainer: {
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   inputPassword: {
//     flex: 1,
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 15,
//   },
//   eyeIcon: { position: 'absolute', right: 15, top: 13 },
//   button: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#007bff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//     marginTop: 20,
//   },
//   buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
//   errorText: { color: 'red', alignSelf: 'flex-start', marginLeft: '5%', marginBottom: 10 },
// });

// export default LoginScreen;




// new code 
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { useFormik } from "formik";
// import { observer } from "mobx-react-lite";
// import React, { useState } from "react";
// import {
//   ActivityIndicator,
//   Alert,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { authStore } from "../api/auth_store";

// interface FormValues {
//   mobile: string;
//   password: string;
// }

// const LoginScreen: React.FC = observer(() => {
//   const [secureText, setSecureText] = useState(true);
//   const validate = (values: FormValues) => {
//     const errors: Partial<FormValues> = {};
//     if (!values.mobile) {
//       errors.mobile = "Mobile number is required";
//     } else if (!/^\+20\d{10}$/.test(values.mobile)) {
//       errors.mobile = "Mobile number must be like +20xxxxxxxxxx";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 8) {
//       errors.password = "Password must be at least 8 characters";
//     }
//     return errors;
//   };
//     const formik = useFormik<FormValues>({
//     initialValues: { mobile: "", password: "" },
//     validate,
//     onSubmit: async (values) => {
//       await authStore.login(values);
//       if (!authStore.error) {
//         Alert.alert("Success", "Login successful!");
//       }
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>

//       {/* Mobile */}
//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={formik.values.mobile}
//         onChangeText={formik.handleChange("mobile")}
//         onBlur={formik.handleBlur("mobile")}
//         keyboardType="phone-pad"
//         autoCapitalize="none"
//       />
//       {formik.touched.mobile && formik.errors.mobile && (
//         <Text style={styles.errorText}>{formik.errors.mobile}</Text>
//       )}

//       {/* Password */}
//       <View style={styles.passwordContainer}>
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
//         <Text style={styles.errorText}>{formik.errors.password}</Text>
//       )}

//       {/* Submit Button */}
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => formik.handleSubmit()}
//         disabled={authStore.isLoading}
//       >
//         {authStore.isLoading ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <Text style={styles.buttonText}>Login</Text>
//         )}
//       </TouchableOpacity>

//       {authStore.error && (
//         <Text style={styles.errorText}>{authStore.error}</Text>
//       )}
//     </View>
//   );
// });

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginBottom: 40,
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     marginBottom: 5,
//   },
//   passwordContainer: {
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
//   button: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#007bff",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 8,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   errorText: {
//     color: "red",
//     alignSelf: "flex-start",
//     marginBottom: 10,
//   },
// });



// ///////////////////////////////////////////////
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { authStore } from "../api/auth_store";

interface FormValues {
  mobile: string;
  password: string;
}

const LoginScreen: React.FC = observer(() => {
  const [secureText, setSecureText] = useState(true);

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\+20\d{10}$/.test(values.mobile)) {
      errors.mobile = "Mobile number must be like +20xxxxxxxxxx";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    return errors;
  };

  const formik = useFormik<FormValues>({
    initialValues: { mobile: "", password: "" },
    validate,
    onSubmit: async (values) => {
      await authStore.login(values);

      if (!authStore.error) {
        Alert.alert("Success", "Login successful!");
      } else {
        Alert.alert("Error", authStore.error);
      }
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Mobile */}
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={formik.values.mobile}
        onChangeText={formik.handleChange("mobile")}
        onBlur={formik.handleBlur("mobile")}
        keyboardType="phone-pad"
        autoCapitalize="none"
      />
      {formik.touched.mobile && formik.errors.mobile && (
        <Text style={styles.errorText}>{formik.errors.mobile}</Text>
      )}

      {/* Password */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={formik.handleBlur("password")}
          secureTextEntry={secureText}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setSecureText(!secureText)}
        >
          <MaterialCommunityIcons
            name={secureText ? "eye-off" : "eye"}
            size={24}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => formik.handleSubmit()}
        disabled={authStore.isLoading}
      >
        {authStore.isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>

      {authStore.error && (
        <Text style={styles.errorText}>{authStore.error}</Text>
      )}
    </View>
  );
});

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  inputPassword: {
    flex: 1,
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  eyeIcon: {
    position: "absolute",
    right: 15,
    top: 13,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});
