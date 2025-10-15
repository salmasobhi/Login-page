// 


import { RootStackNavigationProp } from "@/navigation/Rootstack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";

const SplashScreen: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const navigation = useNavigation<RootStackNavigationProp>();

  useEffect(() => {
    // نبدأ أنيميشن الفيد + الزووم مع بعض
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 4,
          tension: 100,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(2000),
    ]).start(async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        navigation.replace("HomeScreen");
      } else {
        navigation.replace("LoginScreenRQ");
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/images/icon.png")}
        style={[
          styles.logo,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
});
