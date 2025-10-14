// // components/Packagecard.jsx
// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
// const SECONDARY_BLUE = '#SECONDARY_BLUE';
// const { width, height } = Dimensions.get('window');
//   const PackageCard = ({ item }: { item: any }) => {
//     const { t } = useTranslation();
//   return (
//     <View style={styles.cardContainer}>

//       {/* Info Section */}
//       <View style={styles.infoSection}>
//         <Text style={styles.packageTitle}>{item.title}</Text>
//         <View style={styles.detailRow}>
//           <Image source={require('@/assets/images/Rang.png')} />
//           <Text style={styles.detailText}>
//             {t("packageCard.sessionTime")}: {item.session_time_in_minutes} {t("packageCard.minutes")}
//           </Text>
//         </View>
//         <View style={styles.detailRow}>
//           <Image source={require('@/assets/images/count.png')} />
//           <Text style={styles.detailText}>
//             {t("packageCard.sessionsCount")}: {item.sessions_count}
//           </Text>
//         </View>
//       </View>

//       {/* Action Section */}
//       <View style={styles.actionSectionContainer}>
//         <View style={styles.actionSection}>
//           <Text style={styles.priceText}>{t("packageCard.price")} {item.price} {t("packageCard.rialSaudi")}</Text>
//           <Text style={styles.taxText}>{t("packageCard.priceIncludesTax")}</Text>
//         </View>
//         <View style={styles.actionSection}>
//           <Text style={styles.priceText}>{t("packageCard.bookMonthlyPackage")}</Text>
//         </View>
//       </View>

//     </View>
//   );
// };

// export default PackageCard;

// const styles = StyleSheet.create({
//   cardContainer: {
//     width: width * 0.9,
//     height: height * 0.2,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#fff',
//     alignSelf: 'center',
//     marginBottom: height * 0.05,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//   },
//   infoSection: {
//     flex: 1,
//     paddingRight: 10,
//     gap: 10,
//   },
//   actionSectionContainer: {
//     padding: 10,
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     gap: 10,
//   },
//   actionSection: {
//     backgroundColor: '#F3F5F8',
//     borderRadius: 10,
//     padding: 15,
//     width: width * 0.5,
//     height: height * 0.08,
//     alignItems: 'center',
//   },
//   packageTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: SECONDARY_BLUE,
//     marginBottom: 10,
//   },
//   detailRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 6,
//     gap: 5,
//   },
//   detailText: {
//     fontSize: 9,
//     fontWeight: '400',
//     color: '#444',
//     marginRight: 6,
//   },
//   priceText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#414E75',
//   },
//   taxText: {
//     fontSize: 9,
//     fontWeight: '400',
//     color: SECONDARY_BLUE,
//     marginBottom: 10,
//   },
// });

// components/PackageCard.tsxsvg
import VectorIcon from "@/assets/images/Vector.svg";
import RangIcon from "@/assets/images/count.svg";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const SECONDARY_BLUE = "#414E75";
type PackageCardProps = {
  item: {
    title: string;
    session_time_in_minutes: number;
    sessions_count: number;
    price: number;
  };
};
const PackageCard: React.FC<PackageCardProps> = ({ item }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.cardContainer}>
      {/* Info Section */}
      <View style={styles.infoSection}>
        <Text style={styles.packageTitle}>{item.title}</Text>
         <View style={styles.detailRows}>
            <View style={styles.detailRow}>
          <VectorIcon width={15} height={15} fill={SECONDARY_BLUE} />
          <Text style={styles.detailText}>
            {t("packageCard.sessionTime")}: {item.session_time_in_minutes}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <RangIcon width={15} height={15} fill={SECONDARY_BLUE} />
          <Text style={styles.detailText}>
            {t("packageCard.sessionsCount")}: ({item.sessions_count} {t("packageCard.sessions")})
          </Text>
        </View>
         </View>
       
      </View>
      {/* Action Section */}
      <View style={styles.actionSectionContainer}>
        <View style={styles.actionSection1}>
          <Text style={styles.priceText}>
            {t("packageCard.price")} {item.price} {t("packageCard.rialSaudi")}
          </Text>
          <Text style={styles.taxText}>
            {t("packageCard.priceIncludesTax")}
          </Text>
        </View>
        <View style={styles.actionSection2}>
          <Text style={styles.priceText}>
            {t("packageCard.bookMonthlyPackage")}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PackageCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(20),
    borderRadius: responsiveWidth(2),
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    alignSelf: "center",
    marginBottom: responsiveHeight(5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: responsiveWidth(3),
    gap: responsiveWidth(1),
  },
  infoSection: {
    flex: 1,
    paddingRight: responsiveWidth(1),
    gap: responsiveHeight(3),
  },
  actionSectionContainer: {
    padding: responsiveWidth(0.5),
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: responsiveHeight(1),
    margin:responsiveWidth(1),
  },
  actionSection1: {
    backgroundColor: "#F3F5F8",
    borderRadius: responsiveWidth(2.5),
    padding: responsiveWidth(3.5),
    width: responsiveWidth(42),
    height: responsiveHeight(8),
    alignItems: "center",
    justifyContent: "center",
  },
  actionSection2: {
    backgroundColor:"#F8F9FF",
    borderRadius: responsiveWidth(2.5),
    padding: responsiveWidth(3.5),
    width: responsiveWidth(42),
    height: responsiveHeight(8),
    alignItems: "center",
    justifyContent: "center",
  },
  packageTitle: {
    fontSize: responsiveFontSize(2.5),
    color: "#172554",
    marginBottom: responsiveHeight(1),
    fontFamily: "Alexandria-Regular",

  },
  detailRows: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: responsiveHeight(1.5),
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveWidth(1),
  },
  detailText: {
    fontSize: responsiveFontSize(1.4),
    fontWeight: 400,
    color: "#414E75",
    fontFamily: "Alexandria-Regular",
  },
  priceText: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: "bold",
    color: SECONDARY_BLUE,
    fontFamily: "Alexandria-Regular",
  },
  taxText: {
    fontSize: responsiveFontSize(1.3),
    fontWeight: "400",
    color: SECONDARY_BLUE,
    marginTop: responsiveHeight(0.5),
    
  },
});
