
// import { useQueryPackages } from '@/hooks/useQueryPackages';
// import React from 'react';
// import { ActivityIndicator, Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';

// const SECONDARY_BLUE = '#414E75';
// const PRIMARY_BLUE_TEXT = '#2562EB';

// const PackageCard = () => {
//   const { state, data: packageData } = useQueryPackages()
  
//   if (state === "loading") return (
//     <View style={styles.loaderContainer}>
//       <ActivityIndicator size="large" color={PRIMARY_BLUE_TEXT} />
//     </View>
//   );

//   if (state === "error") return <Text style={styles.stateText}>حدث خطأ أثناء تحميل البيانات</Text>;                                                                             
//   if (state === "empty") return <Text style={styles.stateText}>لا توجد باقات متاحة</Text>;

//   return (
//     <FlatList
//       data={packageData}
//       keyExtractor={(item) => item.id.toString()}
//       contentContainerStyle={{ paddingVertical: 10 }}
//       renderItem={({ item }) => (
//         <View style={styles.cardContainer}>

//           <View style={styles.infoSection}>
//             <Text style={styles.packageTitle}>{item.title}</Text>
//             <View> 
// <View style={styles.detailRow}>
//              <Image source={require('@/assets/images/Rang.png')} />
//               <Text style={styles.detailText}>
//                 مدة الحصة: {item.session_time_in_minutes} دقيقة
//               </Text>
//             </View > 
//             <View style={styles.detailRow}>
//              <Image source={require('@/assets/images/count.png')} />
//               <Text style={styles.detailText}>
//                 عدد الحصص: {item.sessions_count}
//               </Text>
//             </View>
//             </View>
            
//           </View>

//    {/* left section */}
//          <View style={styles.actionSectionContainer}>
//   <View style={styles.actionSection}>
//     <Text style={styles.priceText}>  السعر{item.price} ريال سعودي </Text>
//     <Text style={styles.taxText}>السعر شامل الضريبة</Text>
//   </View>
//   <View style={styles.actionSection}>
//     <Text style={styles.priceText}>احجز باقة شهرية</Text>
//   </View>
// </View>

//         </View>
//       )}
//     />
//   );
// };

// export default PackageCard;
// const { width, height } = Dimensions.get('window');
// const styles = StyleSheet.create({

//   stateText: {
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 16,
//     color: SECONDARY_BLUE,
//   },
//   cardContainer: {
//   width: width * 0.9,   
//   height: height * 0.2,
//   borderRadius: 8,
//   borderWidth: 1,
//   borderColor: '#ccc',
//   backgroundColor: '#fff',
//   alignSelf: 'center',
//   marginBottom: height * 0.05,
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: 10,
//   },
//   infoSection: {
//     flex: 1,
//     paddingRight: 10,
//     gap:10,
//   },
//    actionSectionContainer: {
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
//     height:height*0.08,
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
//     gap:5,
//   },
//   detailText: {
//     fontSize:9,
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
//   loaderContainer: {
//   flex: 1,
//   justifyContent: "center",
//   alignItems: "center",
//   paddingTop: 100,
// }
// });






// components/Packagecard.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
const SECONDARY_BLUE = '#414E75';
const { width, height } = Dimensions.get('window');
  const PackageCard = ({ item }: { item: any }) => {
    const { t } = useTranslation();
  return (
    <View style={styles.cardContainer}>

      {/* Info Section */}
      <View style={styles.infoSection}>
        <Text style={styles.packageTitle}>{item.title}</Text>
        <View style={styles.detailRow}>
          <Image source={require('@/assets/images/Rang.png')} />
          <Text style={styles.detailText}>
            {t("packageCard.sessionTime")}: {item.session_time_in_minutes} {t("packageCard.minutes")}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Image source={require('@/assets/images/count.png')} />
          <Text style={styles.detailText}>
            {t("packageCard.sessionsCount")}: {item.sessions_count}
          </Text>
        </View>
      </View>

      {/* Action Section */}
      <View style={styles.actionSectionContainer}>
        <View style={styles.actionSection}> 
          <Text style={styles.priceText}>{t("packageCard.price")} {item.price} {t("packageCard.rialSaudi")}</Text>
          <Text style={styles.taxText}>{t("packageCard.priceIncludesTax")}</Text>
        </View>
        <View style={styles.actionSection}>
          <Text style={styles.priceText}>{t("packageCard.bookMonthlyPackage")}</Text>
        </View>
      </View>

    </View>
  );
};

export default PackageCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: width * 0.9,   
    height: height * 0.2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginBottom: height * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  infoSection: {
    flex: 1,
    paddingRight: 10,
    gap: 10,
  },
  actionSectionContainer: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  actionSection: {
    backgroundColor: '#F3F5F8', 
    borderRadius: 10,
    padding: 15,
    width: width * 0.5,
    height: height * 0.08,
    alignItems: 'center',
  },
  packageTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: SECONDARY_BLUE,
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 5,
  },
  detailText: {
    fontSize: 9,
    fontWeight: '400',
    color: '#444',
    marginRight: 6,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#414E75',
  },
  taxText: {
    fontSize: 9,
    fontWeight: '400',
    color: SECONDARY_BLUE,
    marginBottom: 10,
  },
});
