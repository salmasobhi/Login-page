

// import CustomButton from "@/components/ui/CustomButton";
// import PackageCard from "@/components/ui/PackageCard";
// import PackagesList from "@/components/ui/PackagesList";
// import { useQueryPackages } from "@/hooks/useQueryPackages";
// import { User } from "@/models/userModelRQ";
// import { RootStackNavigationProp } from "@/navigation/Rootstack";
// import { useNavigation } from "@react-navigation/native";
// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
// import { getUserData, handleLogout } from "../utils/storage/cacheUser";

// export default function HomeScreen() {
//   const navigation = useNavigation<RootStackNavigationProp>();
//   const { t } = useTranslation(); 
//   const [userData, setUserData] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//       const { state, data: packageData } = useQueryPackages()
//   useEffect(() => {
//     const fetchUserData = async () => {
//       const userData = await getUserData();
//       if (userData) {
//         setUserData(userData);
//         console.log("User data:", userData.name);
//       }
//       setIsLoading(false);
//     };
//     fetchUserData();
//   }, []);
//   if (isLoading) return <Text style={styles.loading}>{t("loading")}</Text>;
//   return (
//     <View style={styles.container}>
//      <View style={styles.header_container}>

//       <View style={styles.notificationContainer}>
//         <Image
//           source={require("../assets/images/notification.png")}
//         />
        
//       </View>
//             <View style={styles.headerTitleContainer}>
//         <Text style={styles.headerTitle}>الرئيسية</Text>
//       </View>
//     </View>
//     <View style={styles.nav}>
//       <View >
//       <Text style={styles.navText}>
//     {`احجز حصص فردية اون لاين\nو حضورية`}
// </Text>
//     </View>
//    <CustomButton
//     onPress={() => console.log("clicked")}
//     title="سجل الان"
//     style={[
//         styles.button, 
//         { backgroundColor: '#FFFFFF' } 
//     ] as StyleProp<ViewStyle>} 
// />
//     </View>

//       <View style={styles.card}>
//         <Text style={styles.greeting}>
//           {userData ? `${t("Hello")}, ${userData.name}` : t("Welcome, Guest!")}
//         </Text>
//         <CustomButton
//           title={t("Logout")}
//           onPress={() => handleLogout(navigation)}
//           style={styles.button as ViewStyle}
//         />
//       </View>
//        <View style={styles.packagesContainer} > 
//           <Text style={styles.title}>{t("HomeScreen.packages")} </Text>
//           <Text style={styles.subtitle} >{t("HomeScreen.allPackages")} </Text>
//        </View>
//        {/* <FlatList  
//       data={packageData}
//       keyExtractor={(item) => item.id.toString()}
//       contentContainerStyle={{ paddingVertical: 10 }}
//       renderItem={({ item }) => <PackageCard item={item} />}
//     /> */}
//     <PackagesList 
//   data={packageData} 
//   renderItem={({ item }) => <PackageCard item={item} />}
// />

//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f4f6f8",
//     padding: 20,
//     alignItems:"center",
//   },
// header_container:{
//   flexDirection: "row",
//   alignItems: "center",
// },
// headerTitleContainer:{
//   flex: 1,
// },
// headerTitle:{
//  color: '#414E75', 
//          fontSize: 26,    
//       fontWeight: '500', 
//         textAlign: 'center',
// }
// ,
// notificationContainer:{
//   width: 41,
//   height: 41,
//   borderRadius: 20,
//   backgroundColor: "#E8EFFF",
//   alignItems: "center",
//   justifyContent: "center",
//   borderWidth: 1,
//   borderColor: "#ECEFFF",
// },
// nav:{
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundColor: "#2463EC",
//   width:370,
//   height: 110,
//   borderRadius: 8,
//    marginLeft: 30, 
//   marginTop:131.93,
// },
// navText:{
//   color: 'white', 
//         fontSize: 21,
//         fontWeight: '300', 
//         lineHeight: 28.14, 
//         fontFamily: 'Kalligraaf Arabic',
// },
//   loading: {
//     flex: 1,
//     textAlign: "center",
//     textAlignVertical: "center",
//     fontSize: 18,
//     color: "#555",
//   },
//   card: {
//     width: "100%",
//     padding: 30,
//     backgroundColor: "#fff",
//     borderRadius: 20,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 5 },
//     shadowRadius: 10,
//     elevation: 5,
//     alignItems: "center",
//   },
//   greeting: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: 30,
//   },
//   button: {
//     backgroundColor: "#4f46e5",
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 15,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "#333",
//   },
//   subtitle: {
//     fontSize: 18,
//     fontWeight: "400",
//     color: "#333",
//   },
//   packagesContainer: {
//     width: "100%",
//     alignItems: "center",
//     display:"flex",
//     flexDirection:"row",
//     justifyContent:"space-between",
//     marginTop:30,
//   },
// });



// screens/HomeScreen.tsx
import CustomButton from "@/components/ui/CustomButton";
import PackageCard from "@/components/ui/PackageCard";
import PackagesList from "@/components/ui/PackagesList";
import { useQueryPackages } from "@/hooks/useQueryPackages";
import { User } from "@/models/userModelRQ";
import { RootStackNavigationProp } from "@/navigation/Rootstack";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { getUserData, handleLogout } from "../utils/storage/cacheUser";

export default function HomeScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
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

  if (isLoading) return <Text style={styles.loading}>{t("loading")}</Text>;
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header_container}>
        <View style={styles.notificationContainer}>
          <Image source={require("../assets/images/notification.png")} />
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
          onPress={() => console.log("clicked")}
          title="سجل الان"
          style={[
            styles.button,

            { backgroundColor: "#FFFFFF",margin : responsiveWidth(2)},
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
          onPress={() => handleLogout(navigation)}
          style={styles.button as ViewStyle}
        />
      </View>

      {/* Packages Section */}
      <View style={styles.packagesContainer}>
        <Text style={styles.title}>{t("HomeScreen.packages")}</Text>
        <Text style={styles.subtitle}>{t("HomeScreen.allPackages")}</Text>
      </View>
      <PackagesList
        data={packageData}
        renderItem={({ item }) => <PackageCard item={item} />}
      />
    </View>
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
    fontWeight: "400",
    lineHeight: responsiveHeight(3),
    fontFamily: "Kalligraaf Arabic",
  },
  loading: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: responsiveFontSize(2),
    color: "#555",
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
