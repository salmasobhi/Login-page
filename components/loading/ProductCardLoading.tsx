// import React from "react";
// import { StyleSheet, View } from "react-native";
// import {
//     responsiveHeight,
//     responsiveWidth
// } from "react-native-responsive-dimensions";

// const SECONDARY_BLUE = "#414E75";
// const LIGHT_GRAY = "#E0E0E0";

// export default function ProductCardLoading() {
//   return (
//     <View style={styles.cardContainer}>
//       {/* Info Section */}
//       <View style={styles.infoSection}>
//         <View style={styles.skeletonTitle} />
//         <View style={styles.detailRows}>
//           <View style={styles.skeletonText} />
//           <View style={styles.skeletonText} />
//         </View>
//       </View>

//       {/* Action Section */}
//       <View style={styles.actionSectionContainer}>
//         <View style={styles.actionSection1}>
//           <View style={styles.skeletonPrice} />
//           <View style={styles.skeletonSmallText} />
//         </View>
//         <View style={styles.actionSection2}>
//           <View style={styles.skeletonPrice} />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   cardContainer: {
//     width: responsiveWidth(90),
//     height: responsiveHeight(20),
//     borderRadius: responsiveWidth(2),
//     borderWidth: 1,
//     borderColor: "#ccc",
//     backgroundColor: "#fff",
//     alignSelf: "center",
//     marginBottom: responsiveHeight(5),
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: responsiveWidth(3),
//     gap: responsiveWidth(1),
//   },
//   infoSection: {
//     flex: 1,
//     paddingRight: responsiveWidth(1),
//     gap: responsiveHeight(3),
//   },
//   detailRows: {
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "flex-start",
//     gap: responsiveHeight(1.5),
//   },
//   actionSectionContainer: {
//     padding: responsiveWidth(0.5),
//     flexDirection: "column",
//     justifyContent: "space-between",
//     alignItems: "center",
//     gap: responsiveHeight(1),
//     margin: responsiveWidth(1),
//   },
//   actionSection1: {
//     backgroundColor: "#F3F5F8",
//     borderRadius: responsiveWidth(2.5),
//     padding: responsiveWidth(3.5),
//     width: responsiveWidth(42),
//     height: responsiveHeight(8),
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   actionSection2: {
//     backgroundColor: "#F8F9FF",
//     borderRadius: responsiveWidth(2.5),
//     padding: responsiveWidth(3.5),
//     width: responsiveWidth(42),
//     height: responsiveHeight(8),
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   // 🔸 Skeleton styles
//   skeletonTitle: {
//     width: responsiveWidth(40),
//     height: responsiveHeight(2.5),
//     backgroundColor: LIGHT_GRAY,
//     borderRadius: responsiveWidth(2),
//   },
//   skeletonText: {
//     width: responsiveWidth(30),
//     height: responsiveHeight(1.8),
//     backgroundColor: LIGHT_GRAY,
//     borderRadius: responsiveWidth(2),
//   },
//   skeletonPrice: {
//     width: responsiveWidth(20),
//     height: responsiveHeight(2),
//     backgroundColor: LIGHT_GRAY,
//     borderRadius: responsiveWidth(2),
//   },
//   skeletonSmallText: {
//     width: responsiveWidth(15),
//     height: responsiveHeight(1.5),
//     backgroundColor: LIGHT_GRAY,
//     borderRadius: responsiveWidth(2),
//     marginTop: responsiveHeight(0.5),
//   },
// });



import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";

const LIGHT_GRAY = "#E0E0E0";

const ProductCardLoading = () => {
  return (
    <View style={styles.cardContainer}>
      {/* Info Section */}
      <View style={styles.infoSection}>
        <ShimmerPlaceholder
          LinearGradient={LinearGradient}
          style={styles.skeletonTitle}
        />
        <View style={styles.detailRows}>
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            style={styles.skeletonText}
          />
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            style={styles.skeletonText}
          />
        </View>
      </View>

      {/* Action Section */}
      <View style={styles.actionSectionContainer}>
        <View style={styles.actionSection1}>
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            style={styles.skeletonPrice}
          />
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            style={styles.skeletonSmallText}
          />
        </View>
        <View style={styles.actionSection2}>
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            style={styles.skeletonPrice}
          />
        </View>
      </View>
    </View>
  );
};

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
  detailRows: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: responsiveHeight(1.5),
  },
  actionSectionContainer: {
    padding: responsiveWidth(0.5),
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: responsiveHeight(1),
    margin: responsiveWidth(1),
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
    backgroundColor: "#F8F9FF",
    borderRadius: responsiveWidth(2.5),
    padding: responsiveWidth(3.5),
    width: responsiveWidth(42),
    height: responsiveHeight(8),
    alignItems: "center",
    justifyContent: "center",
  },
  skeletonTitle: {
    width: responsiveWidth(40),
    height: responsiveHeight(2.5),
    borderRadius: responsiveWidth(2),
  },
  skeletonText: {
    width: responsiveWidth(30),
    height: responsiveHeight(1.8),
    borderRadius: responsiveWidth(2),
  },
  skeletonPrice: {
    width: responsiveWidth(20),
    height: responsiveHeight(2),
    borderRadius: responsiveWidth(2),
  },
  skeletonSmallText: {
    width: responsiveWidth(15),
    height: responsiveHeight(1.5),
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(0.5),
  },
});

export default ProductCardLoading;
