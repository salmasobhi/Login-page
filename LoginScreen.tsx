import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import apiService from './api/api_service';

const LoginScreen: React.FC = () => {
    const [formData, setFormData] = useState({
        mobile: '',
        password: ''
    });
    const [secureText, setSecureText] = useState(true);
    const handleLogin = async () => {
        try {
            const requestData = {
                data: {
                    type: "user",
                    attributes: {
                        mobile: formData.mobile,
                        password: formData.password,
                        device_type: "ios"
                    },
                    id: null
                }
            };
            const response = await apiService.create("auth/login", requestData);
            console.log("Login successful", response);
            alert("Login successful!"); 
        } catch (error) {
            console.error("Login failed!",(error as any) .response ? (error as any).response.data : (error as any).message);
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Mobile Number"
                value={formData.mobile}
                onChangeText={(mobile) => setFormData({ ...formData, mobile })}
                keyboardType="phone-pad"
                autoCapitalize="none"
            />
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.inputPassword}
                    placeholder="Password"
                    value={formData.password}
                    onChangeText={(password) => setFormData({ ...formData, password })}
                    secureTextEntry={!secureText}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={() => setSecureText(!secureText)}>
                    <MaterialCommunityIcons
                        name={secureText ? 'eye-off'  :'eye' }
                        size={24}
                        color="#aaa"
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputPassword: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 13,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;




