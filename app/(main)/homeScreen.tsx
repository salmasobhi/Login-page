// app/(main)/home.tsx
import ProductCardLoading from "@/components/loading/ProductCardLoading";
import CustomButton from "@/components/ui/CustomButton";
import PackageCard from "@/components/ui/PackageCard";
import PackagesList from "@/components/ui/PackagesList";
import { useQueryPackages } from "@/hooks/useQueryPackages";
import { User } from "@/models/userModelRQ";
import { getUserData, handleLogout } from "@/utils/storage/cacheUser";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router"; // ✅ بدل useNavigation
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter(); // ✅
  const { t } = useTranslation();
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { state, data: packageData } = useQueryPackages();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await getUserData();
      if (user) {
        setUserData(user);
        console.log("User data:", user.name);
      }
      setIsLoading(false);
    };
    fetchUserData();
  }, []);

  useFonts({
    "Alexandria-Regular": require("../../assets/fonts/Alexandria-Regular.ttf"),
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header_container}>
        <View style={styles.notificationContainer}>
          <Image source={require("@/assets/images/notification.png")} />
        </View>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>الرئيسية</Text>
        </View>
      </View>

      {/* Nav Section */}
      <View style={styles.nav}>
        <View>
          <Text style={styles.navText}>
            {`احجز حصص فردية اون لاين\nو حضورية`}
          </Text>
        </View>
        <CustomButton
          onPress={() => router.push("/(auth)/loginScreenRQ")}
          title="سجل الان"
          style={[
            styles.button,
            { backgroundColor: "#FFFFFF", margin: responsiveWidth(2) },
          ] as StyleProp<ViewStyle>}
        />
      </View>

      {/* User Card */}
      <View style={styles.card}>
        <Text style={styles.greeting}>
          {userData ? `${t("Hello")}, ${userData.name}` : t("Welcome, Guest!")}
        </Text>
        <CustomButton
          title={t("Logout")}
            onPress={handleLogout}
          style={styles.button as ViewStyle}
        />
      </View>

      {/* Packages Section */}
      <View style={styles.packagesContainer}>
        <Text style={styles.title}>{t("HomeScreen.packages")}</Text>
        <Text style={styles.subtitle}>{t("HomeScreen.allPackages")}</Text>
      </View>

      {state === "loading" ? (
        <View>
          <ProductCardLoading />
          <ProductCardLoading />
          <ProductCardLoading />
          <ProductCardLoading />
        </View>
      ) : (
        <PackagesList
          data={packageData}
          renderItem={({ item }) => <PackageCard item={item} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: responsiveWidth(5),
    alignItems: "center",
  },
  header_container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: responsiveHeight(2),
  },
  headerTitleContainer: {
    flex: 1,
  },
  headerTitle: {
    color: "#414E75",
    fontSize: responsiveFontSize(3),
    fontWeight: "500",
    textAlign: "center",
    fontFamily: "Alexandria-Regular",
  },
  notificationContainer: {
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: responsiveWidth(5.5),
    backgroundColor: "#E8EFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ECEFFF",
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2463EC",
    width: responsiveWidth(90),
    height: responsiveHeight(13),
    borderRadius: responsiveWidth(3),
    marginTop: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(5),
  },
  navText: {
    color: "white",
    fontSize: responsiveFontSize(2.3),
    lineHeight: responsiveHeight(3),
    fontFamily: "Alexandria-Bold",
  },
  card: {
    width: "100%",
    padding: responsiveWidth(6),
    backgroundColor: "#fff",
    borderRadius: responsiveWidth(5),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
    marginTop: responsiveHeight(3),
  },
  greeting: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "700",
    color: "#333",
    marginBottom: responsiveHeight(2),
  },
  button: {
    backgroundColor: "#4f46e5",
    paddingVertical: responsiveHeight(1.8),
    paddingHorizontal: responsiveWidth(8),
    borderRadius: responsiveWidth(4),
  },
  title: {
    fontSize: responsiveFontSize(2.4),
    fontWeight: "700",
    color: "#333",
  },
  subtitle: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: "400",
    color: "#333",
  },
  packagesContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: responsiveHeight(3),
  },
});
