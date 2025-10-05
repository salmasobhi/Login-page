// import CustomButton from "@/components/ui/CustomButton";
// import { useQueryUserData } from "@/hooks/UseQueryUserData";
// import { RootStackNavigationProp } from "@/navigation/Rootstack";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useNavigation } from "@react-navigation/native";
// import { useQueryClient } from "@tanstack/react-query";
// import React from "react";
// import { Text, View } from "react-native";

// export default function HomeScreen() {
//   const navigation = useNavigation<RootStackNavigationProp>();
//   const { user, isLoading } = useQueryUserData();
//   const queryClient = useQueryClient();

//   if (isLoading) return <Text>Loading...</Text>;

//   const handleLogout = async () => {
//     try {

//       await AsyncStorage.removeItem("user");
//       // to remove cache after logout
//       queryClient.removeQueries({ queryKey: ["user"] });
//     // reset navigation to LoginScreenRQ (remove all screens)
//       navigation.reset({
//         index: 0,
//         routes: [{ name: "LoginScreenRQ" }],
//       });
//       console.log("Logout successful");
//     } catch (error) {
//       console.log("Logout error:", error);
//     }
//   };

//   return (
//     <View>
//       {user ? <Text>Hello {user.name}</Text> : <Text>Guest</Text>}
//       <CustomButton title="Logout" onPress={handleLogout} />
//     </View>
//   );
// }


import CustomButton from "@/components/ui/CustomButton";
import { useQueryUserData } from "@/hooks/UseQueryUserData";
import { RootStackNavigationProp } from "@/navigation/Rootstack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
export default function HomeScreen() {
  const { t } = useTranslation(); 
  const navigation = useNavigation<RootStackNavigationProp>();
  const { user, isLoading } = useQueryUserData();
  const queryClient = useQueryClient();
  if (isLoading) return <Text style={styles.loading}>{t("loading")}</Text>;
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      queryClient.removeQueries({ queryKey: ["user"] });
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginScreenRQ" }],
      });
      console.log("Logout successful");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.greeting}>
          {user ? `${t("Hello")}, ${user.name}` : t("Welcome, Guest!")}
        </Text>
        <CustomButton
          title={t("Logout")}
          onPress={handleLogout}
          style={styles.button as ViewStyle}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loading: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    color: "#555",
  },
  card: {
    width: "100%",
    padding: 30,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "700",
    color: "#333",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#4f46e5",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
