import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormik } from "formik";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useLoginMutation } from "../hooks/useLoginMutation";
interface FormValues {
  mobile: string;
  password: string;
}
const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\+20\d{10}$/.test(values.mobile)) {
      errors.mobile = "Mobile number must be in this format +20xxxxxxxxxx";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    return errors;
  };
const LoginScreenRQ: React.FC = () => {
  const loginMutation = useLoginMutation();

  const formik = useFormik<FormValues>({
    initialValues: { mobile: "", password: "" },
    validate,
    onSubmit: (values) => {
      loginMutation.mutate(values); 
    },
  });
 const [secureText, setSecureText] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Mobile number"
        value={formik.values.mobile}
        onChangeText={formik.handleChange("mobile")}
        onBlur={formik.handleBlur("mobile")}
        keyboardType="phone-pad"
      />
      {formik.touched.mobile && formik.errors.mobile && (
        <Text style={styles.error}>{formik.errors.mobile}</Text>
      )}

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
        <Text style={styles.error}>{formik.errors.password}</Text>
      )}

      {loginMutation.isPending ? (
        <ActivityIndicator size="large" color="#007AFF" style={{ marginVertical: 10 }} />
      ) : (
        <Button title="Login" onPress={formik.handleSubmit as () => void} />
      )}
      {loginMutation.isError && (
        <Text style={styles.error}>Login failed </Text>
      )}

      {loginMutation.isSuccess && (
        <Text style={styles.success}>Login successful </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
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
  error: { color: "red", marginBottom: 8, textAlign: "center" },
  success: { color: "green", marginTop: 10, textAlign: "center" },
});

export default LoginScreenRQ;
